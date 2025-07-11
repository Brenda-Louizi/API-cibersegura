"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Sha256Section() {
  const [input, setInput] = useState("");
  const [hash, setHash] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await fetch(
        `http://localhost:3001/sha256?texto=${encodeURIComponent(input)}`
      );
      const data = await res.json();
      setHash(data.hash);
    } catch {
      setHash("Erro ao gerar hash");
    }
  };

  return (
    <motion.section
      id="sha256"
      className="text-center max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <h2 className="text-3xl font-bold mb-4">🧾 SHA‑256 Hash Generator</h2>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <input
          type="text"
          placeholder="Type text..."
          className="border px-4 py-2 rounded-md w-full sm:w-2/3"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md"
        >
          Generate
        </button>
      </div>
      {hash && (
        <p className="mt-6 break-all bg-gray-50 p-4 rounded-md">{hash}</p>
      )}
    </motion.section>
  );
}
