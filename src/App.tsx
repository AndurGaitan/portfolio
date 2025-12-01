import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Landing } from './pages/Landing';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Research } from './pages/Research';
import { Contact } from './pages/Contact';
import { CV } from './pages/CV';
export function App() {
  return <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen w-full">
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/research" element={<Research />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cv" element={<CV />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>;
}