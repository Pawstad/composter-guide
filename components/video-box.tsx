"use client";

interface VideoBoxProps {
  url: string;
  title?: string;
}

function extractVideoId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([^&\n?#]+)/,
    /youtube\.com\/embed\/([^&\n?#]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match?.[1]) return match[1];
  }
  return null;
}

function isShortsUrl(url: string): boolean {
  return /youtube\.com\/shorts\//.test(url);
}

export default function VideoBox({ url, title = "YouTube video" }: VideoBoxProps) {
  const videoId = extractVideoId(url);
  const isShort = isShortsUrl(url);

  if (!videoId) {
    return (
      <div
        className="aspect-video w-full rounded-2xl bg-woodland/10 border border-sushi/30 flex items-center justify-center"
        role="alert"
      >
        <p className="text-woodland/60 text-center px-4">Invalid YouTube URL</p>
      </div>
    );
  }

  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=0&mute=0&rel=0&modestbranding=1`;
  const aspectRatio = isShort ? "9 / 16" : "16 / 9";

  return (
    <div
      className="w-full max-w-3xl mx-auto overflow-hidden rounded-2xl"
      style={{ aspectRatio }}
    >
      <iframe
        src={embedUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-full border-0"
      />
    </div>
  );
}
