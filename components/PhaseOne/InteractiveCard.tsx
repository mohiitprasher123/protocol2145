// File: components/PhaseOne/InteractiveCard.tsx
import React from 'react'
import { motion } from 'framer-motion'

interface InteractiveCardProps {
  title: string
  description: string
  link: string
}

export const InteractiveCard: React.FC<InteractiveCardProps> = ({
  title,
  description,
  link,
}) => (
  <motion.div
    whileHover={{ scale: 1.03, boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}
    className="bg-gray-800 rounded-2xl p-6"
  >
    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
    <p className="text-sm text-gray-300 mb-4">{description}</p>
    <a href={link} className="text-sm text-neonBlue hover:underline">
      Learn More →
    </a>
  </motion.div>
)