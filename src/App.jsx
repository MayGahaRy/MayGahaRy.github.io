import { useState } from 'react'
import './App.css'
import {Route, Routes} from "react-router-dom";

import {Home} from "./Pages/Home";
import {Shop} from "./Pages/Shop";
import {ContactUs} from "./Pages/ContactUs.jsx";
import GamePage from "./Pages/GamePage.jsx";

function App() {

  return (
      <div className="min-h-screen w-full bg-gradient-to-t from-blue-600 to-blue-500 font-Signika">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Contact-Us" element={<ContactUs />} />
          <Route path="/game/:title" element={<GamePage />} />
      </Routes>
      </div>
  )
}

export default App
