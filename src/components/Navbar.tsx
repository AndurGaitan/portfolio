import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MoonIcon, SunIcon, MenuIcon, XIcon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
export function Navbar() {
  const {
    theme,
    toggleTheme
  } = useTheme();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [{
    path: '/',
    label: 'Home'
  }, {
    path: '/about',
    label: 'About'
  }, {
    path: '/projects',
    label: 'Projects'
  }, {
    path: '/research',
    label: 'Research'
  }, {
    path: '/contact',
    label: 'Contact'
  }, {
    path: '/cv',
    label: 'CV'
  }];
  return <motion.nav initial={{
    y: -100
  }} animate={{
    y: 0
  }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
    ${
      isMobileMenuOpen
        ? 'bg-[rgb(var(--background))]/80 backdrop-blur-lg border-b border-[rgb(var(--border))]'
        : isScrolled
        ? 'bg-[rgb(var(--background))]/80 backdrop-blur-lg border-b border-[rgb(var(--border))]'
        : 'bg-transparent'
    }`}>
      
      
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold">
            Gaitán Andrés David.
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <Link key={link.path} to={link.path} className={`text-sm font-medium transition-colors relative ${location.pathname === link.path ? 'text-[rgb(var(--primary))]' : 'text-[rgb(var(--secondary))] hover:text-[rgb(var(--foreground))]'}`}>
                {link.label}
                {location.pathname === link.path && <motion.div layoutId="navbar-indicator" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[rgb(var(--primary))]" />}
              </Link>)}
          </div>
          <div className="flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-[rgb(var(--muted))] transition-colors" aria-label="Toggle theme">
              {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
            </button>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 rounded-lg hover:bg-[rgb(var(--muted))] transition-colors" aria-label="Toggle menu">
              {isMobileMenuOpen ? <XIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>
        {/* Mobile Navigation */}
       <AnimatePresence>
          {isMobileMenuOpen && <motion.div initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: 'auto'
        }} exit={{
          opacity: 0,
          height: 0
        }} className="md:hidden mt-4 pt-4 border-t border-[rgb(var(--border))]">
              {navLinks.map(link => <Link key={link.path} to={link.path} onClick={() => setIsMobileMenuOpen(false)} className={`block py-2 text-sm font-medium transition-colors ${location.pathname === link.path ? 'text-[rgb(var(--primary))]' : 'text-[rgb(var(--secondary))] hover:text-[rgb(var(--foreground))]'}`}>
                  {link.label}
                </Link>)}
            </motion.div>}
        </AnimatePresence>

      </div>
    </motion.nav>;
}