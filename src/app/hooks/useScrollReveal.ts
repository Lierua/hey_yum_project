import { useEffect, useRef } from "react";

export default function useScrollReveal() {
  const reference = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = reference.current;
    if (!element) return;

    const observer = new IntersectionObserver( //IntersectionObserver holder øje når elementet er i viewport
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("visible");

          observer.disconnect(); // Disconnect efter trigger fordi man behøver ikke "observer" mere
        }
      },
      { threshold: 0.07 }, // hvor stor en del af elmentet skal være i viewport til animation trigger
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return reference;
}
