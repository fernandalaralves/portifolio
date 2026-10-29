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
          className="px-4 py-2 bg-pink-400 text-white rounded hover:bg-pink-700 transition"
        >
          Sobre Mim
        </Link>
        <Link 
          href="/projetos" 
          className="px-4 py-2 bg-pink-400 text-white rounded hover:bg-pink-700 transition"
        >
          Meus Projetos
        </Link>
      </nav>
    </main>
  );
}