export default function Footer() {
  return (
    <footer className="mt-20 px-6 pb-10">

      {/* Divider */}
      <div className="h-px bg-white/10 mb-6 max-w-6xl mx-auto"></div>

      {/* Content */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row 
        items-center justify-between gap-4 text-sm text-gray-400">

        {/* Left */}
        <p>
          © {new Date().getFullYear()} Philomina Divita
        </p>

        {/* Center */}
        <p className="text-gray-500">
          Built with React & Tailwind
        </p>

        {/* Right */}
        <div className="flex gap-4">

          <a
            href="https://www.linkedin.com/in/philomina-divita"
            target="_blank"
            className="hover:text-green-400 transition"
          >
            LinkedIn
          </a>


          <a
            href="mailto:divitap1281@gmail.com"
            className="hover:text-green-400 transition"
          >
            Email
          </a>

        </div>

      </div>

    </footer>
  );
}