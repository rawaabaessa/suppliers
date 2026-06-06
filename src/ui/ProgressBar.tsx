import { Check } from "lucide-react";

interface StepperProps {
  steps: string[];
  currentStep: number;
}

const ProgressBar = ({ steps, currentStep }: StepperProps) => {
  return (
    <div className="w-full my-4 flex flex-col">
      <div className="flex items-start">
        {steps.map((step, index) => {
          const stepNumber = index + 1;

          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;

          return (
            <div
              key={step}
              className={`flex ${
                index !== steps.length - 1 ? "flex-1" : ""
              } items-center`}
            >
              <div className="flex flex-col items-center">
                {/* Circle */}
                <div
                  className={`
                    flex h-8 w-8 items-center justify-center rounded-full
                    transition-all duration-300
                    ${
                      isCompleted
                        ? "bg-primary text-white"
                        : isCurrent
                          ? "border-2 border-white bg-primary outline outline-primary text-white"
                          : "bg-gray-400 text-white"
                    }
                  `}
                >
                  {isCompleted ? (
                    <Check size={16} />
                  ) : (
                    <span className="text-xs font-semibold">{stepNumber}</span>
                  )}
                </div>
              </div>

              {/* Line */}
              {index !== steps.length - 1 && (
                <div
                  className={`
                     h-1 flex-1
                    ${stepNumber < currentStep ? "bg-primary" : "bg-gray-300"}
                  `}
                />
              )}
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-between">
        {/* Label */}
        {steps.map((step, index) => {
          return (
            <p
              key={index}
              className="mt-3 text-center text-xs font-medium text-gray-700"
            >
              {/* {step.split(" ").map((word, i) => (
                <span key={i} className="block">
                  {word}
                </span>
              ))} */}
              {step}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;
