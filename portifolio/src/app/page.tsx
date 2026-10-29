import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Meu Portfólio",
  description: "Bem-vindo ao meu portfólio pessoal.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center p-6 md:p-12 selection:bg-pink-500 selection:text-white">
        {/* Container principal em grid (1 coluna no celular, 2 no PC) */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* COLUNA ESQUERDA: Textos e Botões */}
        <div className="space-y-8">
          
          {/* Badge de disponibilidade */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-300">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-pink-500"></span>
            </span>
            Disponível para estágio
          </div>

          {/* Título com gradiente */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
              Desenvolvedora <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                Front-end
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-md">
              Olá, sou <strong className="text-white font-medium">Fernanda Lara Alves de Oliveira</strong> — Estudante de Análise e Desenvolvimento de Sistemas no IFCE Campus Boa Viagem.
            </p>
          </div>

          {/* Botão de Contato com Gradiente */}
          <div>
            <Link 
              href="/contato" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full font-bold text-white hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(236,72,153,0.3)]"
            >
              CONECTE-SE COMIGO
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>
        </div>

        {/* COLUNA DIREITA: Elemento Visual (Janela de Código Abstrata) */}
        <div className="hidden md:flex justify-center relative">
          {/* Brilho de fundo */}
          <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 to-purple-500/20 blur-3xl rounded-full"></div>
          
          {/* Card simulando janela */}
          <div className="relative w-full max-w-md bg-[#121212] border border-white/10 rounded-2xl p-6 shadow-2xl">
            {/* Botões do topo (Mac style) */}
            <div className="flex gap-2 mb-8">
              <div className="w-3 h-3 rounded-full bg-pink-500"></div>
              <div className="w-3 h-3 rounded-full bg-purple-500"></div>
              <div className="w-3 h-3 rounded-full bg-gray-700"></div>
            </div>
            
            {/* Simulação de código */}
            <div className="space-y-4">
              <div className="h-4 bg-white/10 rounded w-1/3"></div>
              <div className="h-6 bg-gradient-to-r from-pink-500/50 to-purple-500/50 rounded w-full"></div>
              <div className="h-4 bg-white/5 rounded w-5/6"></div>
              <div className="h-4 bg-white/5 rounded w-2/3"></div>
              
              {/* Botão fake dentro do código */}
              <div className="h-8 bg-pink-500 rounded-full w-1/2 mt-4"></div>
            </div>
            
            {/* Grid de quadrados no fundo do card */}
            <div className="grid grid-cols-3 gap-4 mt-8 opacity-50">
              <div className="h-20 bg-white/5 rounded-xl border border-white/5"></div>
              <div className="h-20 bg-white/5 rounded-xl border border-white/5"></div>
              <div className="h-20 bg-white/5 rounded-xl border border-white/5"></div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
