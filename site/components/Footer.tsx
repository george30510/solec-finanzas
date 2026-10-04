export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="logo-f">LIZETH SOLÓRZANO LECONA</div>
          <p>Consultora en Previsión Financiera y Beneficios Corporativos</p>
        </div>
        <div className="footer-social">
          <a href="#" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.2" cy="6.8" r="1" />
            </svg>
          </a>
          <a href="#" aria-label="TikTok">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5" />
              <path d="M14 3c0 2.8 2 5 5 5" />
            </svg>
          </a>
          <a href="#" aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M14 9h2V6h-2c-1.7 0-3 1.3-3 3v2H9v3h2v7h3v-7h2.2l.8-3H14V9z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Lizeth Solórzano Lecona · Solec Finanzas</span>
        <span>Diseñado por Cuadrado Circular</span>
      </div>
    </footer>
  );
}
