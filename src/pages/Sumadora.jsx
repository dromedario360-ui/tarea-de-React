import { useState } from "react";

export default function Sumadora() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [resultado, setResultado] = useState(null);

  const sumar = () => setResultado(Number(a) + Number(b));

  return (
    <div className="tarjeta">
      <h2>Sumadora</h2>
      <input type="number" placeholder="Número 1" value={a} onChange={(e) => setA(e.target.value)} />
      <input type="number" placeholder="Número 2" value={b} onChange={(e) => setB(e.target.value)} />
      <button onClick={sumar}>Sumar</button>
      {resultado !== null && <h3>Resultado: {resultado}</h3>}
    </div>
  );
}