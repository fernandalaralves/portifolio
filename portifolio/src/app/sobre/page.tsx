import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Mim | Meu Portfólio",
};

export default function Sobre() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-3xl font-bold mb-4">Sobre Mim</h1>
      <p className="mb-8 max-w-lg text-center">
        Sou Técnica em Informática e atualmente curso Análise e Desenvolvimento de Sistemas(Tecnólogo). Tenho interesse nas áreas de desenvolvimento de software em especial, back-end. Estou em constante aprimoramento técnico, estudando atualmente as linguagens Java e Python.
      </p>
      
      <Link 
        href="/" 
        className="text-pink-600 hover:underline"
      >
        ← Voltar para a Home
      </Link>
    </main>
  );
}