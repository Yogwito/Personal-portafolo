import { useEffect, useRef, useState } from 'react';

/**
 * Reveal-on-scroll via IntersectionObserver. Returns a ref to attach and a
 * boolean that flips true once the element enters the viewport. Callers should
 * gate the actual animation behind prefers-reduced-motion themselves.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: IntersectionObserverInit = { threshold: 0.18, rootMargin: '0px 0px -10% 0px' },
) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || visible) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      });
    }, options);

    observer.observe(node);
    return () => observer.disconnect();
  }, [options, visible]);

  return { ref, visible };
}
