import { ReactLenis } from "lenis/react";
import { ReactNode } from "react"; // 1. Tambahkan import ini

// 2. Tambahkan tipe data : { children: ReactNode }
function SmoothScroll({ children }: { children: ReactNode }) {
  return <ReactLenis root>{children}</ReactLenis>;
}

export default SmoothScroll;
