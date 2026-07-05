'use client';

import { useState } from 'react';
import { Shirt, Sword, Smile, Car, PawPrint } from 'lucide-react';

interface InventoryViewerProps {
  gameType: 'freefire' | 'pubg' | 'efootball';
  uid: string;
  equippedItems?: any;
}

export default function InventoryViewer({ gameType, uid, equippedItems }: InventoryViewerProps) {
  const [activeTab, setActiveTab] = useState('outfits');

  const tabs = {
    freefire: [
      { id: 'outfits', label: 'ড্রেস/আউটফিট', icon: Shirt },
      { id: 'guns', label: 'গান স্কিন', icon: Sword },
      { id: 'emotes', label: 'ইমোট', icon: Smile },
      { id: 'vehicles', label: 'গাড়ি', icon: Car },
      { id: 'pets', label: 'পেট', icon: PawPrint },
    ],
    pubg: [
      { id: 'outfits', label: 'আউটফিট', icon: Shirt },
      { id: 'guns', label: 'অস্ত্র', icon: Sword },
      { id: 'vehicles', label: 'ভেহিকল', icon: Car },
    ],
    efootball: [
      { id: 'players', label: 'প্লেয়ার', icon: Shirt },
      { id: 'kits', label: 'কিট', icon: Shirt },
    ]
  };

  return (
    <div className="bg-[#1a1a1a] border border-gray-700 rounded-2xl p-6">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
        🎮 Inventory Viewer
      </h2>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tabs[gameType].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all ${
                activeTab === tab.id 
                  ? 'bg-green-600 text-white' 
                  : 'bg-[#252525] hover:bg-[#333]'
              }`}
            >
              <Icon size={18} />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Content Area */}
      <div className="bg-black/50 rounded-xl p-8 text-center min-h-[300px] flex items-center justify-center border border-dashed border-gray-700">
        <div>
          <p className="text-4xl mb-4">🖼️</p>
          <p className="text-xl text-gray-400">এখানে {gameType.toUpperCase()} এর {activeTab} আইটেমগুলো দেখাবে</p>
          <p className="text-sm text-gray-500 mt-2">API Integration চলছে...</p>
        </div>
      </div>
    </div>
  );
}
