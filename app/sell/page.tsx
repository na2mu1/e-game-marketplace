'use client';

import { useState } from 'react';
import InventoryViewer from '../../components/InventoryViewer';

export default function SellPage() {
  const [gameType, setGameType] = useState<'freefire' | 'pubg' | 'efootball'>('freefire');
  const [uid, setUid] = useState('');

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Sell Your Account</h1>
        <p className="text-xl text-gray-400">Get AI Valuation + List Instantly</p>
      </div>

      <div className="bg-[#1a1a1a] border border-gray-700 rounded-3xl p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Side - Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Account Details</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm mb-2">Select Game</label>
                <div className="flex gap-3">
                  {['freefire', 'pubg', 'efootball'].map((game) => (
                    <button
                      key={game}
                      onClick={() => setGameType(game as any)}
                      className={`px-6 py-3 rounded-2xl flex-1 text-sm font-medium ${
                        gameType === game ? 'bg-green-600' : 'bg-[#252525]'
                      }`}
                    >
                      {game.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm mb-2">Player UID / ID</label>
                <input
                  type="text"
                  value={uid}
                  onChange={(e) => setUid(e.target.value)}
                  placeholder="147098967"
                  className="w-full bg-black border border-gray-700 rounded-2xl px-5 py-4 text-lg"
                />
              </div>

              <button className="w-full bg-green-600 hover:bg-green-500 py-5 rounded-2xl text-xl font-semibold transition">
                Analyze with AI
              </button>
            </div>
          </div>

          {/* Right Side - Preview */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Live Preview</h2>
            {uid ? (
              <InventoryViewer gameType={gameType} uid={uid} />
            ) : (
              <div className="h-96 bg-black/50 rounded-3xl flex items-center justify-center border border-dashed border-gray-700">
                <p className="text-gray-500">Enter UID to see preview</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
