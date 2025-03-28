import AppSection from "./components/app";
import Hero from "./components/hero";
import Informacion from "./components/informacion";
import QuienesSomos from "./components/quienesSomos";
import Faq from "./components/faq"

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero/>
      <AppSection/>
      <Informacion/>
      <QuienesSomos/>
      <Faq/>
    </div>
  );
}
