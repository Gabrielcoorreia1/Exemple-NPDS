import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, Lightbulb, Award } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Lorem Ipsum Dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    icon: Users,
    title: "Consectetur Adipiscing",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    icon: Lightbulb,
    title: "Sed Do Eiusmod",
    description:
      "Sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    icon: Award,
    title: "Tempor Incididunt",
    description:
      "Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0055A4] to-[#003d7a] text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-white/20 text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            NPDS — Nucle de Desenvolvimento de Software
          </span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Lorem ipsum dolor sit amet consectetur
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/processo-seletivo"
              className="inline-flex items-center gap-2 bg-white text-[#0055A4] font-semibold px-7 py-3 rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
            >
              Inscrever-se agora
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/editais"
              className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-7 py-3 rounded-xl hover:bg-white/20 transition-colors"
            >
              Ver editais
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Sobre o NPDS</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua, ut enim ad minim veniam quis nostrud.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="bg-[#0055A4]/10 text-[#0055A4] w-10 h-10 flex items-center justify-center rounded-xl mb-4">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2 text-base">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Lorem ipsum dolor sit amet
          </h2>
          <p className="text-slate-500 mb-8 leading-relaxed">
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
          </p>
          <Link
            to="/editais"
            className="inline-flex items-center gap-2 bg-[#0055A4] text-white font-semibold px-7 py-3 rounded-xl hover:bg-[#004490] transition-colors shadow-md"
          >
            Um botao
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
