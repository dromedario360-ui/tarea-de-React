import { useState } from "react";

export default function Tabla() {
  const [num, setNum] = useState("");
  const n = Number(num);
  const filas = [];
  for (let i = 1; i <= 13; i++) filas.push(i);

  return (
    <div className="tarjeta">
      <h2>Tabla de Multiplicar</h2>
      <input type="number" placeholder="Escribe un número" value={num} onChange={(e) => setNum(e.target.value)} />
      {num !== "" && (
        <ul>
          {filas.map((i) => (
            <li key={i}>{n} x {i} = {n * i}</li>
          ))}
        </ul>
      )}
    </div>
  );
}