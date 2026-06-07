import { useEffect, useRef, useState } from "react";

/**
 * CountUp — animates a numeric value when it scrolls into view.
 * Supports prefix/suffix (e.g. "24\u00d77", "60K", "1:8").
 * For non-numeric values, it just renders as-is.
 */
export default function CountUp({ value, duration = 1600, className = "" }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Extract first numeric chunk
    const match = String(value).match(/(-?\d+(?:\.\d+)?)/);
    if (!match) { setDisplay(value); return; }
    const target = parseFloat(match[1]);
    const prefix = String(value).slice(0, match.index);
    const suffix = String(value).slice(match.index + match[1].length);
    const decimals = (match[1].split('.')[1] || '').length;

    setDisplay(`${prefix}0${suffix}`);

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          obs.disconnect();
          const start = performance.now();
          const tick = (now) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            const v = target * eased;
            setDisplay(`${prefix}${v.toFixed(decimals)}${suffix}`);
            if (t < 1) requestAnimationFrame(tick);
            else setDisplay(`${prefix}${match[1]}${suffix}`);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
