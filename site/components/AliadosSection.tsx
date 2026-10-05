const aliados = [
  { name: "Seguros Monterrey", note: "New York Life" },
  { name: "AXA" },
  { name: "Sura" },
  { name: "MAPFRE" },
  { name: "Plan Seguro" },
];

export default function AliadosSection() {
  return (
    <section className="aliados-section" id="aliados">
      <div className="container aliados-inner">
        <h2 className="reveal">Soluciones respaldadas por alianzas estratégicas.</h2>
        <ul className="aliados-lista reveal" aria-label="Aseguradoras aliadas">
          {aliados.map((a) => (
            <li key={a.name}>
              <span className="aliado-nombre">{a.name}</span>
              {a.note ? <small className="aliado-nota">{a.note}</small> : null}
            </li>
          ))}
        </ul>
        <p className="aliados-nota reveal">
          Las alternativas se determinan de acuerdo a las necesidades identificadas durante el
          proceso de asesoría.
        </p>
      </div>
    </section>
  );
}
