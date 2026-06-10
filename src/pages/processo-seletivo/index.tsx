import { useState } from "react";
import { Stepper } from "./Stepper";
import { Step1Terms } from "./steps/Step1Terms";
import { Step2Docs } from "./steps/Step2Docs";
import { Step3Profile } from "./steps/Step3Profile";
import { Step4Success } from "./steps/Step4Success";
import { WizardData, initialWizardData } from "./types";
import { motion, AnimatePresence } from "motion/react";
import { Code2 } from "lucide-react";

export function WizardContainer() {
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState<WizardData>(initialWizardData);

  const updateTerms = (termsUpdate: Partial<WizardData["terms"]>) => {
    setData((prev) => ({ ...prev, terms: { ...prev.terms, ...termsUpdate } }));
  };

  const updateDocs = (docsUpdate: Partial<WizardData["docs"]>) => {
    setData((prev) => ({ ...prev, docs: { ...prev.docs, ...docsUpdate } }));
  };

  const updateProfile = (profileUpdate: Partial<WizardData["profile"]>) => {
    setData((prev) => ({ ...prev, profile: { ...prev.profile, ...profileUpdate } }));
  };

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 4));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const resetWizard = () => {
    setData(initialWizardData);
    setCurrentStep(1);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-slate-50 flex items-start justify-center p-0 md:p-6 lg:p-12 w-full overflow-x-hidden">
      {/* Main Card */}
      <div className="w-full max-w-6xl bg-white md:rounded-3xl shadow-xl shadow-slate-200/50 flex flex-col md:flex-row min-h-screen md:min-h-[700px]">
        
        {/* Left Column / Top Bar: Sidebar & Stepper */}
        <div className="w-full md:w-[320px] lg:w-[380px] bg-slate-50 border-b md:border-b-0 md:border-r border-slate-200 shrink-0 sticky top-0 z-30 flex flex-col md:self-start md:h-[calc(100vh-3rem)] md:max-h-[700px] md:rounded-l-3xl">
          <div className="p-4 md:p-8 flex flex-col h-full w-full">
            <div className="flex justify-between md:justify-start items-center gap-3 mb-6 md:mb-12">
              <div className="flex items-center gap-3">
                <div className="bg-[#0055A4] p-2 md:p-2.5 rounded-xl text-white shrink-0">
                  <Code2 className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <div>
                  <h1 className="font-bold text-slate-900 leading-tight tracking-tight text-base md:text-lg">NPDS</h1>
                  <p className="text-[10px] md:text-xs text-slate-500 font-medium tracking-wide">SOFTWARE NUCLEUS</p>
                </div>
              </div>
            </div>
            
            <div className="flex-grow flex flex-col justify-start items-center md:items-start w-full">
              <Stepper currentStep={currentStep} />
            </div>

            <div className="mt-8 pt-8 hidden md:block border-t border-slate-200">
              <div className="bg-blue-50/50 rounded-2xl p-5 border border-blue-100/50">
                <p className="text-xs text-[#0055A4] font-medium leading-relaxed">
                  Precisa de ajuda com sua inscrição? Entre em contato com o suporte técnico do campus.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form Content */}
        <div className="flex-1 p-5 sm:p-8 lg:p-12 relative flex flex-col min-w-0">
          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <Step1Terms key="step1" data={data.terms} updateData={updateTerms} onNext={nextStep} />
            )}
            {currentStep === 2 && (
              <Step2Docs key="step2" data={data.docs} updateData={updateDocs} onNext={nextStep} onBack={prevStep} />
            )}
            {currentStep === 3 && (
              <Step3Profile key="step3" data={data.profile} updateData={updateProfile} onNext={nextStep} onBack={prevStep} />
            )}
            {currentStep === 4 && (
              <Step4Success key="step4" onReset={resetWizard} />
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
