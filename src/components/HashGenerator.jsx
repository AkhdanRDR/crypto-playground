import CryptoJS from "crypto-js";
import { useState } from "react";

function HashGenerator() {
  const [hash, setHash] = useState("");
  const [result, setResult] = useState("");
  const [algo, setAlgo] = useState("SHA256");

  function hashing(input) {
    if (!input.trim()) return alert("Input tidak boleh kosong!");
    let afterHash;
    if (algo === "SHA256") {
      afterHash = CryptoJS.SHA256(input);
    } else if (algo === "MD5") {
      afterHash = CryptoJS.MD5(input);
    } else if (algo === "SHA512") {
      afterHash = CryptoJS.SHA512(input);
    } else {
      console.log("Error occured!");
    }
    setResult(afterHash.toString(CryptoJS.enc.Hex));
  }

  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-[#282C34] text-(--text-white) p-6">
      <section className="w-full max-w-4xl bg-[#1E222A] rounded-2xl shadow-lg p-8 border border-[#5C6370] flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-center text-[#61DBFB] tracking-wide">
          🔐 Crypto Playground — Hash Generator
        </h1>

        {/* Select + Input Area */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative w-full md:w-1/3">
            <label
              htmlFor="hash-select"
              className="block text-sm font-semibold text-[#A7F3D0] mb-1"
            >
              Algoritma
            </label>
            <select
              id="hash-select"
              name="hash-select"
              onChange={(e) => setAlgo(e.target.value)}
              className="w-full appearance-none bg-[#0047AB] text-white px-4 py-3 rounded-xl border border-[#5C6370] focus:ring-2 focus:ring-[#61DBFB] cursor-pointer transition"
            >
              <option value="SHA256">SHA256</option>
              <option value="MD5">MD5</option>
              <option value="SHA512">SHA512</option>
            </select>
            {/* Custom dropdown icon */}
            <span className="absolute right-4 top-9 pointer-events-none text-[#61DBFB]">
              ▼
            </span>
          </div>

          <div className="flex-1">
            <label
              htmlFor="hash"
              className="block text-sm font-semibold text-[#A7F3D0] mb-1"
            >
              Input
            </label>
            <textarea
              id="hash"
              name="hash"
              onChange={(e) => setHash(e.target.value)}
              value={hash}
              placeholder={`Input ${algo} di sini`}
              className="w-full bg-[#0F1117] text-[#61DBFB] placeholder-[#5C6370] border border-[#5C6370] rounded-xl p-3 resize-y focus:outline-none focus:ring-2 focus:ring-[#61DBFB] transition max-h-48 min-h-[100px] scrollbar-thin scrollbar-thumb-[#5C6370] scrollbar-track-[#1E222A]"
            ></textarea>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <button
            onClick={() => hashing(hash)}
            className="bg-[#61DBFB] text-[#0047AB] font-semibold px-8 py-3 rounded-xl shadow-md hover:bg-[#A7F3D0] hover:text-[#002F6C] transition transform hover:scale-105 active:scale-95"
          >
            Generate Hash
          </button>
        </div>

        {/* Output Area */}
        <div>
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
            placeholder="Hasil hash muncul di sini..."
            className="w-full bg-[#0F1117] text-[#39FF14] placeholder-[#5C6370] border border-[#5C6370] rounded-xl p-3 resize-y focus:outline-none max-h-56 min-h-[120px] scrollbar-thin scrollbar-thumb-[#5C6370] scrollbar-track-[#1E222A]"
          ></textarea>
        </div>

        {/* Footer */}
        <footer className="text-center text-sm text-[#5C6370] pt-4 border-t border-[#5C6370]">
          <p>© 2025 Crypto Playground | Built for learners & explorers 🧠</p>
        </footer>
      </section>
    </main>
  );
}

export default HashGenerator;
