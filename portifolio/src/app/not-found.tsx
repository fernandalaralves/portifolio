import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-6xl font-bold text-pink-800 mb-4">404</h1>
      <p className="text-xl mb-8">Página não encontrada!</p>
      
      <Link 
        href="/" 
        className="px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition"
      >
        Voltar para a Home
      </Link>
    </main>
  );
}