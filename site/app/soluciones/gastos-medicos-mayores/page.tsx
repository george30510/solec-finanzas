import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Seguro de Gastos Médicos Mayores Colectivo — Solec Finanzas",
  description:
    "Protección real para su equipo, diseñada según el tamaño, presupuesto y cultura de su organización.",
};

export default function GastosMedicosMayoresPage() {
  return (
    <>
      <header className="hero-sub-page">
        <div className="container">
          <div className="breadcrumb reveal">
            <Link href="/">Inicio</Link>
            <span className="sep">/</span>
            <Link href="/soluciones">Soluciones</Link>
            <span className="sep">/</span>
            <span>Gastos Médicos Mayores</span>
          </div>
          <span className="eyebrow">Protección · Esquemas colectivos</span>
          <h1>Seguro de Gastos Médicos Mayores Colectivo</h1>
          <p className="sub">
            Protección real para su equipo, diseñada según el tamaño, presupuesto y cultura de su
            organización.
          </p>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="gmm-block reveal">
            <h3>Qué es</h3>
            <p>
              Un esquema de cobertura médica colectiva que protege a los colaboradores ante gastos
              médicos mayores imprevistos, fortaleciendo su bienestar y la estabilidad financiera
              de la empresa ante contingencias de salud.
            </p>
          </div>

          <div className="gmm-block reveal">
            <h3>A quién protege</h3>
            <p>
              A los colaboradores de la organización y, según el diseño elegido, a sus
              dependientes económicos directos.
            </p>
          </div>

          <div className="gmm-block reveal">
            <h3>Qué incluye</h3>
            <p>
              Hospitalización, cirugías, honorarios médicos, medicamentos, estudios — sumas
              aseguradas y deducibles conforme al diagnóstico de cada empresa.
            </p>
            <span style={{ fontSize: "0.82rem", color: "var(--tinta-suave)" }}>
              (A evaluar según diagnóstico.)
            </span>
          </div>

          <div className="gmm-block reveal">
            <h3>Cómo se implementa</h3>
            <p>Nuestra metodología de 5 fases, aplicada a este ramo:</p>
            <div className="gmm-fases">
              <span>01 Diagnóstico</span>
              <span>02 Análisis de riesgos y presupuesto</span>
              <span>03 Diseño de la estrategia con la red de aliados</span>
              <span>04 Implementación y comunicación interna</span>
              <span>05 Acompañamiento continuo</span>
            </div>
            <p style={{ marginTop: "18px" }}>
              La red de aliados incluye New York Life, AXA, Sura, Mapfre y Plan Seguro.
            </p>
          </div>

          <div className="metodologia-cierre reveal">
            <p>Solicite un diagnóstico sin costo para su organización</p>
            <Link href="/contacto" className="ver-todas">
              Contáctenos →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
