
import React, { useState } from 'react';

const CHARS = [
  { id: 'knight', name: 'Sir Jumps-A-Lot', role: 'Tactical Agility', img: 'https://cdnb.artstation.com/p/assets/images/images/017/632/633/large/cabeza-patata-chess-knight.jpg', bio: 'Specializes in unpredictable moves and sudden pivots. The favorite of early-stage startups.' },
  { id: 'bishop', name: 'Visionary Ben', role: 'Long-Range Strategy', img: 'https://cdnb.artstation.com/p/assets/images/images/017/632/634/large/cabeza-patata-chess-bishop.jpg', bio: 'Sees the whole board diagonally. Perfect for identifying long-term growth opportunities.' },
  { id: 'rook', name: 'Ricky the Rock', role: 'Solid Defense', img: 'https://cdnb.artstation.com/p/assets/images/images/017/632/632/large/cabeza-patata-chess-rook.jpg', bio: 'Unmovable. The foundation of any strong opening. He protects the core assets.' }
];

const CharacterExplorer: React.FC<{ mode: 'kid' | 'parent' }> = ({ mode }) => {
  const [active, setActive] = useState(CHARS[0]);

  return (
    <section className="max-w-7xl mx-auto px-6 py-40">
      <div className="bg-[#1A1A1A] rounded-[80px] overflow-hidden flex flex-col lg:flex-row relative min-h-[600px] shadow-2xl">
        {/* Visual Side */}
        <div className="lg:w-1/2 p-20 flex items-center justify-center relative overflow-hidden bg-[#2D5A4C]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-400/20 via-transparent to-transparent"></div>
          <img 
            key={active.id}
            src={active.img} 
            className="w-full max-w-sm rounded-[60px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] animate-in zoom-in duration-500 character-float" 
            alt={active.name} 
          />
        </div>

        {/* Content Side */}
        <div className="lg:w-1/2 p-20 flex flex-col justify-center text-white">
          <div className="text-emerald-400 font-black tracking-[0.3em] uppercase text-xs mb-6">Explore the Fleet</div>
          <h2 className="text-6xl font-heading font-black mb-8 leading-none tracking-tighter">
            {mode === 'parent' ? active.role : active.name}
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed mb-16 font-medium">
            {active.bio}
          </p>

          <div className="flex gap-6">
            {CHARS.map(c => (
              <button 
                key={c.id}
                onClick={() => setActive(c)}
                className={`w-24 h-24 rounded-[32px] overflow-hidden border-4 transition-all ${active.id === c.id ? 'border-emerald-400 scale-110 shadow-lg' : 'border-transparent opacity-40 grayscale hover:opacity-100 hover:grayscale-0'}`}
              >
                <img src={c.img} className="w-full h-full object-cover" alt="" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharacterExplorer;
