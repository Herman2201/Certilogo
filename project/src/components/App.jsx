import '../style/App.css';
import React, { useState } from 'react';
import PrePage from './PrePage/PrePage';
import About from './About.jsx';
import Animations from './Animation.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  const [goAnimetion, setAnimetion] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/verification" element={<Animations />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// <div className="h-screen min-h-full relative w-full overflow-hidden">
//   <PrePage animetion={goAnimetion} setAnimetion={setAnimetion}/>
//    <div className={`opacity-0 ${goAnimetion ? 'animate-active' : ''} aling-center text-9xl text-center`}>Niger</div>
// </div>
