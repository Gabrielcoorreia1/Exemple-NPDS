import { motion } from "motion/react";
import { UploadCloud, FileType2, X } from "lucide-react";
import { WizardData } from "../types";
import { clsx } from "clsx";
import React, { useState } from "react";

interface Step2DocsProps {
  data: WizardData["docs"];
  updateData: (data: Partial<WizardData["docs"]>) => void;
  onNext: () => void;
  onBack: () => void;
}

export function Step2Docs({ data, updateData, onNext, onBack }: Step2DocsProps) {
  const [isDragging, setIsDragging] = useState(false);

  const isValid = 
    data.fullName.trim() !== "" && 
    data.email.trim() !== "" && 
    data.studentId.trim() !== "" && 
    data.semester !== "" && 
    data.fileUploaded;

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      updateData({ fileUploaded: true });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col h-full"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">Documentação e Dados</h2>
        <p className="text-slate-500 mt-2">
          Insira seus dados pessoais e faça o upload do seu histórico escolar mais recente.
        </p>
      </div>

      <div className="flex flex-col gap-6 flex-grow mb-8 overflow-y-auto pr-2 pb-2">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5 font-mono">
              NOME COMPLETO
            </label>
            <input
              type="text"
              value={data.fullName}
              onChange={(e) => updateData({ fullName: e.target.value })}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-[#0055A4] focus:ring-2 focus:ring-[#0055A4]/20 transition-all"
              placeholder="Digite seu nome completo"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5 font-mono">
                E-MAIL INSTITUCIONAL
              </label>
              <input
                type="email"
                value={data.email}
                onChange={(e) => updateData({ email: e.target.value })}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-[#0055A4] focus:ring-2 focus:ring-[#0055A4]/20 transition-all"
                placeholder="nome@instituicao.edu.br"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5 font-mono">
                MATRÍCULA
              </label>
              <input
                type="text"
                value={data.studentId}
                onChange={(e) => updateData({ studentId: e.target.value })}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-[#0055A4] focus:ring-2 focus:ring-[#0055A4]/20 transition-all"
                placeholder="000000000"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5 font-mono">
              SEMESTRE ATUAL
            </label>
            <select
              value={data.semester}
              onChange={(e) => updateData({ semester: e.target.value })}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-[#0055A4] focus:ring-2 focus:ring-[#0055A4]/20 transition-all appearance-none bg-white"
            >
              <option value="" disabled>Selecione seu semestre</option>
              <option value="7">7º Semestre</option>
              <option value="8">8º Semestre</option>
              <option value="9">9º Semestre</option>
              <option value="10">10º Semestre</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2 font-mono">
            HISTÓRICO ESCOLAR (PDF)
          </label>
          
          {!data.fileUploaded ? (
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => updateData({ fileUploaded: true })}
              className={clsx(
                "flex flex-col items-center justify-center rounded-2xl border-2 border-dashed p-8 transition-all cursor-pointer text-center",
                isDragging 
                  ? "border-[#0055A4] bg-[#0055A4]/5 scale-[1.01]" 
                  : "border-slate-300 hover:border-slate-400 hover:bg-slate-50"
              )}
            >
              <div className="rounded-full bg-blue-50 p-4 mb-4">
                <UploadCloud className="h-8 w-8 text-[#0055A4]" />
              </div>
              <p className="text-slate-700 font-medium">
                Arraste seu Histórico Escolar (PDF) atualizado aqui
              </p>
              <p className="text-slate-500 text-sm mt-1">
                ou clique para buscar do seu dispositivo
              </p>
            </div>
          ) : (
            <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-blue-50 p-3 text-[#0055A4]">
                  <FileType2 className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">historico_escolar_atualizado.pdf</p>
                  <p className="text-slate-500 text-xs mt-0.5 font-mono">1.2 MB</p>
                </div>
              </div>
              <button 
                onClick={() => updateData({ fileUploaded: false })}
                className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                title="Remover arquivo"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          )}
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
          Continuar para Perfil Técnico
        </button>
      </div>
    </motion.div>
  );
}
