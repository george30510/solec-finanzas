export default function AliadosSection() {
  return (
    <section className="aliados-section" id="aliados">
      <div className="container">
        <div className="aliados-head reveal">
          <span className="eyebrow">Red de aliados estratégicos</span>
          <p>
            Mantenemos alianzas estratégicas con aseguradoras líderes del sector — New York Life
            Seguros Monterrey, AXA, Plan Seguro, Sura y Mapfre — que nos permiten analizar
            distintas alternativas y presentar propuestas objetivas, alineadas a las necesidades
            de cada organización.
          </p>
        </div>
        <span className="stats-intro reveal">
          Las organizaciones con equipos más comprometidos registran, en promedio:
        </span>
        <div className="confianza-inner">
          <div className="confianza-item reveal stagger" style={{ ["--i" as string]: 0 }}>
            <div className="num">+23%</div>
            <div className="label">Más rentabilidad</div>
          </div>
          <div className="confianza-item reveal stagger" style={{ ["--i" as string]: 1 }}>
            <div className="num">+18%</div>
            <div className="label">Mayor productividad</div>
          </div>
          <div className="confianza-item reveal stagger" style={{ ["--i" as string]: 2 }}>
            <div className="num">-78%</div>
            <div className="label">Menos ausentismo</div>
          </div>
        </div>
        <span className="stats-source reveal">
          Fuente: Gallup Workplace, Q12 Meta-Analysis (11th Edition, 2024).
        </span>
      </div>
    </section>
  );
}
