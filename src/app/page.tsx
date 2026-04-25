import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Servicios from "@/components/Servicios";
import SobreElDr from "@/components/SobreElDr";
import Agendamiento from "@/components/Agendamiento";
import Ubicacion from "@/components/Ubicacion";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Servicios />
        <SobreElDr />
        <Agendamiento />
        <Ubicacion />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
