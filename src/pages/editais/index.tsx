import { Link } from "react-router-dom";
import { ArrowRight, Calendar, FileText, Tag } from "lucide-react";

const editais = [
  {
    id: 1,
    tag: "Processo Seletivo",
    title: "Edital NPDS Nº 01/2026 — Lorem Ipsum Dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "10/06/2026",
    deadline: "30/06/2026",
  },
  {
    id: 2,
    tag: "Processo Seletivo",
    title: "Edital NPDS Nº 02/2026 — Consectetur Adipiscing",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "15/06/2026",
    deadline: "05/07/2026",
  },
  {
    id: 3,
    tag: "Processo Seletivo",
    title: "Edital NPDS Nº 03/2026 — Sed Do Eiusmod Tempor",
    description:
      "Ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Sed blandit libero volutpat sed cras ornare arcu.",
    date: "20/06/2026",
    deadline: "10/07/2026",
  },
  {
    id: 4,
    tag: "Processo Seletivo",
    title: "Edital NPDS Nº 04/2026 — Incididunt Ut Labore",
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.",
    date: "25/06/2026",
    deadline: "15/07/2026",
  },
  {
    id: 5,
    tag: "Processo Seletivo",
    title: "Edital NPDS Nº 05/2026 — Dolore Magna Aliqua",
    description:
      "Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.",
    date: "01/07/2026",
    deadline: "20/07/2026",
  },
  {
    id: 6,
    tag: "Processo Seletivo",
    title: "Edital NPDS Nº 06/2026 — Quis Nostrud Exercitation",
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Proin vel ante a orci tempus eleifend ut et magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "05/07/2026",
    deadline: "25/07/2026",
  },
    {
    id: 7,
    tag: "Processo Seletivo",
    title: "Edital NPDS Nº 06/2026 — Quis Nostrud Exercitation",
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Proin vel ante a orci tempus eleifend ut et magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "05/07/2026",
    deadline: "25/07/2026",
  },
    {
    id: 8,
    tag: "Processo Seletivo",
    title: "Edital NPDS Nº 06/2026 — Quis Nostrud Exercitation",
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Proin vel ante a orci tempus eleifend ut et magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "05/07/2026",
    deadline: "25/07/2026",
  },
    {
    id: 9,
    tag: "Processo Seletivo",
    title: "Edital NPDS Nº 06/2026 — Quis Nostrud Exercitation",
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Proin vel ante a orci tempus eleifend ut et magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "05/07/2026",
    deadline: "25/07/2026",
  },
    {
    id: 10,
    tag: "Processo Seletivo",
    title: "Edital NPDS Nº 06/2026 — Quis Nostrud Exercitation",
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Proin vel ante a orci tempus eleifend ut et magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "05/07/2026",
    deadline: "25/07/2026",
  },
    {
    id: 11,
    tag: "Processo Seletivo",
    title: "Edital NPDS Nº 06/2026 — Quis Nostrud Exercitation",
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Proin vel ante a orci tempus eleifend ut et magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "05/07/2026",
    deadline: "25/07/2026",
  },
    {
    id: 12,
    tag: "Processo Seletivo",
    title: "Edital NPDS Nº 06/2026 — Quis Nostrud Exercitation",
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Proin vel ante a orci tempus eleifend ut et magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "05/07/2026",
    deadline: "25/07/2026",
  },

];

export function EditaisPage() {
  return (
    <main className="py-16 px-4 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-slate-900 mb-3">Editais</h1>
          <p className="text-slate-500 text-base max-w-2xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Confira abaixo os editais disponíveis
            e candidate-se ao processo seletivo do NPDS.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {editais.map((edital) => (
            <div
              key={edital.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col gap-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 bg-[#0055A4]/10 text-[#0055A4] text-xs font-semibold px-3 py-1 rounded-full">
                  <Tag className="h-3 w-3" />
                  {edital.tag}
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-slate-100 text-slate-500 w-8 h-8 flex items-center justify-center rounded-lg shrink-0 mt-0.5">
                  <FileText className="h-4 w-4" />
                </div>
                <h2 className="font-semibold text-slate-900 text-sm leading-snug">{edital.title}</h2>
              </div>

              <p className="text-slate-500 text-sm leading-relaxed flex-1">{edital.description}</p>

              <div className="flex flex-col gap-1 text-xs text-slate-400 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3 w-3" />
                  Publicação: <span className="font-medium text-slate-600">{edital.date}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3 w-3" />
                  Inscrições até: <span className="font-medium text-slate-600">{edital.deadline}</span>
                </span>
              </div>

              <Link
                to="/processo-seletivo"
                className="inline-flex items-center justify-center gap-2 bg-[#0055A4] text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-[#004490] transition-colors mt-1"
              >
                Inscrever-se
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
