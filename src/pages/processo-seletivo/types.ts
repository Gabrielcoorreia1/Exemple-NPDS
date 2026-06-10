export interface WizardData {
  terms: {
    reqMinimum: boolean;
    presential: boolean;
    rules: boolean;
    scholarship: boolean;
  };
  docs: {
    fullName: string;
    email: string;
    studentId: string;
    semester: string;
    fileUploaded: boolean;
  };
  profile: {
    motivation: string;
    logic: string;
    agile: string;
    testing: string;
    github: string;
    linkedin: string;
  };
}

export const initialWizardData: WizardData = {
  terms: {
    reqMinimum: false,
    presential: false,
    rules: false,
    scholarship: false,
  },
  docs: {
    fullName: "",
    email: "",
    studentId: "",
    semester: "",
    fileUploaded: false,
  },
  profile: {
    motivation: "",
    logic: "",
    agile: "",
    testing: "",
    github: "",
    linkedin: "",
  },
};
