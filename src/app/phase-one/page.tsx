// File: src/app/phase-one/page.tsx
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'

// ✔️ Remove DNAHelix entirely, use FuturisticSphere
//   Make sure this path is exactly three levels up and into components/Three
import { FuturisticSphere } from '../../../components/FuturisticSphere'

import { UserProgress } from '../../../components/PhaseOne/UserProgress'
import { NewsCarousel } from '../../../components/PhaseOne/NewsCarousel'
import { InteractiveCard } from '../../../components/PhaseOne/InteractiveCard'
import { SocialIntegration } from '../../../components/PhaseOne/SocialIntegration'

// ❓ Define explicit types for your data
type NewsItem = {
  id: number
  title: string
  image: string
  link: string
}

const newsItems: NewsItem[] = [
  { id: 1, title: 'Helix Expansion Live',    image: '/news1.jpg', link: '#' },
  { id: 2, title: 'New Simulation Unlocked', image: '/news2.jpg', link: '#' },
  { id: 3, title: 'Community Spotlight',     image: '/news3.jpg', link: '#' },
]

type CardItem = {
  id: string
  title: string
  description: string
  link: string
}

const cards: CardItem[] = [
  {
    id: 'explore',
    title: 'Explore the Future',
    description: 'Dive into the data streams and see what lies ahead.',
    link: '#',
  },
  {
    id: 'behind',
    title: 'Behind the Scenes',
    description: 'Meet the minds powering Protocol 2145.',
    link: '#',
  },
  {
    id: 'community',
    title: 'Community Highlights',
    description: 'See what fellow explorers have discovered.',
    link: '#',
  },
]

export default function PhaseOnePage() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-black">
      {/* 3D Background */}
      <Canvas className="absolute inset-0">
        <Stars radius={100} depth={50} count={5000} factor={4} fade />
        <FuturisticSphere />
      </Canvas>

      {/* Overlay UI */}
      <div className="relative z-10 max-w-6xl mx-auto p-6 flex flex-col space-y-8">
        <UserProgress percent={42} />

        <NewsCarousel items={newsItems} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <InteractiveCard key={card.id} {...card} />
          ))}
        </div>

        <SocialIntegration />
      </div>
    </main>
  )
}