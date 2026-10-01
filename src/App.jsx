import { useState } from "react";
import Inicio from "./pages/Inicio.jsx";
import Sumadora from "./pages/Sumadora.jsx";
import Traductor from "./pages/Traductor.jsx";
import Tabla from "./pages/Tabla.jsx";
import Experiencia from "./pages/Experiencia.jsx";

const menu = [
  { id: "inicio", texto: "Página Inicial", vista: <Inicio /> },
  { id: "suma", texto: "Sumadora", vista: <Sumadora /> },
  { id: "letras", texto: "Números a Letras", vista: <Traductor /> },
  { id: "tabla", texto: "Tabla de Multiplicar", vista: <Tabla /> },
  { id: "exp", texto: "Experiencia Personal", vista: <Experiencia /> },
];

export default function App() {
  const [actual, setActual] = useState("inicio");
  const pagina = menu.find((m) => m.id === actual);

  return (
    <div>
      <nav className="menu">
        {menu.map((m) => (
          <button
            key={m.id}
            className={m.id === actual ? "activo" : ""}
            onClick={() => setActual(m.id)}
          >
            {m.texto}
          </button>
        ))}
      </nav>
      <main className="contenido">{pagina.vista}</main>
    </div>
  );
}