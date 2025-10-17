import { useState } from "react";
import Header from "./components/Header";
import HashGenerator from "./components/HashGenerator";
import EncryptDecrypt from "./components/EncryptDecrypt";
import IntegrityChecker from "./components/IntegrityChecker";

function App() {
  const [activePage, setActivePage] = useState("hash");
  return (
    <>
      <Header activePage={activePage} setActivePage={setActivePage} />
      <main className="bg-(--background) text-(--text-white) h-screen">
        {activePage === "hash" && <HashGenerator />}
        {activePage === "crypt" && <EncryptDecrypt />}
        {activePage === "check" && <IntegrityChecker />}
      </main>
    </>
  );
}

export default App;
