export const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2 4a2 2 0 012-2h16a2 2 0 012 2v16l-4-4H4a2 2 0 01-2-2V4z" />
              </svg>
              <a href="mailto:c.donny0000@gmail.com" className="hover:underline">c.donny0000@gmail.com</a>
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 24h-5v-5h5v5zM22 0h-5v5h5V0zM2 24H0v-5h5v5H2zM0 0h5v5H0V0zM12 8a4 4 0 100 8 4 4 0 000-8zm0 10c-3.31 0-10 1.66-10 5v1h20v-1c0-3.34-6.69-5-10-5z" />
              </svg>
              <a href="https://discord.com/invite/https://discord.gg/JA7hAVPw" target="_blank" className="hover:underline">Discord</a>
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.5 3.5C18.29 1.29 15.2 0 12 0C8.8 0 5.71 1.29 3.5 3.5C1.29 5.71 0 8.8 0 12c0 2.17.65 4.28 1.87 6.07L0 24l5.93-1.87A11.953 11.953 0 0012 24c3.2 0 6.29-1.29 8.5-3.5S24 15.2 24 12c0-3.2-1.29-6.29-3.5-8.5z" />
              </svg>
              <a href="https://wa.me/1234567890" target="_blank" className="hover:underline">WhatsApp</a>
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.4.59.2 1.01.44 1.46.89.45.45.69.87.89 1.46.16.46.35 1.26.4 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.4 2.43-.2.59-.44 1.01-.89 1.46-.45.45-.87.69-1.46.89-.46.16-1.26.35-2.43.4-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.4-.59-.2-1.01-.44-1.46-.89-.45-.45-.69-.87-.89-1.46-.16-.46-.35-1.26-.4-2.43C2.212 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.054-1.17.24-1.97.4-2.43.2-.59.44-1.01.89-1.46.45-.45.87-.69 1.46-.89.46-.16 1.26-.35 2.43-.4C8.416 2.212 8.8 2.2 12 2.2zm0 1.8c-3.16 0-3.53.012-4.77.068-1.02.048-1.576.218-1.94.364-.49.19-.84.41-1.21.78-.37.37-.59.72-.78 1.21-.146.364-.316.92-.364 1.94C3.412 8.47 3.4 8.84 3.4 12s.012 3.53.068 4.77c.048 1.02.218 1.576.364 1.94.19.49.41.84.78 1.21.37.37.72.59 1.21.78.364.146.92.316 1.94.364C8.47 20.588 8.84 20.6 12 20.6s3.53-.012 4.77-.068c1.02-.048 1.576-.218 1.94-.364.49-.19.84-.41 1.21-.78.37-.37.59-.72.78-1.21.146-.364.316-.92.364-1.94.058-1.24.07-1.61.07-4.77s-.012-3.53-.068-4.77c-.048-1.02-.218-1.576-.364-1.94-.19-.49-.41-.84-.78-1.21-.37-.37-.72-.59-1.21-.78-.364-.146-.92-.316-1.94-.364C15.53 4.012 15.16 4 12 4zm0 3a5 5 0 110 10 5 5 0 010-10zm0 1.8a3.2 3.2 0 100 6.4 3.2 3.2 0 000-6.4zm6.4-.7a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
              </svg>
              <a href="https://instagram.com/yourprofile" target="_blank" className="hover:underline">Instagram</a>
            </li>
          </ul>
        </div>

        <div className="sm:col-span-2 md:col-span-3">
          <h2 className="text-xl font-semibold mb-4">About Us</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            We're a passionate team focused on digital design, development, and creative tech. Whether you're looking to collaborate or just say hi, we're happy to connect!
          </p>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-xs border-t border-gray-700 pt-4">
        &copy; 2025 Portfolio Project-D. All rights reserved.
      </div>
    </footer>
  );
};
