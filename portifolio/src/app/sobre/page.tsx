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
        Olá! Sou a Fernanda, estudante de ads.
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