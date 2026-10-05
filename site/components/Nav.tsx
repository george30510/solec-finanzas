"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/#personas-y-familias", label: "Personas y Familias" },
  { href: "/#patrimonio", label: "Patrimonio" },
  { href: "/#empresas", label: "Empresas" },
  { href: "/#arquitectura", label: "Arquitectura Financiera" },
  { href: "/nosotros", label: "Sobre Lizeth" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <nav aria-label="Principal">
      <div className="nav-inner">
        <Link href="/" className="logo" onClick={close}>
          LIZETH SOLÓRZANO LECONA
          <span className="sub">Consultora en Previsión Financiera y Beneficios Corporativos</span>
        </Link>
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href}>{l.label}</Link>
            </li>
          ))}
        </ul>
        <Link href="/contacto" className="nav-cta">
          Conversemos →
        </Link>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="nav-menu"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav-toggle-bars" aria-hidden="true" />
        </button>
      </div>
      <div id="nav-menu" className={`nav-menu${open ? " is-open" : ""}`}>
        <ul>
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} onClick={close}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/contacto" className="nav-menu-cta" onClick={close}>
          Conversemos →
        </Link>
      </div>
    </nav>
  );
}
