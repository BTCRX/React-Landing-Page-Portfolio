import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        navigate("/admin-panel");
      }, 1500); // delay 1.5 detik sebelum redirect

      return () => clearTimeout(timer); // cleanup timer saat unmount
    }
  }, [success, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (username === "admin" && password === "123456") {
      setSuccess(true);
    } else {
      setError("❌ Wrong username or password.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-body px-4 text-heading-1">
      <div className="animated-gradient-border rounded-3xl p-[2px] max-w-md w-full animate-fadeInUp">
        <div className="bg-box-bg dark:bg-gray-900 rounded-3xl p-8 shadow-2xl">
          <h1 className="text-3xl font-bold mb-6 text-heading-1 text-center">
            🔐 Admin Login
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="username"
                className="block mb-2 text-heading-2 font-semibold"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-box-bg dark:bg-gray-800 text-heading-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                required
                autoComplete="username"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-heading-2 font-semibold"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-box-bg dark:bg-gray-800 text-heading-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                required
                autoComplete="current-password"
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm font-semibold text-center">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
