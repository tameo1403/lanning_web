import { About } from "./_components/About";
import { Features } from "./_components/Features";
import { Products } from "./_components/Products";
import { Partners } from "./_components/Partners";
import { Team } from "./_components/Team";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <About />
      <Features />
      <Products />
      <Partners />
      <Team />
    </div>
  );
}
