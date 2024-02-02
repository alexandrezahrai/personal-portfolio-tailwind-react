import { Hero, Projects, Skills, About, Footer } from "./sections";
import Nav from "./components/Nav";

const App = () => (
  <main className="relative text-primary-gray bg-gradient-to-b from-[#020212] to-[#0D0B1F]">
    <Nav />

    <section
      id="home"
      className="bg-none relative !pt-[85px]" 
    >
      <Hero />
    </section>

    <section id="projects" className="bg-none mb-0 xl:mb-8">
      <Projects />
    </section>

    <section id="skills" className="bg-none py-16 mb-0 xl:mb-8">
      <Skills />
    </section>

    <section id="about" className="bg-none">
      <About />
    </section>

    <section className="bg-none pb-16">
      <Footer />
    </section>
  </main>
);

export default App;
