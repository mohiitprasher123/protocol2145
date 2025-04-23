import React from 'react'
import { motion } from 'framer-motion'

export const NewsCarousel: React.FC<{
  items: { id: number; title: string; image: string; link: string }[]
}> = ({ items }) => (
  <div className="overflow-x-auto whitespace-nowrap py-4">
    {items.map(item => (
      <motion.a
        key={item.id}
        href={item.link}
        className="inline-block mx-2 w-40 flex-shrink-0"
        whileHover={{ scale: 1.05 }}
      >
        <img src={item.image} alt={item.title} className="w-full h-24 object-cover rounded-lg" />
        <p className="mt-2 text-xs text-white text-center">{item.title}</p>
      </motion.a>
    ))}
  </div>
)