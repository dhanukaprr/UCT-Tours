import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Home() {
  const backgroundImageUrl = "https://images.unsplash.com/photo-1586521995568-39abaa0c2311?q=80&w=2070";

  return (
    <div className="bg-white min-h-screen font-sans">
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative min-h-[90vh] md:min-h-screen w-full flex items-center justify-center overflow-hidden p-6 pt-24 bg-black"
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

            <Link to="/tours" className="group flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full pl-6 pr-1.5 py-1.5 hover:bg-white/20 transition-all duration-300">
              <span className="text-white font-medium tracking-widest text-sm md:text-base uppercase">Tap to Explore</span>
              <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center text-black group-hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                <ArrowRight size={20} className="absolute transition-transform duration-300 group-hover:translate-x-[150%]" />
                <ArrowRight size={20} className="absolute -translate-x-[150%] transition-transform duration-300 group-hover:translate-x-0" />
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
              ©2026 Universal Ceylon Travels (Pvt) Ltd. All Rights Reserved.
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* About Us & Info Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <span className="uppercase tracking-[0.2em] text-neutral-500 text-sm font-semibold mb-4 block">About Us</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-neutral-900 tracking-tight mb-8">
              Universal Ceylon Travels
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed mb-6">
              Established in 2015, Universal Ceylon Travels (Pvt) Ltd is a premier travel agency based in Sri Lanka, specializing in both Inbound and Outbound tourism. 
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Our mission is to bridge cultures by providing seamless, high-quality travel experiences for both locals looking to explore the world and international travelers eager to discover the "Pearl of the Indian Ocean".
            </p>
          </div>
          
          <div className="bg-neutral-50 p-8 border border-neutral-200">
            <h3 className="text-xl font-display font-bold text-neutral-900 mb-6">Why Choose UCT Travels?</h3>
            <ul className="space-y-4">
              {[
                "Luxury travel specialists",
                "Budget tours",
                "Private customized tours",
                "Wildlife tours",
                "Cultural tours"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2 shrink-0" />
                  <span className="text-neutral-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-display font-bold text-neutral-900 mb-6 mt-12">Our Additional Services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
              {[
                "Hotel Bookings",
                "Airport Transfers",
                "Ticket Bookings",
                "Travel Insurance",
                "Visa Assistance",
                "Event/Wedding Planning"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-neutral-600 text-sm">
                  <span className="w-1 h-1 bg-neutral-400 rounded-full" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
