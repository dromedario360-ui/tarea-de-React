import { useState } from "react";

const hasta29 = [
  "", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve",
  "diez", "once", "doce", "trece", "catorce", "quince", "dieciséis", "diecisiete",
  "dieciocho", "diecinueve", "veinte", "veintiuno", "veintidós", "veintitrés",
  "veinticuatro", "veinticinco", "veintiséis", "veintisiete", "veintiocho", "veintinueve",
];
const decenas = ["", "", "", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"];
const centenas = [
  "", "ciento", "doscientos", "trescientos", "cuatrocientos", "quinientos",
  "seiscientos", "setecientos", "ochocientos", "novecientos",
];

function menorDe100(n) {
  if (n < 30) return hasta29[n];
  const d = Math.floor(n / 10);
  const u = n % 10;
  return u === 0 ? decenas[d] : decenas[d] + " y " + hasta29[u];
}

function numeroALetras(n) {
  if (n === 1000) return "mil";
  if (n === 100) return "cien";
  const c = Math.floor(n / 100);
  const resto = n % 100;
  const partes = [];
  if (c > 0) partes.push(centenas[c]);
  if (resto > 0) partes.push(menorDe100(resto));
  return partes.join(" ");
}

export default function Traductor() {
  const [num, setNum] = useState("");
  const n = Number(num);
  const valido = Number.isInteger(n) && n >= 1 && n <= 1000;

  return (
    <div className="tarjeta">
      <h2>Números a Letras</h2>
      <input type="number" placeholder="Número del 1 al 1000" value={num} onChange={(e) => setNum(e.target.value)} />
      {num !== "" && (valido ? <h3>{numeroALetras(n)}</h3> : <p className="error">Escribe un número entero del 1 al 1000</p>)}
    </div>
  );
}