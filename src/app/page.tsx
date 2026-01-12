import Hero from "../components/Hero";
import About from "../components/About";
import Navigation from "../components/Navigation";
export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />

    </div>
  );
}
