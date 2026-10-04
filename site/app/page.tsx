import Link from "next/link";
import Image from "next/image";
import AliadosSection from "@/components/AliadosSection";
import { IconGroup, IconLeaf, IconBriefcase } from "@/components/icons";

const tresCaminos = [
  {
    id: "personas-y-familias",
    icon: <IconGroup />,
    title: "Personas y Familias",
    bullets: "Protección · Retiro · Educación · Patrimonio",
  },
  {
    id: "patrimonio",
    icon: <IconLeaf />,
    title: "Patrimonio",
    bullets: "Protección patrimonial · Liquidez · Legado · Continuidad",
  },
  {
    id: "empresas",
    icon: <IconBriefcase />,
    title: "Empresas",
    bullets: "Beneficios corporativos · Personas clave · Bienestar financiero",
  },
];

const afSteps = [
  { num: "01", title: "Diagnóstico", desc: "Ingresos · gastos · deudas · activos · pasivos · protección actual" },
  { num: "02", title: "Metas", desc: "Corto · mediano · largo plazo" },
  { num: "03", title: "Protección", desc: "Familia · ingresos · salud · patrimonio · empresa" },
  { num: "04", title: "Construcción", desc: "Retiro · educación · patrimonio · liquidez" },
  { num: "05", title: "Proyección", desc: "Horizonte · inflación · aportaciones · necesidades futuras" },
];

export default function InicioPage() {
  return (
    <>
      {/* 1. HERO */}
      <header className="hero" id="inicio">
        <div className="container hero-inner">
          <div className="hero-copy">
            <h1>Toma el control de tu futuro.</h1>
            <p className="hero-tagline">Con una estrategia, todo se conecta.</p>
            <div className="hero-firma">
              <span className="hero-firma-nombre">Lizeth Solórzano Lecona</span>
              <span className="hero-firma-cargo">
                Consultora en Previsión Financiera y Beneficios Corporativos
              </span>
            </div>
            <p className="sub">
              Diseño estrategias de previsión financiera para personas, familias y empresas que
              buscan proteger su patrimonio, fortalecer su futuro y tomar decisiones financieras
              con mayor claridad.
            </p>
            <div className="hero-ctas">
              <Link href="/#arquitectura" className="btn-primary">
                Conoce mi método →
              </Link>
              <Link href="/contacto" className="btn-secondary">
                Conversemos →
              </Link>
            </div>
          </div>
          <div className="hero-foto-col">
            <p className="hero-foto-caption">Decisiones hoy para una vida con más libertad.</p>
            <div className="hero-foto">
              <Image
                src="/images/lizeth-solorzano-hero-tratada.jpg"
                alt="Lizeth Solórzano Lecona, consultora en previsión financiera y beneficios corporativos"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 440px"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* 2. TRES CAMINOS (mini, bajo el hero) */}
      <section className="tres-caminos-mini">
        <div className="container tres-caminos-mini-inner">
          {tresCaminos.map((camino) => (
            <div className="tcm-item reveal" id={camino.id} key={camino.id}>
              <div className="servicio-icon">{camino.icon}</div>
              <h4>{camino.title}</h4>
              <p>{camino.bullets}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. LA PREGUNTA */}
      <section>
        <div className="pregunta-inner">
          <div className="reveal">
            <h2>¿Tu dinero tiene una estrategia?</h2>
            <p>
              A medida que crecen tus ingresos, responsabilidades y patrimonio, también crece la
              importancia de tomar decisiones financieras de manera integral.
            </p>
            <p>
              Tener ahorro, inversiones, seguros o prestaciones por separado no necesariamente
              significa tener una estructura.
            </p>
            <p className="pregunta-pull">
              La verdadera pregunta es cómo están conectadas tus decisiones y qué tan preparada
              está tu estructura para lo que viene.
            </p>
          </div>
          <div className="pregunta-visual reveal">
            <Image
              src="/images/la-pregunta-oficina.jpg"
              alt="Oficina moderna, luz natural"
              fill
              sizes="(max-width: 900px) 100vw, 480px"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="pregunta-icons">
          {["Ingresos", "Protección", "Patrimonio", "Retiro", "Legado"].map((label) => (
            <div className="pregunta-icon-item reveal" key={label}>
              <div className="dot" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. ARQUITECTURA FINANCIERA */}
      <section className="section-alt" id="arquitectura">
        <div className="af-inner">
          <div className="af-copy">
            <span className="eyebrow">Arquitectura Financiera</span>
            <h2 style={{ marginTop: 12, marginBottom: 28 }}>
              Una visión integral para tomar mejores decisiones financieras.
            </h2>
            <p>
              Antes de hablar de soluciones, analizamos tu realidad. Porque una estrategia
              verdaderamente personalizada comienza por entender dónde estás, qué quieres lograr
              y qué podría poner en riesgo aquello que estás construyendo.
            </p>
            <div className="af-steps reveal">
              {afSteps.map((step) => (
                <div className="af-step" key={step.num}>
                  <span className="num">{step.num}</span>
                  <div>
                    <strong>{step.title}</strong>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/#arquitectura" className="ver-todas" style={{ marginTop: 40, display: "inline-block" }}>
              Conoce Arquitectura Financiera →
            </Link>
          </div>
          <div className="af-diagram-col reveal">
            <div className="af-diagram">
              <div className="af-hub">TU ESTRUCTURA FINANCIERA</div>
              <span className="af-spoke top">Diagnóstico</span>
              <span className="af-spoke right">Metas</span>
              <span className="af-spoke bottom-right">Protección</span>
              <span className="af-spoke bottom">Construcción</span>
              <span className="af-spoke left">Proyección</span>
            </div>
            <p className="af-diagram-note">
              Primero entendemos tu realidad. Después diseñamos la estrategia. Finalmente
              elegimos las herramientas.
            </p>
          </div>
        </div>
      </section>

      {/* 5. TRES CAMINOS (completo) */}
      <section>
        <div className="section-head reveal">
          <h2>Una estrategia diferente para cada realidad.</h2>
        </div>
        <div className="caminos-grid">
          <div className="camino-card reveal">
            <div className="img-placeholder">[Foto — familia]</div>
            <h3>Personas y Familias</h3>
            <p className="camino-pull">Protege tu presente. Construye tu futuro.</p>
            <ul>
              <li>Protección familiar</li>
              <li>Retiro</li>
              <li>Educación</li>
              <li>Patrimonio</li>
              <li>Legado</li>
            </ul>
            <Link href="/contacto" className="btn-outline">
              Conocer más
            </Link>
          </div>
          <div className="camino-card reveal">
            <div className="img-placeholder">[Foto — retrato]</div>
            <h3>Patrimonio</h3>
            <p className="camino-pull">Cuando has construido mucho, protegerlo requiere estrategia.</p>
            <ul>
              <li>Protección patrimonial</li>
              <li>Liquidez</li>
              <li>Retiro</li>
              <li>Continuidad</li>
              <li>Legado</li>
              <li>Personas clave</li>
            </ul>
            <Link href="/contacto" className="btn-outline">
              Conocer más
            </Link>
          </div>
          <div className="camino-card reveal">
            <div className="camino-photo">
              <Image
                src="/images/tres-caminos-empresas.jpg"
                alt="Equipo de profesionales en reunión"
                fill
                sizes="(max-width: 900px) 100vw, 400px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <h3>Empresas</h3>
            <p className="camino-pull">Los beneficios también forman parte de la estrategia.</p>
            <ul>
              <li>GMM colectivo</li>
              <li>Vida colectivo</li>
              <li>Personas clave</li>
              <li>Bienestar financiero</li>
            </ul>
            <Link href="/contacto" className="btn-outline">
              Conocer más
            </Link>
          </div>
        </div>
      </section>

      {/* 6. FILOSOFÍA */}
      <section className="section-alt">
        <div className="filosofia-inner reveal">
          <p>
            No se trata de vender <em>un</em> plan.
            <br />
            Se trata de <em>construir</em> tranquilidad, protección y futuro.
          </p>
          <div className="filosofia-preguntas">
            <span>¿Qué quieres proteger?</span>
            <span>¿Qué quieres construir?</span>
            <span>¿Qué quieres hacer posible?</span>
          </div>
        </div>
      </section>

      {/* 7. RECURSO GRATUITO */}
      <section>
        <div className="recurso-inner">
          <div className="recurso-copy reveal">
            <h2>Empieza por conocer tu estructura financiera.</h2>
            <p>Antes de tomar una decisión, vale la pena hacer mejores preguntas.</p>
          </div>
          <div className="recurso-card form-card reveal">
            <span className="eyebrow">Checklist</span>
            <h4>¿Qué tan sólida es tu estructura financiera?</h4>
            <ul className="recurso-checklist">
              <li>Protección</li>
              <li>Ahorro</li>
              <li>Retiro</li>
              <li>Deudas</li>
              <li>Patrimonio</li>
              <li>Metas</li>
            </ul>
            <div className="form-row">
              <label>Nombre completo</label>
              <input type="text" placeholder="" />
            </div>
            <div className="form-row">
              <label>Correo electrónico</label>
              <input type="email" placeholder="" />
            </div>
            <div className="form-row">
              <label>WhatsApp</label>
              <input type="tel" placeholder="" />
            </div>
            <button type="button" className="form-submit">
              Descargar checklist
            </button>
          </div>
        </div>
      </section>

      {/* 8. SOBRE LIZETH (teaser) */}
      <section className="section-alt">
        <div className="container teaser-nosotros-inner">
          <div className="teaser-nosotros-foto reveal">
            <Image
              src="/images/lizeth-solorzano.jpg"
              alt="Lizeth Solórzano Lecona"
              fill
              sizes="120px"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="teaser-nosotros-copy reveal">
            <span className="eyebrow">Sobre Lizeth</span>
            <p>Una conversación financiera empieza con confianza.</p>
            <Link href="/nosotros" className="ver-todas">
              Conoce más sobre mí →
            </Link>
          </div>
        </div>
      </section>

      {/* 9. ALIANZAS */}
      <AliadosSection />

      {/* 10. CIERRE */}
      <section className="cta-final">
        <div className="container cta-final-inner reveal">
          <h2>Tu futuro merece una estructura.</h2>
          <p style={{ color: "rgba(250,248,241,0.78)", maxWidth: "52ch", margin: "20px auto 0" }}>
            Si estás atravesando una nueva etapa personal, familiar o empresarial, podemos
            comenzar por entender dónde estás hoy y qué quieres construir hacia adelante.
          </p>
          <Link href="/contacto" className="btn-primary" style={{ marginTop: 32 }}>
            Conversemos →
          </Link>
        </div>
      </section>
    </>
  );
}
