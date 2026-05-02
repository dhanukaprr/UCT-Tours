import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";

export function Navbar() {
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Tours", path: "/tours" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
      <div className="flex items-center gap-2 pointer-events-auto">
        <Link to="/" className="text-xl font-display font-bold tracking-tight text-white flex items-center gap-2">
          <div className="w-8 h-8 bg-[#48E5C2] rounded-lg flex items-center justify-center">
            <span className="text-black font-black text-sm">UCT</span>
          </div>
          Tours.
        </Link>
      </div>

      <nav className="flex items-center gap-6 pointer-events-auto bg-white/5 backdrop-blur-md px-6 py-2 rounded-full border border-white/10 shadow-xl">
        {links.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`relative text-sm font-medium transition-colors ${
                isActive ? "text-white" : "text-white/60 hover:text-white"
              }`}
            >
              {link.name}
              {isActive && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#48E5C2] rounded-full"
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
