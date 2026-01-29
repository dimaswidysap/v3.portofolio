"use client";
import { ReactLenis } from "lenis/react";

function SmoothScroll({ children }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1, // Angka makin kecil makin lambat/halus (default 0.1)
        duration: 1.5, // Durasi scroll
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;
