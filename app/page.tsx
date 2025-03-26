import AppSection from "./components/app";
import Hero from "./components/hero";
import Informacion from "./components/informacion";
import QuienesSomos from "./components/quienesSomos";

export default function Home() {
  return (
    <div>
      <Hero/>
      <AppSection/>
      <Informacion/>
      <QuienesSomos/>
    </div>
  );
}
