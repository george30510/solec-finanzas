import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <div className="nav-inner">
        <Link href="/" className="logo">
          LIZETH SOLÓRZANO LECONA
          <span className="sub">Consultora en Previsión Financiera y Beneficios Corporativos</span>
        </Link>
        <ul className="nav-links">
          <li>
            <Link href="/#personas-y-familias">Personas y Familias</Link>
          </li>
          <li>
            <Link href="/#patrimonio">Patrimonio</Link>
          </li>
          <li>
            <Link href="/#empresas">Empresas</Link>
          </li>
          <li>
            <Link href="/#arquitectura">Arquitectura Financiera</Link>
          </li>
          <li>
            <Link href="/nosotros">Sobre Lizeth</Link>
          </li>
        </ul>
        <Link href="/contacto" className="nav-cta">
          Conversemos →
        </Link>
      </div>
    </nav>
  );
}
