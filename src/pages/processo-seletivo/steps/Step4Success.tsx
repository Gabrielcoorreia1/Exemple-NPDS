import { motion } from "motion/react";
import { CheckCircle2, ChevronRight } from "lucide-react";

interface Step4SuccessProps {
  onReset: () => void;
}

export function Step4Success({ onReset }: Step4SuccessProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center h-full text-center py-12 px-6"
    >
      <div className="relative mb-8">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
          className="absolute inset-0 bg-[#0055A4]/10 rounded-full blur-2xl" 
        />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
        >
          <CheckCircle2 className="relative h-28 w-28 text-[#0055A4]" strokeWidth={1.5} />
        </motion.div>
      </div>

      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-3xl font-bold text-slate-900 mb-4"
      >
        Inscrição Recebida com Sucesso!
      </motion.h2>
      
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-lg text-slate-500 mb-10 max-w-md mx-auto leading-relaxed"
      >
        Sua candidatura para o Núcleo de Desenvolvimento de Software (NPDS) foi registrada. Fique atento ao seu <strong className="text-slate-700">e-mail institucional</strong> para convocações de testes de nivelamento ou entrevistas.
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        onClick={onReset}
        className="flex items-center gap-2 rounded-xl bg-slate-900 px-8 py-4 font-semibold text-white transition-all hover:bg-slate-800 hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-slate-900/20"
      >
        Voltar para a página inicial
        <ChevronRight className="h-5 w-5" />
      </motion.button>
    </motion.div>
  );
}
