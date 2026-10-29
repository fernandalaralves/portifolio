import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meus Projetos | Meu Portfólio",
  description: "Confira os projetos que desenvolvi.",
};

export default function Projetos() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white p-6 md:p-16 selection:bg-pink-500 selection:text-white">
       <div className="max-w-6xl mx-auto">
        
        {/* Cabeçalho da página */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Meus <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Projetos</span>
            </h1>
            <p className="text-gray-400 max-w-2xl text-lg">
              Uma seleção dos sistemas, jogos e aplicações que venho construindo durante minha jornada acadêmica e profissional.
            </p>
          </div>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-sm font-medium hover:bg-white/10 transition-colors w-fit"
          >
            ← Voltar para a Home
          </Link>
        </div>
        
        {/* Grid para organizar os cartões de projeto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Cartão do Projeto 1 */}
          <div className="group relative bg-[#121212] border border-white/10 rounded-2xl p-8 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)] transition-all duration-300 flex flex-col h-full">
            {/* Linha de gradiente no topo ao passar o mouse */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl"></div>
            
            <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-pink-400 transition-colors">
              Pure Seduction Lux
            </h2>
            <p className="text-gray-400 mb-6 flex-grow">
              Loja de moda íntima feminina.
            </p>
            
            {/* Tags de Tecnologias */}
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-3 py-1 bg-white/5 border border-white/5 text-gray-300 text-sm rounded-full">Node.js/Express</span>
              <span className="px-3 py-1 bg-white/5 border border-white/5 text-gray-300 text-sm rounded-full">React (Vite)</span>
            </div>
            
            <a 
              href="https://github.com/fernandalaralves/pure_seduction_lux" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-pink-400 font-semibold group-hover:gap-2 transition-all w-fit"
            >
              Ver no GitHub <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </a>
          </div>

          {/* Cartão do Projeto 2 */}
          <div className="group relative bg-[#121212] border border-white/10 rounded-2xl p-8 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)] transition-all duration-300 flex flex-col h-full">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl"></div>
            
            <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-pink-400 transition-colors">
              Maya Cyber Quest
            </h2>
            <p className="text-gray-400 mb-6 flex-grow">
              Jogo infantil sobre cyber segurança, em desenvolvimento...
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-3 py-1 bg-white/5 border border-white/5 text-gray-300 text-sm rounded-full">JavaScript</span>
            </div>
            
            <a 
              href="https://github.com/fernandalaralves/A-Aventura-de-Maya-na-Internet" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-pink-400 font-semibold group-hover:gap-2 transition-all w-fit"
            >
              Ver no GitHub <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </a>
          </div>

          {/* Cartão do Projeto 3 */}
          <div className="group relative bg-[#121212] border border-white/10 rounded-2xl p-8 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)] transition-all duration-300 flex flex-col h-full">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl"></div>
            
            <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-pink-400 transition-colors">
              SystemChess
            </h2>
            <p className="text-gray-400 mb-6 flex-grow">
              SystemChess é um sistema web para gerenciamento de torneios de xadrez.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-3 py-1 bg-white/5 border border-white/5 text-gray-300 text-sm rounded-full">Java 21</span>
            </div>
            
            <a 
              href="https://github.com/fernandalaralves/SystemChess" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-pink-400 font-semibold group-hover:gap-2 transition-all w-fit"
            >
              Ver no GitHub <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </a>
          </div>

          {/* Cartão do Projeto 4 */}
          <div className="group relative bg-[#121212] border border-white/10 rounded-2xl p-8 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)] transition-all duration-300 flex flex-col h-full">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl"></div>
            
            <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-pink-400 transition-colors">
              LUNETRAS
            </h2>
            <p className="text-gray-400 mb-6 flex-grow">
              Sistema educacional para avaliação, registro e acompanhamento do nível de escrita de alunos dos anos iniciais do Ensino Fundamental.
            </p>
            
            {/* Tags de Tecnologias */}
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-3 py-1 bg-white/5 border border-white/5 text-gray-300 text-sm rounded-full">Java 21</span>
              <span className="px-3 py-1 bg-white/5 border border-white/5 text-gray-300 text-sm rounded-full">Spring Boot</span>
              <span className="px-3 py-1 bg-white/5 border border-white/5 text-gray-300 text-sm rounded-full">Spring Security</span>
              <span className="px-3 py-1 bg-white/5 border border-white/5 text-gray-300 text-sm rounded-full">Spring Web</span>
              <span className="px-3 py-1 bg-white/5 border border-white/5 text-gray-300 text-sm rounded-full">Spring Data JPA</span>
              <span className="px-3 py-1 bg-white/5 border border-white/5 text-gray-300 text-sm rounded-full">Bucket4j</span>
            </div>
            
            {/* Link apontando para PRIVADO conforme o seu código original */}
            <a 
              href="#" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-pink-400 font-semibold group-hover:gap-2 transition-all w-fit"
              title="Repositório Privado"
            >
              Ver no GitHub (Privado) <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </a>
          </div>

        </div>
      </div>
    </main>
  );
}