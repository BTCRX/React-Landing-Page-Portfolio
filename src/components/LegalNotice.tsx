import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function LegalNotice() {
  const [active, setActive] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (location.pathname !== "/admin-91d3f7x" && e.ctrlKey && e.altKey && e.key.toLowerCase() === "a") {
        setActive(true);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const onClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setActive(false);
    }
  };

  if (!active) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-body" onClick={onClickOutside}>
      <div ref={modalRef} className="bg-box-bg dark:bg-box-bg-2 rounded-3xl shadow-lg p-6 w-[90%] max-w-md animate-fadeInUp">
        <h2 className="text-heading-1 text-xl font-bold mb-2">
          🔐 Access Granted
        </h2>
        <p className="text-heading-3 text-sm mb-4">
          Kamu menemukan jalan rahasia ke panel admin. Lanjutkan?
        </p>
        <Link to="/admin-91d3f7x" onClick={() => setActive(false)} className="inline-block text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-3xl hover:scale-105 transition-transform duration-300">
          Masuk Admin
        </Link>
      </div>
    </div>
  );
}
