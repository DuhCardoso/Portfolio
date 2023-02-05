
import Navbar from './components/layout/Navbar';
import Aboult from './components/pages/Aboult';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Skills from './components/pages/Skills';

import "./styles/global.css"

export default function App() {
  return (
    <div className="
      text-slate-50 w-[90%] m-auto
      lg:w-[1024px]
    ">
        <header>
          <Navbar/>
        </header>

        <main>
          <Home/>
          <Aboult/>
          <Skills/>
          <Projects/>
        </main>

        <textarea className="text-black w-[80%] h-30" />
    </div>
  )
}