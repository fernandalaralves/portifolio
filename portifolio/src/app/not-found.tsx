import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 text-center">
      <h1 className="text-9xl font-black text-slate-200">404</h1>
      <div className="absolute">
      <h2 className="text-3xl font-bold text-slate-800 mb-4">Ops! Página não encontrada</h2>
        <p className="text-slate-600 mb-8 max-w-md mx-auto">
          Parece que você tentou acessar uma página que não existe ou foi movida.
        </p>
      
      <Link 
        href="/" 
        className="px-8 py-3 bg-pink-600 text-white font-semibold rounded-full hover:bg-pink-700 transition-all shadow-lg shadow-pink-200 inline-block"
      >
        Voltar para a Home
      </Link>
      </div>
    </main>
  );
}