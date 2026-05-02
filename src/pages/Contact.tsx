import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function Contact() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#0a0a0a] pt-32 pb-24 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-1 bg-[#48E5C2]" />
            <h2 className="text-[#48E5C2] uppercase tracking-widest text-sm font-semibold">Get in Touch</h2>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Plan your paradise.</h1>
          <p className="text-white/60 text-lg mb-12 max-w-lg">
            Ready to experience the wonders of Sri Lanka? Let our travel experts craft the perfect itinerary for your unforgettable adventure.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#48E5C2] shrink-0 border border-white/5">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Our Office</h4>
                <p className="text-white/50 text-sm">45 Galle Road, Colombo 03<br/>Sri Lanka</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#48E5C2] shrink-0 border border-white/5">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Email Us</h4>
                <p className="text-white/50 text-sm">hello@ucttours.lk<br/>bookings@ucttours.lk</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#48E5C2] shrink-0 border border-white/5">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Call Us</h4>
                <p className="text-white/50 text-sm">+94 11 234 5678<br/>+94 77 123 4567</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-neutral-900 border border-white/5 p-8 md:p-10 rounded-3xl relative overflow-hidden"
        >
          {/* Decorative blur blob */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#48E5C2]/10 blur-[100px] rounded-full pointer-events-none" />

          <h3 className="text-2xl font-display font-bold text-white mb-8 relative z-10">Send an Inquiry</h3>
          
          <form className="relative z-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-white/50 font-medium">First Name</label>
                <input 
                  type="text" 
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#48E5C2]/50 focus:ring-1 focus:ring-[#48E5C2]/50 transition-all"
                  placeholder="John"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-white/50 font-medium">Last Name</label>
                <input 
                  type="text" 
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#48E5C2]/50 focus:ring-1 focus:ring-[#48E5C2]/50 transition-all"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider text-white/50 font-medium">Email Address</label>
              <input 
                type="email" 
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#48E5C2]/50 focus:ring-1 focus:ring-[#48E5C2]/50 transition-all"
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider text-white/50 font-medium">Interested In</label>
              <select className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#48E5C2]/50 focus:ring-1 focus:ring-[#48E5C2]/50 transition-all appearance-none">
                <option value="" disabled selected className="text-white/20">Select a tour...</option>
                <option value="cultural">The Cultural Triangle</option>
                <option value="tea">Tea Country Express</option>
                <option value="safari">Wild Safari Adventure</option>
                <option value="coastal">Coastal Bliss Escape</option>
                <option value="custom">Custom Itinerary</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider text-white/50 font-medium">Message</label>
              <textarea 
                rows={4}
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#48E5C2]/50 focus:ring-1 focus:ring-[#48E5C2]/50 transition-all resize-none"
                placeholder="Tell us about your dream trip..."
              />
            </div>

            <button className="w-full bg-[#48E5C2] text-black font-semibold rounded-xl py-4 flex items-center justify-center gap-2 hover:bg-[#3ce0bd] transition-colors shadow-[0_0_20px_rgba(72,229,194,0.1)]">
              <span>Send Message</span>
              <Send size={16} />
            </button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
}
