import type { Metadata } from "next";
import Image from "next/image";
import {
  IconMagnifierCheck,
  IconBars,
  IconCompass,
  IconGear,
  IconArrowCircle,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Nosotros — Solec Finanzas",
  description:
    "Metodología, filosofía de trabajo, red de aliados y semblanza de Solec Finanzas.",
};

const metodologia = [
  {
    icon: <IconMagnifierCheck />,
    title: "Diagnóstico",
    body: "Conocer la situación actual, las necesidades de protección, los objetivos y las prioridades de la empresa.",
  },
  {
    icon: <IconBars />,
    title: "Análisis",
    body: "Evaluar riesgos, beneficios vigentes, áreas de oportunidad y criterios financieros relevantes.",
  },
  {
    icon: <IconCompass />,
    title: "Diseño de la estrategia",
    body: "Desarrollar alternativas personalizadas que equilibren protección, eficiencia financiera y valor para los colaboradores.",
  },
  {
    icon: <IconGear />,
    title: "Implementación",
    body: "Coordinar la puesta en marcha de la solución seleccionada y facilitar su comunicación dentro de la organización.",
  },
  {
    icon: <IconArrowCircle />,
    title: "Acompañamiento",
    body: "Dar seguimiento continuo, apoyar en la administración del programa y brindar atención oportuna cuando se requiera.",
  },
];

const principios = [
  "Comprender antes de proponer",
  "Diseñar soluciones a la medida",
  "Acompañamiento integral",
  "Actuar con ética y transparencia",
];

const expectativas = [
  {
    titulo: "Atención personalizada",
    body: "Cada organización recibe un acompañamiento cercano y soluciones diseñadas conforme a sus necesidades.",
  },
  {
    titulo: "Enfoque estratégico",
    body: "Las recomendaciones buscan equilibrar protección, bienestar y eficiencia financiera.",
  },
  {
    titulo: "Objetividad",
    body: "Las propuestas se desarrollan considerando las necesidades específicas de la organización.",
  },
  {
    titulo: "Acompañamiento continuo",
    body: "El servicio continúa durante la implementación y administración del programa.",
  },
  {
    titulo: "Relaciones de largo plazo",
    body: "El compromiso es construir vínculos basados en confianza, servicio y resultados.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <header className="hero-sub-page">
        <div className="container">
          <span className="eyebrow">Nosotros</span>
          <h1>Un enfoque consultivo, objetivo y de largo plazo.</h1>
          <p className="sub">
            Conozca nuestra metodología, filosofía de trabajo y la trayectoria detrás de Solec
            Finanzas.
          </p>
        </div>
      </header>

      <section id="metodologia">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Nuestra metodología</span>
            <h2>Un proceso consultivo, estructurado y cercano.</h2>
          </div>
          <div className="metodologia-grid">
            {metodologia.map((fase, i) => (
              <div
                className="metodologia-fase reveal stagger"
                style={{ ["--i" as string]: i }}
                key={fase.title}
              >
                <span className="fase-num">0{i + 1}</span>
                <div className="servicio-icon">{fase.icon}</div>
                <h4>{fase.title}</h4>
                <p>{fase.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Filosofía de trabajo</span>
            <h2>Cómo trabajamos.</h2>
          </div>
          <div className="principios-grid">
            {principios.map((principio, i) => (
              <div className="principio-item reveal stagger" style={{ ["--i" as string]: i }} key={principio}>
                <span className="principio-num">0{i + 1}</span>
                <h4>{principio}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Nuestro acompañamiento</span>
            <h2>¿Qué puede esperar de nuestro acompañamiento?</h2>
          </div>
          <div className="expectativas-grid">
            {expectativas.map((item) => (
              <div className="expectativa-item reveal" key={item.titulo}>
                <h4>{item.titulo}</h4>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Red de aliados</span>
            <h2>Aseguradoras líderes del sector.</h2>
            <p>New York Life Seguros Monterrey, AXA, Plan Seguro, Sura y Mapfre.</p>
          </div>
        </div>
      </section>

      <section>
        <div className="container semblanza-inner">
          <div className="semblanza-foto reveal">
            <Image
              src="/images/lizeth-solorzano.jpg"
              alt="Lizeth Solórzano Lecona, fundadora de Solec Finanzas"
              fill
              sizes="(max-width: 800px) 90vw, 40vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          <div className="semblanza-copy reveal">
            <span className="eyebrow">Semblanza</span>
            <h2>Lizeth Solórzano Lecona</h2>
            <p>
              Lizeth Solórzano Lecona es la fundadora de Solec Finanzas. Con más de veinte años de
              trayectoria en administración y finanzas, y más de diez años de experiencia en el
              sector asegurador, ha acompañado a organizaciones en el desarrollo de esquemas de
              protección que fortalecen la estabilidad financiera y el bienestar de sus
              colaboradores.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
