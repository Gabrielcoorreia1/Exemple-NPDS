import { motion } from "motion/react";
import { Github, Linkedin } from "lucide-react";
import { WizardData } from "../types";
import { clsx } from "clsx";

interface Step3ProfileProps {
  data: WizardData["profile"];
  updateData: (data: Partial<WizardData["profile"]>) => void;
  onNext: () => void;
  onBack: () => void;
}

const SKILL_LEVELS = [
  { id: "pouco", label: "Inteligente" },
  { id: "quase", label: "Programa" },
  { id: "avançado", label: "Metodo Agil" },
];

export function Step3Profile({ data, updateData, onNext, onBack }: Step3ProfileProps) {
  const isValid = 
    data.motivation.trim().length > 10 &&
    data.logic !== "" &&
    data.agile !== "" &&
    data.testing !== "";

  const renderSkillMatrixRow = (
    label: string, 
    field: "logic" | "agile" | "testing"
  ) => (
    <div className="flex flex-col gap-3 py-4 border-b border-slate-100 last:border-0">
      <div className="font-semibold text-slate-800">{label}</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {SKILL_LEVELS.map((level) => {
          const isSelected = data[field] === level.id;
          return (
            <label 
              key={level.id}
              className={clsx(
                "flex items-center justify-center p-3 text-center rounded-xl border cursor-pointer transition-all text-sm font-medium",
                isSelected 
                  ? "border-[#0055A4] bg-[#0055A4]/5 text-[#0055A4]" 
                  : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50"
              )}
            >
              <input 
                type="radio" 
                name={field} 
                value={level.id}
                checked={isSelected}
                onChange={(e) => updateData({ [field]: e.target.value })}
                className="sr-only" 
              />
              {level.label}
            </label>
          );
        })}
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col h-full"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">Perfil Técnico</h2>
        <p className="text-slate-500 mt-2">
          Conte-nos um pouco sobre você, seu nível de conhecimento e onde encontrar seus projetos.
        </p>
      </div>

      <div className="flex flex-col gap-6 flex-grow mb-8 overflow-y-auto pr-2 pb-2">
        {/* Motivation Textarea */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2 font-mono">
            MOTIVAÇÃO
          </label>
          <textarea
            value={data.motivation}
            onChange={(e) => updateData({ motivation: e.target.value })}
            className="w-full min-h-[120px] rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-[#0055A4] focus:ring-2 focus:ring-[#0055A4]/20 transition-all resize-y"
            placeholder="Fale sobre você e por que deseja ingressar no NPDS..."
          />
        </div>

        {/* Skill Matrix */}
        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
          <label className="block text-sm font-semibold text-slate-700 mb-1 font-mono uppercase">
            Autoavaliação de Habilidades
          </label>
          <div className="flex flex-col">
            {renderSkillMatrixRow("Lógica", "logic")}
            {renderSkillMatrixRow("Metodologias Ágeis", "agile")}
            {renderSkillMatrixRow("Testes", "testing")}
          </div>
        </div>

        {/* Social Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5 font-mono">
              GITHUB (OPCIONAL)
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Github className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="url"
                value={data.github}
                onChange={(e) => updateData({ github: e.target.value })}
                className="w-full rounded-xl border border-slate-300 pl-11 pr-4 py-3 text-slate-900 outline-none focus:border-[#0055A4] focus:ring-2 focus:ring-[#0055A4]/20 transition-all"
                placeholder="github.com/seu-usuario"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5 font-mono">
              LINKEDIN (OPCIONAL)
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Linkedin className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="url"
                value={data.linkedin}
                onChange={(e) => updateData({ linkedin: e.target.value })}
                className="w-full rounded-xl border border-slate-300 pl-11 pr-4 py-3 text-slate-900 outline-none focus:border-[#0055A4] focus:ring-2 focus:ring-[#0055A4]/20 transition-all"
                placeholder="linkedin.com/in/seu-perfil"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto flex flex-col sm:flex-row justify-between pt-6 border-t border-slate-100 gap-3">
        <button
          onClick={onBack}
          className="rounded-xl px-6 py-3.5 font-semibold text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 transition-all w-full sm:w-auto"
        >
          Voltar
        </button>
        <button
          onClick={onNext}
          disabled={!isValid}
          className={clsx(
            "rounded-xl px-8 py-3.5 font-semibold text-white transition-all shadow-sm w-full sm:w-auto",
            isValid 
              ? "bg-[#0055A4] hover:bg-[#004482] active:scale-[0.98]" 
              : "bg-slate-300 cursor-not-allowed opacity-70"
          )}
        >
          Revisar e Enviar Inscrição
        </button>
      </div>
    </motion.div>
  );
}
