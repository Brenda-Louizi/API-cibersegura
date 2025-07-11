import Header from "../components/Header";
import PasswordGenerator from "../components/PasswordGenerator";
import Sha256Section from "../components/Sha256Section";
import Base64Decoder from "../components/Base64Decoder";

export const metadata = {
  title: "Cibersegura Landing Page",
  description:
    "Landing page que consome a API Cibersegura para senhas fortes, SHA‑256 e Base64",
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="space-y-24 py-12 px-4 md:px-16">
        <PasswordGenerator />
        <Sha256Section />
        <Base64Decoder />
      </main>
    </>
  );
}
