"use client"
import { motion } from "motion/react"

const testimonials = [
  {
    id: 1,
    name: "Yilan shi",
    role: "Luxury Property Manager",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "Overall, it was a smooth and pleasant experience. We’re genuinely happy with Supriya’s work and would definitely recommend her.",
  },
  {
    id: 2,
    name: "Jorina Haskhasa",
    role: "Interior Enthusiast",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "Supriya was very easy to work with and actually listened to what we wanted. The designs feel practical, modern, and well planned.",
  },
  {
    id: 3,
    name: "Henry",
    role: "Homeowner, London",
    image: "https://randomuser.me/api/portraits/men/19.jpg",
    quote:
      "We’re really happy with how the kitchen turned out. Supriya understood our needs clearly and designed a layout that works perfectly for us.",
  },
]

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="bg-[#e9e6e2] py-24 px-4 lg:px-40"
    >
      {/* Heading */}
      <div className="text-center mb-16">
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
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="bg-[#f9f8f6] p-8 rounded-xl flex flex-col gap-4"
          >
            <div>
              <p className="text-black font-medium text-sm">
                {t.name}
              </p>
              <p className="text-xs text-black/50">
                {t.role}
              </p>
            </div>

            <p className="text-black/70 text-sm leading-relaxed">
              “{t.quote}”
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
