"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Base64Decoder() {
  const [input, setInput] = useState("");
  const [decoded, setDecoded] = useState("");

  const handleDecode = async () => {
    try {
      const res = await fetch(
        `http://localhost:3001/decode?base64=${encodeURIComponent(input)}`
      );
      const data = await res.json();
      setDecoded(data.texto);
    } catch {
      setDecoded("Erro ao decodificar");
    }
  };

  return (
    <motion.section
      id="base64"
      className="text-center max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <h2 className="text-3xl font-bold mb-4">📤 Base64 Decoder</h2>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <input
          type="text"
          placeholder="Paste Base64 string..."
          className="border px-4 py-2 rounded-md w-full sm:w-2/3"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleDecode}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md"
        >
          Decode
        </button>
      </div>
      {decoded && (
        <p className="mt-6 break-all bg-gray-50 p-4 rounded-md">{decoded}</p>
      )}
    </motion.section>
  );
}
