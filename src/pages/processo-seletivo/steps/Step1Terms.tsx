import { motion } from "motion/react";
import { Check } from "lucide-react";
import { WizardData } from "../types";
import { clsx } from "clsx";

interface Step1TermsProps {
  data: WizardData["terms"];
  updateData: (data: Partial<WizardData["terms"]>) => void;
  onNext: () => void;
}

export function Step1Terms({ data, updateData, onNext }: Step1TermsProps) {
  const allChecked = data.reqMinimum && data.presential && data.rules && data.scholarship;

  const terms = [
    {
      id: "reqMinimum" as const,
      title: "Requisito Mínimo",
      desc: "Estar matriculado no 7º semestre ou em semestre superior do curso.",
    },
    {
      id: "presential" as const,
      title: "Jornada Presencial",
      desc: "Disponibilidade para 20h semanais, 100% presencial no campus (Manhã 8h-12h ou Tarde 14h-18h).",
    },
    {
      id: "rules" as const,
      title: "Regras e Ponto",
      desc: "Registro físico de ponto obrigatório. Faltas injustificadas resultam em advertência e possível desligamento pelo Conselho do Campus.",
    },
    {
      id: "scholarship" as const,
      title: "Bolsas e Remuneração",
      desc: "A atuação padrão é de estágio voluntário. Concessão de bolsas dependerá de editais específicos de projetos do campus.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col h-full"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">Termos e Condições</h2>
        <p className="text-slate-500 mt-2">
          Por favor, leia atentamente e confirme as condições obrigatórias para ingresso no Núcleo de Desenvolvimento de Software (NPDS).
        </p>
      </div>

      <div className="flex flex-col gap-4 flex-grow mb-8">
        {terms.map((term) => {
          const isChecked = data[term.id];
          return (
            <div
              key={term.id}
              onClick={() => updateData({ [term.id]: !isChecked })}
              className={clsx(
                "group relative flex cursor-pointer rounded-2xl border-2 p-5 transition-all duration-200 hover:border-[#0055A4]/50",
                isChecked ? "border-[#0055A4] bg-[#0055A4]/5" : "border-slate-200 bg-white"
              )}
            >
              <div className="flex items-start gap-4">
                <div 
                  className={clsx(
                    "flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 transition-colors mt-0.5",
                    isChecked ? "border-[#0055A4] bg-[#0055A4]" : "border-slate-300 bg-white group-hover:border-[#0055A4]/50"
                  )}
                >
                  <Check className={clsx("h-4 w-4 text-white", isChecked ? "opacity-100" : "opacity-0")} />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-slate-900">{term.title}</span>
                  <span className="text-sm text-slate-600 leading-relaxed">{term.desc}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-auto flex justify-end pt-6 border-t border-slate-100">
        <button
          onClick={onNext}
          disabled={!allChecked}
          className={clsx(
            "rounded-xl px-8 py-3.5 font-semibold text-white transition-all shadow-sm w-full sm:w-auto",
            allChecked 
              ? "bg-[#0055A4] hover:bg-[#004482] active:scale-[0.98]" 
              : "bg-slate-300 cursor-not-allowed opacity-70"
          )}
        >
          Concordar e Iniciar Inscrição
        </button>
      </div>
    </motion.div>
  );
}
