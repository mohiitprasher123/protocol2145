// File: components/PhaseOne/UserProgress.tsx
import React from 'react'

export const UserProgress: React.FC<{ percent: number }> = ({ percent }) => (
  <div className="w-full">
    <span className="block text-sm text-gray-300 mb-1">
      Progress to Phase Two
    </span>
    <div className="w-full bg-gray-700 rounded h-2">
      <div
        className="bg-neonBlue h-2 rounded"
        style={{ width: `${percent}%` }}
      />
    </div>
  </div>
)