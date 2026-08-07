import { Step } from "@/data/pembuatan-steps";
import StepCard from "./StepCard";

interface StepsSectionProps {
  steps: Step[];
  title?: string;
  subtitle?: string;
}

export default function StepsSection({
  steps,
  title = "Tahapan Panduan",
  subtitle = "Ikuti petunjuk langkah demi langkah di bawah ini",
}: StepsSectionProps) {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-6">
      <div className="mb-8 text-center sm:text-left">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-woodland tracking-tight">
          {title}
        </h2>
        <p className="text-battleship text-sm sm:text-base mt-1 font-medium">
          {subtitle}
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {steps.map((step, index) => (
          <StepCard
            key={step.number}
            step={step}
            isLast={index === steps.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
