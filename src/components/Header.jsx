function Header({ activePage, setActivePage }) {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gradient-to-r from-[#0a0f2c] via-[#111b47] to-[#1a237e] text-white shadow-lg sticky top-0 z-50 backdrop-blur-sm">
      <span className="font-bold text-xl tracking-wider select-none cursor-pointer hover:text-cyan-400 transition-colors duration-300">
        Crypto Playground
      </span>

      <ul className="flex items-center gap-8 text-base font-medium">
        {[
          { id: "hash", label: "Hash Generator" },
          { id: "crypt", label: "Encrypt Decrypt" },
          { id: "check", label: "Integrity Checker" },
        ].map(({ id, label }) => (
          <li key={id}>
            <button
              onClick={() => setActivePage(id)}
              className={`relative transition-all duration-300 pb-1 hover:text-cyan-300 
            ${
              activePage === id
                ? "text-cyan-400 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-cyan-400 after:rounded-full"
                : "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-cyan-300 after:rounded-full hover:after:w-full"
            }`}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Header;
