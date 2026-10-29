import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Meu Portfólio",
  description: "Bem-vindo ao meu portfólio pessoal.",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Olá, sou a Fernanda</h1>
      
      <nav className="flex gap-6">
        <Link 
          href="/sobre" 
          className="px-8 py-3 bg-pink-600 text-white font-semibold rounded-full hover:bg-pink-700 hover:scale-105 transition-all duration-200 shadow-lg shadow-pink-200 text-center"
        >
          Sobre Mim
        </Link>
        
        <Link 
          href="/projetos" 
          className="px-8 py-3 bg-pink-600 text-white font-semibold rounded-full hover:bg-pink-700 hover:scale-105 transition-all duration-200 shadow-lg shadow-pink-200 text-center"
        >
          Meus Projetos
        </Link>
      </nav>
    </main>
  );
}