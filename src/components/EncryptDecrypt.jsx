import CryptoJS from "crypto-js";
import { useState } from "react";

function EncryptDecrypt() {
  const [encrypt, setEncrypt] = useState("");
  const [password, setPassword] = useState("");
  const [decrypt, setDecrypt] = useState("");
  const [result, setResult] = useState("");
  const [algo, setAlgo] = useState("Encrypt");

  function crypting(input, password) {
    if (!input.trim()) return alert("Teks tidak boleh kosong!");
    if (!password.trim()) return alert("Password tidak boleh kosong!");

    let afterCrypt;
    if (algo === "Encrypt") {
      afterCrypt = CryptoJS.AES.encrypt(input, password).toString();
      setResult(afterCrypt);
    } else if (algo === "Decrypt") {
      try {
        afterCrypt = CryptoJS.AES.decrypt(input, password).toString(
          CryptoJS.enc.Utf8
        );
        if (!afterCrypt.trim()) {
          setResult("Password salah");
        } else {
          setResult(afterCrypt);
        }
      } catch (err) {
        console.log("Teks tidak valid", err);
      }
    } else {
      throw new Error();
    }
  }

  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-[#282C34] text-(--text-white) p-6">
      <section className="w-full max-w-4xl bg-[#1E222A] rounded-2xl shadow-lg p-8 border border-[#5C6370] flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-center text-[#61DBFB] tracking-wide">
          🔒 Crypto Playground — Encrypt / Decrypt
        </h1>

        {/* Mode Selector */}
        <div className="flex justify-center">
          <div className="relative w-1/2 md:w-1/3">
            <label
              htmlFor="crypt-select"
              className="block text-sm font-semibold text-[#A7F3D0] mb-1"
            >
              Mode
            </label>
            <select
              id="crypt-select"
              name="crypt-select"
              onChange={(e) => setAlgo(e.target.value)}
              className={`w-full appearance-none bg-[#0047AB] text-white px-4 py-3 rounded-xl border border-[#5C6370] focus:ring-2 focus:ring-[#61DBFB] cursor-pointer transition`}
            >
              <option value="Encrypt">Encrypt</option>
              <option value="Decrypt">Decrypt</option>
            </select>
            <span className="absolute right-4 top-9 pointer-events-none text-[#61DBFB]">
              ▼
            </span>
          </div>
        </div>

        {/* Input + Output Layout */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Side - Input Area */}
          <div className="flex-1 flex flex-col gap-4">
            <div>
              <label
                htmlFor="encrypt"
                className="block text-sm font-semibold text-[#A7F3D0] mb-1"
              >
                Input {algo}
              </label>
              <textarea
                id="encrypt"
                name="encrypt"
                onChange={
                  algo === "Encrypt"
                    ? (e) => setEncrypt(e.target.value)
                    : (e) => setDecrypt(e.target.value)
                }
                value={algo === "Encrypt" ? encrypt : decrypt}
                placeholder={`Input ${algo} di sini`}
                className="w-full bg-[#0F1117] text-[#61DBFB] placeholder-[#5C6370] border border-[#5C6370] rounded-xl p-3 resize-y focus:outline-none focus:ring-2 focus:ring-[#61DBFB] transition max-h-48 min-h-[100px] scrollbar-thin scrollbar-thumb-[#5C6370] scrollbar-track-[#1E222A]"
              ></textarea>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-[#A7F3D0] mb-1"
              >
                Password
              </label>
              <input
                type="text"
                id="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Input password di sini"
                className="w-full bg-[#0F1117] text-[#FFFF00] placeholder-[#5C6370] border border-[#5C6370] rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#61DBFB] transition"
              />
            </div>

            <button
              onClick={() =>
                algo === "Encrypt"
                  ? crypting(encrypt, password)
                  : crypting(decrypt, password)
              }
              className={`mt-2 font-semibold px-8 py-3 rounded-xl shadow-md transition transform hover:scale-105 active:scale-95 ${
                algo === "Encrypt"
                  ? "bg-[#61DBFB] text-[#0047AB] hover:bg-[#A7F3D0] hover:text-[#002F6C]"
                  : "bg-[#BE00FE] text-white hover:bg-[#FFFF00] hover:text-[#282C34]"
              }`}
            >
              {algo}
            </button>
          </div>

          {/* Right Side - Output Area */}
          <div className="flex-1">
            <label
              htmlFor="output"
              className="block text-sm font-semibold text-[#A7F3D0] mb-1"
            >
              Output
            </label>
            <textarea
              id="output"
              name="output"
              readOnly
              value={result}
              placeholder="Output muncul di sini..."
              className={`w-full bg-[#0F1117] border border-[#5C6370] rounded-xl p-3 resize-y focus:outline-none max-h-56 min-h-[150px] scrollbar-thin scrollbar-thumb-[#5C6370] scrollbar-track-[#1E222A] ${
                algo === "Encrypt" ? "text-[#39FF14]" : "text-[#FF3366]"
              }`}
            ></textarea>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-sm text-[#5C6370] pt-4 border-t border-[#5C6370]">
          <p>© 2025 Crypto Playground | Encryption & Decryption Lab 🧩</p>
        </footer>
      </section>
    </main>
  );
}

export default EncryptDecrypt;
