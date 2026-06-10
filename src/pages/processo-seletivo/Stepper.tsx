import { Check, Code2, FileText, CheckCircle2, UserCircle } from "lucide-react";
import { clsx } from "clsx";

interface StepperProps {
  currentStep: number;
}

export function Stepper({ currentStep }: StepperProps) {
  const steps = [
    { num: 1, title: "Termos", description: "Regras", icon: FileText },
    { num: 2, title: "Documentação", description: "Dados", icon: Code2 }, 
    { num: 3, title: "Perfil", description: "Habilidades", icon: UserCircle },
    { num: 4, title: "Conclusão", description: "Fim", icon: CheckCircle2 },
  ];

  return (
    <div className="flex flex-row md:flex-col gap-2 md:gap-6 w-full items-start justify-between md:justify-start">
      {steps.map((step, index) => {
        const isActive = currentStep === step.num;
        const isPast = currentStep > step.num;

        return (
          <div key={step.num} className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4 relative flex-1 md:flex-none">
            {/* Desktop Connecting line */}
            {index !== steps.length - 1 && (
              <div 
                className={clsx(
                  "hidden md:block absolute transition-colors duration-300",
                  "md:left-5 md:ml-[-1px] md:top-10 md:w-[2px] md:h-12",
                  isPast ? "bg-[#0055A4]" : "bg-slate-200"
                )}
              />
            )}
            
            {/* Mobile Connecting line */}
            {index !== steps.length - 1 && (
              <div 
                className={clsx(
                  "md:hidden absolute transition-colors duration-300",
                  "top-5 left-[calc(50%+20px)] w-[calc(100%-40px)] h-[2px]",
                  isPast ? "bg-[#0055A4]" : "bg-slate-200"
                )}
              />
            )}
            
            <div 
              className={clsx(
                "relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300",
                isActive ? "border-[#0055A4] bg-white text-[#0055A4]" : 
                isPast ? "border-[#0055A4] bg-[#0055A4] text-white" : 
                "border-slate-200 bg-slate-50 text-slate-400"
              )}
            >
              {isPast ? (
                <Check className="h-5 w-5" />
              ) : (
                <span className="text-sm font-semibold">{step.num}</span>
              )}
            </div>

            <div className="flex flex-col pt-0 md:pt-2 text-center md:text-left">
              <span className={clsx(
                "text-[10px] md:text-sm font-semibold transition-colors leading-tight",
                isActive ? "text-[#0055A4]" : isPast ? "text-slate-900" : "text-slate-500"
              )}>
                {step.title}
              </span>
              <span className="hidden md:block text-xs text-slate-500 mt-0.5 font-mono">
                {step.description}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
