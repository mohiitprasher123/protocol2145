// File: components/PhaseOne/SocialIntegration.tsx
import React from 'react'

export const SocialIntegration: React.FC = () => (
  <div className="flex space-x-4 justify-center">
    <a href="https://discord.gg/example" target="_blank" rel="noreferrer">
      <button className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded">
        💬 Join our Discord
      </button>
    </a>
    <button
      onClick={() =>
        navigator.share({
          title: 'Protocol 2145 Phase One',
          url: window.location.href,
        })
      }
      className="py-2 px-4 border border-white text-white rounded hover:bg-gray-700"
    >
      🔗 Share
    </button>
  </div>
)