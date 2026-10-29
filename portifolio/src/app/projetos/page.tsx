import Link from "next/link";
import type { Metadata } from "next";

// Metadado específico desta página
export const metadata: Metadata = {
  title: "Meus Projetos | Meu Portfólio",
  description: "Confira os projetos que desenvolvi.",
};

export default function Projetos() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 md:p-24">
       <div className="flex items-center justify-between mb-12"></div>
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Meus Projetos</h1>
      
      {/* Grid para organizar os cartões de projeto */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        
        {/* Cartão do Projeto 1 */}
        <div className="group border border-slate-200 rounded-2xl p-8 bg-white hover:border-pink-300 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-400 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <h2 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-pink-600 transition-colors">Projeto 1: Pure Seduction Lux</h2>
          <p className="text-slate-600 mb-6 line-clamp-3">
            Loja de moda íntima feminina.
          </p>
           {/* Tags de Tecnologias */}
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">Node.js/Express</span>
            <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">React (Vite)</span>
          </div>
          <a 
            href="https://github.com/fernandalaralves/pure_seduction_lux" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-pink-600 font-semibold hover:gap-2 transition-all"
          >
            Ver no GitHub →
          </a>
        </div>

        {/* Cartão do Projeto 2 */}
         <div className="group border border-slate-200 rounded-2xl p-8 bg-white hover:border-pink-300 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-400 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <h2 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-pink-600 transition-colors">Projeto 2: Maya Cyber Quest</h2>
          <p className="text-slate-600 mb-6 line-clamp-3">
            Jogo infantil sobre cyber segurança, em desenvolvimento...
          </p>
           {/* Tags de Tecnologias */}
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">JavaScript</span>
          </div>
          <a 
            href="https://github.com/fernandalaralves/A-Aventura-de-Maya-na-Internet" 
            className="text-pink-600 font-medium hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver no GitHub →
          </a>
        </div>

        {/* Cartão do Projeto 3 */}
         <div className="group border border-slate-200 rounded-2xl p-8 bg-white hover:border-pink-300 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-400 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <h2 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-pink-600 transition-colors">Projeto 3: SystemChess</h2>
          <p className="text-slate-600 mb-6 line-clamp-3">
            SystemChess e um sistema web para gerenciamento de torneios de xadrez.
          </p>
           {/* Tags de Tecnologias */}
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">Java 21</span>
          </div>
          <a 
            href="https://github.com/fernandalaralves/SystemChess" 
            className="text-pink-600 font-medium hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver no GitHub →
          </a>
        </div>

        {/* Cartão do Projeto 4 */}
         <div className="group border border-slate-200 rounded-2xl p-8 bg-white hover:border-pink-300 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-400 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <h2 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-pink-600 transition-colors">Projeto 4: LUNETRAS</h2>
          <p className="text-slate-600 mb-6 line-clamp-3">
             sistema educacional para avaliação, registro e acompanhamento do nível de escrita de alunos dos anos iniciais do Ensino Fundamental.
          </p>
           {/* Tags de Tecnologias */}
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">Java 21</span>
            <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">Spring Boot</span>
            <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">Spring Security</span>
            <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">Spring Web</span>
            <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">Spring Data JPA</span>
            <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">Bucket4j</span>

          </div>
          <a 
            href="PRIVADO" 
            className="text-pink-600 font-medium hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver no GitHub →
          </a>
        </div>

      </div>

      {/* Navegação de volta para a Home usando estritamente <Link> */}
      <div className="mt-12">
        <Link 
          href="/" 
          className="px-6 py-3 bg-pink-400 text-white rounded-lg hover:bg-pink-700 transition"
        >
          ← Voltar para a Home
        </Link>
      </div>
    </main>
  );
}