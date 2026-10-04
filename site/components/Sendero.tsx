"use client";

import { useEffect, useRef } from "react";

export default function Sendero() {
  const pathRef = useRef<SVGPathElement>(null);
  const dotRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    const dot = dotRef.current;
    if (!path || !dot) return;

    const len = path.getTotalLength();
    path.style.strokeDasharray = String(len);
    path.style.strokeDashoffset = String(len);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let ticking = false;

    function update() {
      if (!path || !dot) return;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(Math.max(scrollTop / docHeight, 0), 1) : 0;

      if (!reduceMotion) {
        path.style.strokeDashoffset = String(len - len * progress);
      } else {
        path.style.strokeDashoffset = "0";
      }
      const point = path.getPointAtLength(len * progress);
      dot.setAttribute("cx", String(point.x));
      dot.setAttribute("cy", String(point.y));
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }

    window.addEventListener("scroll", onScroll);
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div id="sendero-wrap">
      <svg id="sendero-svg" viewBox="0 0 100 3400" preserveAspectRatio="none">
        <path
          ref={pathRef}
          className="sendero-path"
          d="M50,0 C85,180 15,340 50,520 C90,700 10,860 50,1040
             C88,1220 12,1380 50,1560 C90,1740 10,1900 50,2080
             C86,2260 14,2420 50,2600 C88,2780 12,2940 50,3120
             C82,3260 18,3320 50,3400"
        />
        <circle ref={dotRef} className="sendero-dot" r="4.2" cx="50" cy="0" />
      </svg>
    </div>
  );
}
