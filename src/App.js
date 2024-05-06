import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home'
import Taramtow from './Taramtow'
import Taram3a from './Taram3a'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/Taramtow" element={<Taramtow />} />
        <Route path="/Taram3a" element={<Taram3a />} />
      </Routes>  
    </BrowserRouter>
    
  );
}

export default App;
