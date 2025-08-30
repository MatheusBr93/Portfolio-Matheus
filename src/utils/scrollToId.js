import { animate } from "framer-motion";

export function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) {
    const yOffset = -70; // offset para não grudar no header
    const targetY = el.getBoundingClientRect().top + window.scrollY + yOffset;

    animate(window.scrollY, targetY, {
      duration: 0.8, // duração da animação
      ease: [0.25, 0.1, 0.25, 1], // easing suave
      onUpdate: (latest) => window.scrollTo(0, latest),
    });
  }
}
