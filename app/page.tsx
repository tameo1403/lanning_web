import { Hero } from "./_components/Hero";
import { About } from "./_components/About";
import { Features } from "./_components/Features";
import { Products } from "./_components/Products";
import { Partners } from "./_components/Partners";
import { Team } from "./_components/Team";
import { CTA } from "./_components/CTA";
import { Footer } from "./_components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Features />
      <Products />
      <Partners />
      <Team />
      <CTA />
      <Footer />
    </div>
  );
}
