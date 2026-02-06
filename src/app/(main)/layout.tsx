import NavbarComponent from "@/components/nav/nav";
import Footer from "@/components/footer/footer";
import "../globals.css";
import SmoothScroll from "@/components/ReacbitsComponents/SmoothScroll/SmoothScroll";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SmoothScroll>
      <NavbarComponent />
      {children}
      <Footer />
    </SmoothScroll>
  );
}
