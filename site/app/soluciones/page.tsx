import type { Metadata } from "next";
import Link from "next/link";
import ServicioItem from "@/components/ServicioItem";
import {
  IconShieldCross,
  IconGroup,
  IconMagnifierCheck,
  IconBriefcase,
  IconGear,
  IconArrowCircle,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Soluciones — Solec Finanzas",
  description:
    "Estrategias de protección y bienestar hechas a la medida de su organización.",
};

export default function SolucionesPage() {
  return (
    <>
      <header className="hero-sub-page">
        <div className="container">
          <span className="eyebrow">Soluciones Corporativas</span>
          <h1>Estrategias de protección y bienestar hechas a la medida de su organización.</h1>
          <p className="sub">
            Diseñamos esquemas que generan valor real para su organización y sus colaboradores —
            con un enfoque consultivo, objetivo y de largo plazo.
          </p>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="servicios-group">
            <span className="ghost-num">01</span>
            <div className="servicios-group-head reveal">
              <span className="eyebrow">Protección</span>
              <h3>Esquemas colectivos</h3>
            </div>
            <div className="servicio-grid">
              <ServicioItem
                index={0}
                icon={<IconShieldCross />}
                title="Seguro de Gastos Médicos Mayores Colectivo"
                description="Diseño de esquemas de protección para fortalecer el bienestar de los colaboradores y respaldar la continuidad de la organización."
                href="/soluciones/gastos-medicos-mayores"
              />
              <ServicioItem
                index={1}
                icon={<IconGroup />}
                title="Seguro de Vida Colectivo"
                description="Programas orientados a brindar respaldo financiero a los colaboradores y sus familias."
              />
            </div>
          </div>

          <div className="servicios-group">
            <span className="ghost-num">02</span>
            <div className="servicios-group-head reveal">
              <span className="eyebrow">Consultoría</span>
              <h3>Diagnóstico y diseño de estrategia</h3>
            </div>
            <div className="servicio-grid">
              <ServicioItem
                index={2}
                icon={<IconMagnifierCheck />}
                title="Diagnóstico de Protección Corporativa"
                description="Evaluación integral de necesidades, riesgos y oportunidades para fortalecer la estrategia de beneficios."
              />
              <ServicioItem
                index={3}
                icon={<IconBriefcase />}
                title="Consultoría en Beneficios Corporativos"
                description="Diseño de estrategias personalizadas que equilibran protección, eficiencia financiera y valor organizacional."
              />
            </div>
          </div>

          <div className="servicios-group">
            <span className="ghost-num">03</span>
            <div className="servicios-group-head reveal">
              <span className="eyebrow">Acompañamiento</span>
              <h3>Puesta en marcha y seguimiento</h3>
            </div>
            <div className="servicio-grid">
              <ServicioItem
                index={4}
                icon={<IconGear />}
                title="Implementación"
                description="Coordinación de la puesta en marcha de la solución y facilitación de su comunicación interna."
              />
              <ServicioItem
                index={5}
                icon={<IconArrowCircle />}
                title="Seguimiento y Atención Continua"
                description="Acompañamiento cercano durante la administración del programa y atención oportuna a los colaboradores."
              />
            </div>
          </div>

          <div className="metodologia-cierre reveal">
            <p>Soluciones a la medida de su organización. Enfoque estratégico. Resultados reales.</p>
            <Link href="/contacto" className="ver-todas">
              Contáctenos →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
