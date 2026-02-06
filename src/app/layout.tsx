import "./globals.css";
import SmoothScroll from "@/components/ReacbitsComponents/SmoothScroll/SmoothScroll";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SmoothScroll>
      <html lang="id">
        <body>{children}</body>
      </html>
    </SmoothScroll>
  );
}
