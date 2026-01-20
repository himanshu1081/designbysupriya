"use client"
import { motion } from "motion/react"
const testimonials = [
  {
    id: 1,
    name: "Sophia Williams",
    role: "Homeowner, London",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "Working with this team was effortless. Every detail felt intentional and timeless.",
  },
  {
    id: 2,
    name: "Daniel Carter",
    role: "Interior Enthusiast",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "They understood the vision instantly and executed it beyond expectations.",
  },
  {
    id: 3,
    name: "Emily Johnson",
    role: "Property Developer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    quote:
      "Elegant, minimal, and extremely professional. Would 100% recommend.",
  },
  {
    id: 4,
    name: "Michael Anderson",
    role: "Real Estate Consultant",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    quote:
      "The attention to detail and design sensibility truly sets them apart.",
  },
  {
    id: 5,
    name: "Isabella Martinez",
    role: "Studio Apartment Owner",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    quote:
      "They transformed my space into something I actually enjoy living in every day.",
  },
  {
    id: 6,
    name: "Oliver Brown",
    role: "Luxury Property Manager",
    image: "https://randomuser.me/api/portraits/men/19.jpg",
    quote:
      "A seamless experience from concept to execution. Highly reliable team.",
  },
]


const Testimonials = () => {
  return (
    <section className="bg-[#e9e6e2] py-20 px-4 md:px-10 min-h-screen">
      {/* Heading */}
      <div className="text-center mb-14">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-widest text-black/60"
        >
          Testimonials
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-georgia text-black"
        >
          What Clients <span className="italic">Say</span>
        </motion.h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="bg-[#f9f8f6] p-6 rounded-xl flex flex-col justify-between"
          >
            {/* Quote */}
            <p className="text-black/70 text-sm leading-relaxed mb-6">
              “{t.quote}”
            </p>

            {/* Client */}
            <div className="flex items-center gap-3">
              <img
                src={t.image}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover"
              />

              <div>
                <p className="text-black font-medium text-sm">
                  {t.name}
                </p>
                <p className="text-xs text-black/50">
                  {t.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
