import Navbar from "@/components/nav/nav";
import Footer from "@/components/footer/footer";
import "./globals.css";
import style from "./my-css.module.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
