import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDarkPage = location.pathname === "/";
  const textColor = isDarkPage ? "text-white" : "text-neutral-900";
  const hoverTextColor = isDarkPage ? "hover:text-white" : "hover:text-neutral-900";
  const quietTextColor = isDarkPage ? "text-white/60" : "text-neutral-500";
  const navBg = isDarkPage ? "bg-white/5 border-white/10" : "bg-white border-neutral-200 shadow-sm";
  const headerBg = isDarkPage 
    ? "bg-gradient-to-b from-black/80 to-transparent" 
    : isScrolled ? "bg-white/90 backdrop-blur-md border-b border-neutral-200" : "bg-transparent";

  const links = [
    { name: "Home", path: "/" },
    { name: "Tours", path: "/tours" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center transition-colors duration-300 pointer-events-none ${headerBg}`}>
      <div className="flex items-center gap-2 pointer-events-auto">
        <Link to="/" className={`text-xl font-display font-bold tracking-tight flex items-center gap-2 ${textColor}`}>
          <div className={`w-8 h-8 rounded flex items-center justify-center ${isDarkPage ? 'bg-white text-black' : 'bg-neutral-900 text-white'}`}>
            <span className="font-bold text-sm tracking-tighter">UCT</span>
          </div>
          Tours.
        </Link>
      </div>

      <nav className={`flex items-center gap-6 pointer-events-auto backdrop-blur-md px-6 py-2 rounded-full border ${navBg} shadow-xl`}>
        {links.map((link) => {
          const isActive = location.pathname === link.path;
          return (
             <Link
              key={link.path}
              to={link.path}
              className={`relative text-sm font-medium transition-colors ${
                isActive ? textColor : `${quietTextColor} ${hoverTextColor}`
              }`}
            >
              {link.name}
              {isActive && (
                <motion.div
                  layoutId="navbar-indicator"
                  className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${isDarkPage ? 'bg-white' : 'bg-neutral-900'}`}
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
      </nav>
      
      <div className="w-24 hidden md:block" /> {/* Spacer for centering */}
    </header>
  );
}
