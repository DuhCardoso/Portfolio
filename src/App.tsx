
import Navbar from './components/layout/Navbar';
import Aboult from './components/pages/Aboult';
import Home from './components/pages/Home';
import Skills from './components/pages/Skills';

import "./styles/global.css"

export default function App() {
  return (
    <div className="text-slate-50 w-[90%] m-auto ">
        <header>
          <Navbar/>
        </header>

        <main>
          <Home/>
          <Aboult/>
          <Skills/>
        </main>

        <textarea className="text-black w-[80%] h-30" />
    </div>
  )
}