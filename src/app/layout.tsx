import "./globals.css";
import SmoothScroll from "@/components/ReacbitsComponents/SmoothScroll/SmoothScroll";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SmoothScroll>
      <html lang="id">
        <body className={montserrat.className}>{children}</body>
      </html>
    </SmoothScroll>
  );
}
