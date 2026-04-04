import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Philosophy from "./components/Philosophy";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="app-main">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Services />
        <Projects />
        <Philosophy />
      </main>
      <Footer />
    </div>
  );
}
