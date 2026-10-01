const datos = {
  nombre: "Deury",
  apellido: "De La Cruz",
  correo: "2023022@itla.edu.do",
 
};

export default function Inicio() {
  return (
    <div className="tarjeta centro">
      <h2>Datos Personales</h2>
      <img src="/foto.png" alt="Foto 2x2" className="foto" />
      <p><b>Nombre:</b> {datos.nombre}</p>
      <p><b>Apellido:</b> {datos.apellido}</p>
      <p><b>Correo:</b> {datos.correo}</p>
    </div>
  );
}