const VIDEO_ID = "ryq9-8gaZNs";

export default function Experiencia() {
  return (
    <div className="tarjeta centro">
      <h2>Mi Experiencia Personal</h2>
      <iframe
        width="100%"
        height="315"
        src={`https://www.youtube.com/embed/${VIDEO_ID}`}
        title="Experiencia personal"
        allowFullScreen
      ></iframe>
    </div>
  );
}