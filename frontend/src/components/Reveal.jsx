import useReveal from "../hooks/useReveal";

/**
 * <Reveal /> - wraps content with a scroll-triggered animation.
 * variant: 'up' | 'left' | 'right' | 'zoom'
 * delay: 0 | 100 | 200 | 300 | 400 | 500
 */
export default function Reveal({ children, variant = "up", delay = 0, as: Tag = "div", className = "", ...rest }) {
  const [ref, visible] = useReveal();
  const variantClass =
    variant === "left" ? "reveal-left" : variant === "right" ? "reveal-right" : variant === "zoom" ? "reveal-zoom" : "reveal";
  const delayClass = delay ? `delay-${delay}` : "";
  return (
    <Tag ref={ref} className={`${variantClass} ${delayClass} ${visible ? "visible" : ""} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
