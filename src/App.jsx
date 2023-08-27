import { Hero, Projects, Skills, About, Footer } from "./sections";
import Nav from "./components/Nav";

const App = () => (
  <main className="relative pt-[85px]">
    <Nav />

    <section
      id="home"
      className="bg-gradient-to-br from-primary-yellow via-primary-gray to-primary-pink relative !p-0"
    >
      <Hero />
    </section>

    <section id="projects" className="bg-primary-gray grainy">
      <Projects />
    </section>

    <section id="skills" className="bg-primary-gray grainy py-0">
      <Skills />
    </section>

    <section id="about" className="bg-primary-gray grainy">
      <About />
    </section>

    <section className="bg-primary-black text-primary-gray grainy">
      <Footer />
    </section>
  </main>
);

export default App;
