import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-body p-6">
      <div className="bg-box-bg rounded-3xl shadow-md p-10 max-w-md w-full text-center text-heading-1">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-6">Page Not Found</p>
        <Link
          to="/"
          className="inline-block px-6 py-3 rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:scale-105 transition-transform duration-300"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
