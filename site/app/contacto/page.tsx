import type { Metadata } from "next";
import { IconWhatsapp } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contacto — Solec Finanzas",
  description: "Cuéntenos en qué etapa está su organización y diseñamos juntos la estrategia.",
};

export default function ContactoPage() {
  return (
    <section id="contacto" style={{ paddingTop: "150px" }}>
      <div className="container contacto-wrap">
        <div className="contacto-copy reveal">
          <span className="eyebrow">Hablemos</span>
          <h2>El primer paso es una conversación.</h2>
          <p>
            Cuéntenos en qué etapa está su organización y diseñamos juntos la estrategia — sin
            compromiso, con toda claridad.
          </p>
          <a href="#" className="whatsapp-btn">
            <IconWhatsapp />
            Escríbanos por WhatsApp
          </a>
          <div className="oficina">
            <strong>Nuestra oficina</strong>
            Paseo de la Reforma 342, Juárez, Cuauhtémoc, CDMX
          </div>
        </div>
        <div className="form-card reveal">
          <div className="form-row">
            <label>Nombre</label>
            <input type="text" placeholder="Tu nombre" />
          </div>
          <div className="form-row">
            <label>Correo</label>
            <input type="email" placeholder="tucorreo@ejemplo.com" />
          </div>
          <div className="form-row">
            <label>Mensaje</label>
            <textarea rows={3} placeholder="Cuéntenos en qué le podemos ayudar" />
          </div>
          <button className="form-submit">Enviar mensaje</button>
        </div>
      </div>
    </section>
  );
}
