'use client';

import { useState } from 'react';
import { Shirt, Sword, Smile, Car, PawPrint } from 'lucide-react';

export default function InventoryViewer({ gameType = 'freefire', uid = '147098967' }) {
  const [activeTab, setActiveTab] = useState('outfits');

  const gameTabs = {
    freefire: [
      { id: 'outfits', label: 'ড্রেস/আউটফিট', icon: Shirt },
      { id: 'guns', label: 'গান স্কিন', icon: Sword },
      { id: 'emotes', label: 'ইমোট', icon: Smile },
      { id: 'vehicles', label: 'গাড়ি', icon: Car },
      { id: 'pets', label: 'পেট', icon: PawPrint },
    ],
    pubg: [
      { id: 'outfits', label: 'আউটফিট', icon: Shirt },
      { id: 'guns', label: 'অস্ত্র স্কিন', icon: Sword },
      { id: 'vehicles', label: 'ভেহিকল', icon: Car },
    ],
    efootball: [
      { id: 'players', label: 'প্লেয়ার কার্ড', icon: Shirt },
      { id: 'kits', label: 'জার্সি/কিট', icon: Shirt },
    ]
  };

  const currentTabs = gameTabs[gameType as keyof typeof gameTabs] || gameTabs.freefire;

  return (
    <div className="bg-[#1a1a1a] border border-gray-700 rounded-3xl p-6 shadow-2xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold flex items-center gap-3">
          📦 {gameType.toUpperCase()} Inventory
        </h2>
        <p className="text-sm text-gray-400">UID: {uid}</p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-800 pb-4">
        {currentTabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-medium transition-all ${
                activeTab === tab.id 
                  ? 'bg-green-600 text-white shadow-lg' 
                  : 'bg-[#252525] hover:bg-[#333] text-gray-300'
              }`}
            >
              <Icon size={20} />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Preview Area */}
      <div className="bg-black rounded-2xl p-12 border border-dashed border-gray-700 flex flex-col items-center justify-center min-h-[320px]">
        <div className="text-6xl mb-6 opacity-50">🖼️</div>
        <h3 className="text-2xl font-semibold mb-2 capitalize">{activeTab}</h3>
        <p className="text-gray-400 text-center max-w-md">
          এখানে {gameType} এর {activeTab} আইটেমগুলোর ছবি দেখাবে (API Connected)
        </p>
        <div className="mt-8 text-xs text-green-500">Demo Mode • Real API Coming Soon</div>
      </div>
    </div>
  );
}
