import { motion } from "motion/react";
import { ArrowRight, MapPin, Clock, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";

const tours = [
  {
    id: 1,
    title: "The Cultural Triangle",
    duration: "4 Days / 3 Nights",
    category: "Heritage & History",
    location: "Sigiriya, Dambulla, Polonnaruwa",
    excerpt: "Journey through the ancient heart of Sri Lanka. Explore the majestic lion rock fortress of Sigiriya, marvel at the cave temples of Dambulla, and cycle through the timeless ruins of Polonnaruwa. A deep dive into millennia of history and breathtaking architecture.",
    itinerary: [
      "Day 1: Arrival in Colombo & Transfer to Dambulla. Evening cave temple visit.",
      "Day 2: Early morning climb of Sigiriya Rock Fortress. Afternoon village safari.",
      "Day 3: Day trip to the ancient medieval capital of Polonnaruwa.",
      "Day 4: Proceed to Kandy for the Temple of the Tooth, then departure."
    ],
    image: "https://images.unsplash.com/photo-1624806992066-5fffe7ca9272?q=80&w=2070",
  },
  {
    id: 2,
    title: "Tea Country Express",
    duration: "3 Days / 2 Nights",
    category: "Nature & Landscapes",
    location: "Nuwara Eliya, Ella",
    excerpt: "Wind your way up into the cool, misty mountains of Sri Lanka. Ride the famous scenic train, wander through lush green tea plantations, and witness the dramatic views from Ella Rock and World's End.",
    itinerary: [
      "Day 1: Scenic train ride from Kandy to Nanu Oya. Explore Nuwara Eliya.",
      "Day 2: Visit a working tea estate and factory. Train to Ella in the afternoon.",
      "Day 3: Hike Little Adam's Peak & visit the Nine Arch Bridge before departure."
    ],
    image: "https://images.unsplash.com/photo-1625736300986-6e5a6bfdfca2?q=80&w=2070",
  },
  {
    id: 3,
    title: "Wild Safari Adventure",
    duration: "2 Days / 1 Night",
    category: "Wildlife",
    location: "Yala National Park",
    excerpt: "Experience the thrill of the wild on the southeastern coast. Known for having one of the highest leopard densities in the world, Yala offers an unforgettable safari experience alongside elephants, sloth bears, and crocodiles.",
    itinerary: [
      "Day 1: Arrive at Yala eco-lodge. Afternoon 4x4 game drive.",
      "Day 2: Early morning safari at dawn. Breakfast in the bush, followed by departure."
    ],
    image: "https://images.unsplash.com/photo-1618337207604-9844e1eed1df?q=80&w=2070",
  },
  {
    id: 4,
    title: "Coastal Bliss Escape",
    duration: "5 Days / 4 Nights",
    category: "Relaxation",
    location: "Mirissa, Galle, Unawatuna",
    excerpt: "Unwind on the golden, palm-fringed beaches of the southern coast. Surf, swim, go whale watching, and wander the cobblestone streets of the historic Dutch Fort in Galle. The perfect tropical getaway.",
    itinerary: [
      "Day 1: Transfer to Mirissa. Relax on the pristine sandy beaches.",
      "Day 2: Early morning whale and dolphin watching cruise.",
      "Day 3: Travel to Unawatuna. Visit the secret beach and swing from palm trees.",
      "Day 4: Day trip exploring the colonial architecture of Galle Fort.",
      "Day 5: Final beach morning and transfer to airport."
    ],
    image: "https://images.unsplash.com/photo-1583002621063-e3814402eb0e?q=80&w=2070",
  }
];

export function Tours() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white min-h-screen text-neutral-900 font-sans"
    >
      {/* Editorial Hero Area */}
      <section className="relative h-[60vh] w-full bg-neutral-900 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1621228965682-1dd77884d509?q=80&w=2070)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-white" />
        
        <div className="relative z-10 text-center px-6 mt-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="uppercase tracking-[0.2em] text-white/80 text-sm font-semibold mb-4 block"
          >
            Travel Journal
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight"
          >
            Curated Experiences
          </motion.h1>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="mb-16 border-b border-neutral-200 pb-8">
          <p className="text-xl md:text-2xl font-light leading-relaxed text-neutral-600">
            We don't just sell tours; we craft stories. Explore our collection of thoughtfully designed itineraries that bring the authentic spirit, culture, and nature of Sri Lanka directly to you.
          </p>
        </div>

        <div className="space-y-24">
          {tours.map((tour, index) => (
            <motion.article 
              key={tour.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              {/* Tour Header Category & Title */}
              <header className="mb-8">
                <div className="flex items-center gap-4 mb-4 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  <span>{tour.category}</span>
                  <span className="w-1 h-1 bg-neutral-300 rounded-full" />
                  <span className="flex items-center gap-1.5"><Clock size={14} /> {tour.duration}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-neutral-900 mb-4">
                  {tour.title}
                </h2>
                <div className="flex items-center gap-2 text-neutral-500 text-sm font-medium">
                  <MapPin size={16} />
                  <span>{tour.location}</span>
                </div>
              </header>

              {/* Large Editorial Image */}
              <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden mb-8">
                <img 
                  src={tour.image} 
                  alt={tour.title}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                {/* Excerpt */}
                <div className="md:col-span-5">
                  <p className="text-lg text-neutral-600 leading-relaxed">
                    {tour.excerpt}
                  </p>
                  
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-2 mt-8 text-sm font-bold uppercase tracking-wider text-neutral-900 border-b-2 border-neutral-900 pb-1 hover:text-neutral-500 hover:border-neutral-500 transition-colors"
                  >
                    Inquire about this trip <ArrowRight size={16} />
                  </Link>
                </div>

                {/* Itinerary */}
                <div className="md:col-span-7 bg-neutral-50 p-8">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-900 mb-6 flex items-center gap-2">
                    <CalendarDays size={16} /> Itinerary Highlights
                  </h3>
                  <ul className="space-y-4">
                    {tour.itinerary.map((day, i) => (
                      <li key={i} className="flex gap-4 text-neutral-700 items-start">
                        <span className="font-medium text-neutral-400 select-none">
                          {(i + 1).toString().padStart(2, '0')}
                        </span>
                        <span className="text-sm leading-relaxed">{day}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
