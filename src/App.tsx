import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';

import "./styles/global.css"

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="text-slate-50 w-[90%] m-auto ">
      <BrowserRouter>
        <Navbar/>

        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}