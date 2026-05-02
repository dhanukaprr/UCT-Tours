import { motion } from "motion/react";
import { ArrowRight, MapPin, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";

const tours = [
  {
    id: 1,
    title: "The Cultural Triangle",
    duration: "4 Days / 3 Nights",
    location: "Sigiriya, Dambulla, Polonnaruwa",
    price: "$450",
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1624806992066-5fffe7ca9272?q=80&w=2070",
    featured: true
  },
  {
    id: 2,
    title: "Tea Country Express",
    duration: "3 Days / 2 Nights",
    location: "Nuwara Eliya, Ella",
    price: "$320",
    rating: "4.8",
    image: "https://images.unsplash.com/photo-1625736300986-6e5a6bfdfca2?q=80&w=2070",
    featured: false
  },
  {
    id: 3,
    title: "Wild Safari Adventure",
    duration: "2 Days / 1 Night",
    location: "Yala National Park",
    price: "$280",
    rating: "5.0",
    image: "https://images.unsplash.com/photo-1618337207604-9844e1eed1df?q=80&w=2070",
    featured: false
  },
  {
    id: 4,
    title: "Coastal Bliss Escape",
    duration: "5 Days / 4 Nights",
    location: "Mirissa, Galle, Unawatuna",
    price: "$550",
    rating: "4.7",
    image: "https://images.unsplash.com/photo-1583002621063-e3814402eb0e?q=80&w=2070",
    featured: false
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export function Tours() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#0a0a0a] pt-32 pb-24 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-1 bg-[#48E5C2]" />
            <h2 className="text-[#48E5C2] uppercase tracking-widest text-sm font-semibold">Our Destinations</h2>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Discover the extraordinary.</h1>
          <p className="text-white/60 max-w-2xl text-lg">
            From misty mountains to ancient ruins and golden shores, embark on carefully curated journeys that capture the heart of Sri Lanka.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {tours.map((tour, index) => (
            <motion.div 
              key={tour.id} 
              variants={itemVariants}
              className={`group relative rounded-3xl overflow-hidden bg-neutral-900 border border-white/5 shadow-xl flex flex-col ${index === 0 ? 'md:col-span-2 lg:col-span-2' : ''}`}
            >
              <div className="relative h-72 md:h-80 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${tour.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                
                {tour.featured && (
                  <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-2 mb-2 text-white/80 text-sm">
                    <MapPin size={14} />
                    <span>{tour.location}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold">{tour.title}</h3>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2 text-white/50 text-sm">
                    <Clock size={16} />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[#48E5C2] font-medium">
                    <Star size={16} fill="currentColor" />
                    <span>{tour.rating}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div>
                    <span className="text-white/50 text-xs uppercase tracking-wider block mb-1">Starting from</span>
                    <span className="text-white text-xl font-bold">{tour.price}</span>
                  </div>
                  
                  <Link to="/contact" className="w-12 h-12 rounded-full bg-white/5 hover:bg-[#48E5C2] flex items-center justify-center text-white hover:text-black transition-colors duration-300">
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
