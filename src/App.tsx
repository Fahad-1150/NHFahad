import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Philosophy from "./components/Philosophy";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Philosophy />
      </main>
      <footer className="py-12 text-center border-t border-white/10 text-gray-500 text-sm tracking-widest">
        &copy; {new Date().getFullYear()} FAHAD. ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
}
