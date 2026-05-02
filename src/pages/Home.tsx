import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Home() {
  const backgroundImageUrl = "https://images.unsplash.com/photo-1586521995568-39abaa0c2311?q=80&w=2070";

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden p-6 pt-24"
    >
      {/* Blurred Background (mimicking the image) */}
      <div 
        className="absolute inset-0 bg-cover bg-center brightness-[0.25] blur-2xl transform scale-110"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      />

      {/* Main Framed Container */}
      <motion.div 
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="relative w-full max-w-6xl aspect-[4/3] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl shadow-black border border-white/10"
      >
        {/* Inner Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10" />

        {/* Content Layout matching the inspiration image */}
        <div className="relative h-full w-full flex flex-col items-center justify-center text-white px-4">
          <p className="text-lg md:text-2xl font-medium tracking-wide mb-1 drop-shadow-lg">Welcome to</p>
          
          {/* Typography styling inspired by "THE world OF nrg" */}
          <div className="flex flex-col md:flex-row items-center font-display leading-none mb-10 text-center gap-x-3">
            <span className="text-2xl md:text-4xl font-bold tracking-tight pb-2 md:pb-4 drop-shadow-xl uppercase">the</span>
            <span className="text-6xl md:text-9xl font-semibold tracking-tight drop-shadow-xl uppercase">magic</span>
            <span className="text-2xl md:text-4xl font-light pb-2 md:pb-4 drop-shadow-xl">OF</span>
            <span className="text-6xl md:text-9xl font-semibold tracking-tight drop-shadow-xl uppercase">ceylon</span>
          </div>

          <Link to="/tours" className="group flex items-center gap-4 bg-white/70 backdrop-blur-md rounded-full pl-6 pr-1.5 py-1.5 hover:bg-white transition-colors duration-300 shadow-[0_0_40px_rgba(72,229,194,0.3)]">
            <span className="text-black font-semibold tracking-wide text-sm md:text-base">Tap to Explore</span>
            <div className="bg-[#48E5C2] rounded-full w-10 h-10 flex items-center justify-center text-black group-hover:scale-105 transition-transform duration-300 relative overflow-hidden">
              <ArrowRight size={20} strokeWidth={2.5} className="absolute transition-transform duration-300 group-hover:translate-x-[150%]" />
              <ArrowRight size={20} strokeWidth={2.5} className="absolute -translate-x-[150%] transition-transform duration-300 group-hover:translate-x-0" />
            </div>
          </Link>

          {/* Footer inside the framed box */}
          <div className="absolute bottom-6 left-0 right-0 flex flex-wrap justify-center gap-4 md:gap-8 text-[10px] md:text-xs text-white/60 uppercase tracking-widest font-medium">
            <Link to="/contact" className="hover:text-white transition-colors">Privacy Rights & Requests</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Legal</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Tour Policy</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Code of Conduct</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Suppliers</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Your Privacy Choices</Link>
          </div>
          <div className="absolute bottom-2 left-0 right-0 text-center text-[9px] text-white/40">
            ©2026 UCT Tours Sri Lanka. All Rights Reserved.
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
