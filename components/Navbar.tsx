
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 md:px-12 pointer-events-none">
      <div className="max-w-7xl mx-auto flex justify-between items-center pointer-events-auto">
        <Link to="/" className="text-xl font-extrabold tracking-tighter hover:text-blue-500 transition-colors uppercase">
          UMRGANESh.
        </Link>
        <div className="hidden md:flex gap-8 items-center backdrop-blur-md bg-white/5 border border-white/10 px-6 py-2 rounded-full">
          <Link to="/" className={`text-sm font-medium ${isHome ? 'text-blue-400' : 'text-zinc-400'} hover:text-white transition-colors`}>Work</Link>
          <a href="#about" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">About</a>
          <a href="#services" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Services</a>
          <a href="#contact" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Available for Hire</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
