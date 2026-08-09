declare module "lite-youtube-embed";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "lite-youtube": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        videoid: string;
        nocookie?: boolean;
        short?: boolean;
        posterquality?: "maxresdefault" | "sddefault" | "mqdefault" | "hqdefault";
        videotitle?: string;
        videoplay?: string;
        params?: string;
        autoload?: boolean;
        start?: number;
      };
    }
  }
}