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
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Meus Projetos</h1>
      
      {/* Grid para organizar os cartões de projeto */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        
        {/* Cartão do Projeto 1 */}
        <div className="border border-pink-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
          <h2 className="text-2xl font-semibold mb-2">Projeto 1: Pure Seduction Lux</h2>
          <p className="text-gray-600 mb-4">
            Loja de moda íntima feminina, desenvolvida em Node.js/Express (API REST), frontend em React (Vite).
          </p>
          <a 
            href="https://github.com/fernandalaralves/pure_seduction_lux" 
            className="text-pink-600 font-medium hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver no GitHub →
          </a>
        </div>

        {/* Cartão do Projeto 2 */}
        <div className="border border-pink-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
          <h2 className="text-2xl font-semibold mb-2">Projeto 2: Maya Cyber Quest</h2>
          <p className="text-gray-600 mb-4">
            Jogo infantil sobre cyber segurança, em desenvolvimento...
          </p>
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
        <div className="border border-pink-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
          <h2 className="text-2xl font-semibold mb-2">Projeto 3: SystemChess</h2>
          <p className="text-gray-600 mb-4">
            SystemChess e um sistema web para gerenciamento de torneios de xadrez. O projeto possui back end em Java 21.
          </p>
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
        <div className="border border-pink-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
          <h2 className="text-2xl font-semibold mb-2">Projeto 4: LUNETRAS</h2>
          <p className="text-gray-600 mb-4">
             sistema educacional para avaliação, registro e acompanhamento do nível de escrita de alunos dos anos iniciais do Ensino Fundamental.
          </p>
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
          className="px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition"
        >
          ← Voltar para a Home
        </Link>
      </div>
    </main>
  );
}