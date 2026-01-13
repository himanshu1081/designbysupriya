import Hero from "../components/Hero";
import About from "../components/About";
import Navigation from "../components/Navigation";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import Contact from "../components/Contact";
import ContactInfo from "../components/ContactInfo";

export default function Home() {
  return (
    <div className="min-h-screen max-w-screen">
      <Navigation />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Contact />
    </div>
  );
}
