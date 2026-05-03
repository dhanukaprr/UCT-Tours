import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function Contact() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white min-h-screen text-neutral-900 font-sans pt-32 pb-24 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        
        {/* Left Side: Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="mb-4">
            <span className="uppercase tracking-[0.2em] text-neutral-500 text-sm font-semibold">Get in Touch</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-neutral-900 tracking-tight mb-6">Plan your paradise.</h1>
          <p className="text-neutral-600 text-lg mb-12 max-w-lg leading-relaxed">
            Ready to experience the wonders of Sri Lanka? Let our travel experts craft the perfect itinerary for your unforgettable adventure.
          </p>

          <div className="space-y-10">
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 flex items-center justify-center text-neutral-800 shrink-0 border border-neutral-200 rounded-full">
                <MapPin size={20} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-neutral-900 font-semibold mb-1">Our Office</h4>
                <p className="text-neutral-500 text-sm leading-relaxed">45 Galle Road, Colombo 03<br/>Sri Lanka</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-12 h-12 flex items-center justify-center text-neutral-800 shrink-0 border border-neutral-200 rounded-full">
                <Mail size={20} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-neutral-900 font-semibold mb-1">Email Us</h4>
                <p className="text-neutral-500 text-sm leading-relaxed">hello@ucttours.lk<br/>bookings@ucttours.lk</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-12 h-12 flex items-center justify-center text-neutral-800 shrink-0 border border-neutral-200 rounded-full">
                <Phone size={20} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-neutral-900 font-semibold mb-1">Call Us</h4>
                <p className="text-neutral-500 text-sm leading-relaxed">+94 11 234 5678<br/>+94 77 123 4567</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-neutral-50 border border-neutral-200 p-8 md:p-12"
        >
          <h3 className="text-2xl font-display font-bold text-neutral-900 mb-8">Send an Inquiry</h3>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">First Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white border border-neutral-200 rounded-none px-4 py-3 text-neutral-900 placeholder:text-neutral-300 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-all"
                  placeholder="John"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">Last Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white border border-neutral-200 rounded-none px-4 py-3 text-neutral-900 placeholder:text-neutral-300 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-all"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">Email Address</label>
              <input 
                type="email" 
                className="w-full bg-white border border-neutral-200 rounded-none px-4 py-3 text-neutral-900 placeholder:text-neutral-300 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-all"
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">Interested In</label>
              <select className="w-full bg-white border border-neutral-200 rounded-none px-4 py-3 text-neutral-900 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-all appearance-none">
                <option value="" disabled selected className="text-neutral-400">Select a tour...</option>
                <option value="cultural">The Cultural Triangle</option>
                <option value="tea">Tea Country Express</option>
                <option value="safari">Wild Safari Adventure</option>
                <option value="coastal">Coastal Bliss Escape</option>
                <option value="custom">Custom Itinerary</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">Message</label>
              <textarea 
                rows={4}
                className="w-full bg-white border border-neutral-200 rounded-none px-4 py-3 text-neutral-900 placeholder:text-neutral-300 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-all resize-none"
                placeholder="Tell us about your dream trip..."
              />
            </div>

            <button className="w-full bg-neutral-900 text-white font-semibold py-4 flex items-center justify-center gap-2 hover:bg-neutral-800 transition-colors mt-4">
              <span className="uppercase tracking-widest text-sm">Send Message</span>
              <Send size={16} />
            </button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
}
