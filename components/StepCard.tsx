import { Step } from "@/data/pembuatan-steps";

interface StepCardProps {
  step: Step;
  isLast?: boolean;
}

export default function StepCard({ step, isLast = false }: StepCardProps) {
  return (
    <div className="relative flex flex-col md:flex-row gap-6 p-6 sm:p-8 rounded-3xl bg-white border border-battleship/30 shadow-sm hover:shadow-md hover:border-sushi/50 transition-all duration-300">
      {/* Step Number & Connector */}
      <div className="flex md:flex-col items-center md:items-start shrink-0 gap-4">
        <div className="w-12 h-12 rounded-2xl bg-woodland text-celery flex items-center justify-center font-extrabold text-xl shadow-lg shadow-woodland/20">
          {step.number}
        </div>
        {step.badge && (
          <span className="px-3 py-1 text-xs font-bold rounded-full bg-celery/25 text-woodland border border-sushi/40">
            {step.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-woodland leading-snug">
            {step.title}
          </h3>
          <p className="mt-3 text-slate-700 text-base leading-relaxed">
            {step.description}
          </p>
        </div>

        {/* Image / Graphic Placeholder */}
        <div className="mt-6 w-full h-48 sm:h-56 rounded-2xl bg-slate-50 border border-dashed border-battleship/40 flex flex-col items-center justify-center text-battleship overflow-hidden relative group">
          <svg
            className="w-12 h-12 mb-2 text-battleship/60 group-hover:scale-110 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="text-xs font-medium tracking-wide text-woodland/80">
            Placeholder Gambar Step {step.number}
          </span>
          <span className="text-[11px] text-battleship mt-0.5">
            ({step.image})
          </span>
        </div>
      </div>
    </div>
  );
}
