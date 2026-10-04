import Link from "next/link";
import type { ReactNode } from "react";

type ServicioItemProps = {
  icon: ReactNode;
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
  index?: number;
};

export default function ServicioItem({
  icon,
  title,
  description,
  href,
  linkLabel,
  index = 0,
}: ServicioItemProps) {
  const content = (
    <>
      <div className="servicio-icon">{icon}</div>
      <div className="servicio-text">
        <h4>{title}</h4>
        <p>{description}</p>
        {href && <span className="link-mas">{linkLabel ?? "Conocer más →"}</span>}
      </div>
    </>
  );

  const className = `servicio-item reveal stagger${href ? " has-link" : ""}`;
  const style = { ["--i" as string]: index };

  if (href) {
    return (
      <Link href={href} className={className} style={style}>
        {content}
      </Link>
    );
  }

  return (
    <div className={className} style={style}>
      {content}
    </div>
  );
}
