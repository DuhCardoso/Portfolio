
import { useEffect } from 'react';
import onScrollFunctions from './components/functions/onScrollFunctions';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Aboult from './components/pages/AboultSection/Aboult';
import Projects from './components/pages/ProjectsSection/Projects';
import Skills from './components/pages/SkillsSection/Skills';
import Contact from './components/pages/ContactSection/Contact';

import "./styles/global.css"
import Footer from './components/layout/Footer';

export default function App() {
  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", onScrollFunctions)
    }

    watchScroll()
    return () => {
      window.removeEventListener("scroll", onScrollFunctions);
    }
  })

  return (
    <div className="
      text-slate-50 scroll-px-3
    ">
      <header>
        <Navbar />
        <Home />
      </header>

      <main>
        <Aboult />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

{/* <textarea className="text-black w-[80%] h-30" /> */}
