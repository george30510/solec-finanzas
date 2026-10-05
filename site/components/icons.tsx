const common = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
} as const;

export function IconCompass() {
  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 8.2l2 5.6-5.6-2z" />
    </svg>
  );
}

export function IconWave() {
  return (
    <svg {...common}>
      <path d="M4 18c3-6 6-4 8-9" />
      <path d="M12 9c1.8 0 3-1.4 3-3.2S13.8 3 12 3s-3 1.2-3 3 1.2 3 3 3z" />
    </svg>
  );
}

export function IconHeart() {
  return (
    <svg {...common}>
      <path d="M12 21s-7-4.4-7-10.4C5 6.6 8 4 12 4s7 2.6 7 6.6C19 16.6 12 21 12 21z" />
    </svg>
  );
}

export function IconBook() {
  return (
    <svg {...common}>
      <path d="M4 6.5C6 5 9 5 12 6.5c3-1.5 6-1.5 8 0v11c-2-1.5-5-1.5-8 0-3-1.5-6-1.5-8 0z" />
    </svg>
  );
}

export function IconCross() {
  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  );
}

export function IconShieldCross() {
  return (
    <svg {...common}>
      <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6z" />
      <path d="M12 9v6M9 12h6" />
    </svg>
  );
}

export function IconGroup() {
  return (
    <svg {...common}>
      <circle cx="8" cy="9" r="3" />
      <circle cx="16" cy="9" r="3" />
      <path d="M3 20c0-3 2.5-5 5-5s5 2 5 5" />
      <path d="M11 20c0-3 2.5-5 5-5s5 2 5 5" />
    </svg>
  );
}

export function IconMagnifierCheck() {
  return (
    <svg {...common}>
      <circle cx="10" cy="10" r="6" />
      <path d="M14.5 14.5L20 20" />
      <path d="M7 11l2-3 2 2 3-4" />
    </svg>
  );
}

export function IconBriefcase() {
  return (
    <svg {...common}>
      <rect x="3" y="8" width="18" height="11" rx="1.4" />
      <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 13h18" />
    </svg>
  );
}

export function IconArrowCircle() {
  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M9 15l6-6M9 9h6v6" />
    </svg>
  );
}

export function IconBars() {
  return (
    <svg {...common}>
      <path d="M5 19V13M11 19V7M17 19V11" />
      <path d="M3 19h18" />
    </svg>
  );
}

export function IconGear() {
  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 4v2M12 18v2M4 12h2M18 12h2M6.3 6.3l1.4 1.4M16.3 16.3l1.4 1.4M6.3 17.7l1.4-1.4M16.3 7.7l1.4-1.4" />
    </svg>
  );
}

export function IconLeaf() {
  return (
    <svg {...common}>
      <path d="M5 19c7 0 13-6 13-14-7 0-13 6-13 14z" />
      <path d="M6 18c3-4 6-7 11-10" />
    </svg>
  );
}

export function IconWhatsapp() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M20 12a8 8 0 1 1-3.6-6.7" />
      <path d="M20 4l-8.4 8.4" />
    </svg>
  );
}

export function IconCoins() {
  return (
    <svg {...common}>
      <rect x="3" y="6.5" width="18" height="11" rx="1.6" />
      <circle cx="12" cy="12" r="2.6" />
      <path d="M6.5 10v4M17.5 10v4" />
    </svg>
  );
}

export function IconShieldCheck() {
  return (
    <svg {...common}>
      <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6z" />
      <path d="M9 12l2.2 2.2L15.5 10" />
    </svg>
  );
}

export function IconHome() {
  return (
    <svg {...common}>
      <path d="M4 11l8-6.5 8 6.5" />
      <path d="M6 10v9h12v-9" />
      <path d="M10 19v-5h4v5" />
    </svg>
  );
}

export function IconSunset() {
  return (
    <svg {...common}>
      <path d="M7.5 17a4.5 4.5 0 0 1 9 0" />
      <path d="M12 6v2.5M5.6 9.6l1.7 1.7M18.4 9.6l-1.7 1.7M3 17h18M7 20.5h10" />
    </svg>
  );
}

export function IconTree() {
  return (
    <svg {...common}>
      <circle cx="12" cy="9.5" r="6.2" />
      <path d="M12 21v-6.5M12 14.5l-2.8-2.8M12 14.5l2.8-2.8M12 12V7.5" />
    </svg>
  );
}

export function IconTarget() {
  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="0.9" />
    </svg>
  );
}

export function IconBlocks() {
  return (
    <svg {...common}>
      <rect x="4" y="13.5" width="7" height="6.5" rx="1" />
      <rect x="13" y="13.5" width="7" height="6.5" rx="1" />
      <rect x="8.5" y="4" width="7" height="6.5" rx="1" />
    </svg>
  );
}

export function IconTrend() {
  return (
    <svg {...common}>
      <path d="M4 17l5-5 4 4 7-8" />
      <path d="M15 8h5v5" />
    </svg>
  );
}
