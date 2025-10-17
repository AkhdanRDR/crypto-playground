import CryptoJS from "crypto-js";
import { useState, useEffect } from "react";

function IntegrityChecker() {
  const [hashA, setHashA] = useState("");
  const [hashB, setHashB] = useState("");
  const [resultA, setResultA] = useState("");
  const [resultB, setResultB] = useState("");
  const [equal, setEqual] = useState("Isi hash 1 dan 2");

  useEffect(() => {
    const hashed = CryptoJS.SHA256(hashA).toString(CryptoJS.enc.Hex);
    setResultA(hashed);
  }, [hashA]);

  useEffect(() => {
    const hashed = CryptoJS.SHA256(hashB).toString(CryptoJS.enc.Hex);
    setResultB(hashed);
  }, [hashB]);

  function check() {
    if (hashA && hashB) {
      setEqual(hashA === hashB ? "They're same" : "They aren't same");
    } else {
      setEqual("Isi dulu keduanya!");
    }
  }

  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-[#282C34] text-[#FFFFFF] p-6">
      <section className="w-full max-w-4xl bg-[#1E222A] rounded-2xl shadow-lg p-8 border border-[#5C6370] flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-center text-[#61DBFB] tracking-wide">
          🧩 Crypto Playground — Integrity Checker
        </h1>

        {/* Two Hash Input Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Side - Hash A */}
          <div>
            <label
              htmlFor="hashA"
              className="block text-sm font-semibold text-[#A7F3D0] mb-1"
            >
              Hash Pertama
            </label>
            <textarea
              id="hashA"
              name="hash"
              onChange={(e) => setHashA(e.target.value)}
              value={hashA}
              placeholder="Input hash pertama di sini"
              className="w-full bg-[#0F1117] text-[#61DBFB] placeholder-[#5C6370] border border-[#5C6370] rounded-xl p-3 resize-y focus:outline-none focus:ring-2 focus:ring-[#61DBFB] transition min-h-[120px] scrollbar-thin scrollbar-thumb-[#5C6370] scrollbar-track-[#1E222A]"
            ></textarea>

            <label
              htmlFor="resultA"
              className="block text-sm font-semibold text-[#A7F3D0] mt-3 mb-1"
            >
              Output A
            </label>
            <textarea
              id="resultA"
              name="output"
              readOnly
              value={resultA}
              placeholder="Output hash pertama"
              className="w-full bg-[#0F1117] text-[#39FF14] placeholder-[#5C6370] border border-[#5C6370] rounded-xl p-3 resize-y focus:outline-none min-h-[80px] scrollbar-thin scrollbar-thumb-[#5C6370] scrollbar-track-[#1E222A]"
            ></textarea>
          </div>

          {/* Right Side - Hash B */}
          <div>
            <label
              htmlFor="hashB"
              className="block text-sm font-semibold text-[#A7F3D0] mb-1"
            >
              Hash Kedua
            </label>
            <textarea
              id="hashB"
              name="hash1"
              onChange={(e) => setHashB(e.target.value)}
              value={hashB}
              placeholder="Input hash kedua di sini"
              className="w-full bg-[#0F1117] text-[#61DBFB] placeholder-[#5C6370] border border-[#5C6370] rounded-xl p-3 resize-y focus:outline-none focus:ring-2 focus:ring-[#61DBFB] transition min-h-[120px] scrollbar-thin scrollbar-thumb-[#5C6370] scrollbar-track-[#1E222A]"
            ></textarea>

            <label
              htmlFor="resultB"
              className="block text-sm font-semibold text-[#A7F3D0] mt-3 mb-1"
            >
              Output B
            </label>
            <textarea
              id="resultB"
              name="output"
              readOnly
              value={resultB}
              placeholder="Output hash kedua"
              className="w-full bg-[#0F1117] text-[#39FF14] placeholder-[#5C6370] border border-[#5C6370] rounded-xl p-3 resize-y focus:outline-none min-h-[80px] scrollbar-thin scrollbar-thumb-[#5C6370] scrollbar-track-[#1E222A]"
            ></textarea>
          </div>
        </div>

        {/* Check Button */}
        <div className="flex justify-center">
          <button
            onClick={() => check()}
            className="bg-[#61DBFB] text-[#0047AB] font-semibold px-8 py-3 rounded-xl shadow-md hover:bg-[#A7F3D0] hover:text-[#002F6C] transition transform hover:scale-105 active:scale-95"
          >
            Check Integrity
          </button>
        </div>

        {/* Result Display */}
        <div className="text-center">
          <label
            htmlFor="equal"
            className="block text-sm font-semibold text-[#A7F3D0] mb-1"
          >
            Status
          </label>
          <input
            type="text"
            id="equal"
            readOnly
            value={equal}
            className={`text-center w-full md:w-1/2 mx-auto font-bold text-lg p-3 rounded-xl border transition ${
              equal === "Match"
                ? "bg-[#39FF14] text-[#004400] border-[#39FF14]"
                : equal === "Not Match"
                ? "bg-[#FF3366] text-[#8B0000] border-[#FF3366]"
                : "bg-[#0F1117] text-[#5C6370] border-[#5C6370]"
            }`}
          />
        </div>

        {/* Footer */}
        <footer className="text-center text-sm text-[#5C6370] pt-4 border-t border-[#5C6370]">
          <p>© 2025 Crypto Playground | Hash Integrity Verification 🔍</p>
        </footer>
      </section>
    </main>
  );
}

export default IntegrityChecker;
