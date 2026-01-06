
import React from 'react';

const CHARACTERS = [
  { name: 'KING ARTHUR', role: 'The Architect', img: 'https://cdnb.artstation.com/p/assets/images/images/017/632/635/large/cabeza-patata-chess-king.jpg?1556726224', color: 'bg-orange-100' },
  { name: 'QUEEN BEATRIX', role: 'The Powerhouse', img: 'https://cdna.artstation.com/p/assets/images/images/017/632/636/large/cabeza-patata-chess-queen.jpg?1556726235', color: 'bg-emerald-100' },
  { name: 'SIR KNIGHT', role: 'The Jumper', img: 'https://cdnb.artstation.com/p/assets/images/images/017/632/633/large/cabeza-patata-chess-knight.jpg?1556726214', color: 'bg-blue-100' },
  { name: 'BISHOP BEN', role: 'The Sniper', img: 'https://cdnb.artstation.com/p/assets/images/images/017/632/634/large/cabeza-patata-chess-bishop.jpg?1556726218', color: 'bg-purple-100' },
  { name: 'ROOK RICKY', role: 'The Wall', img: 'https://cdnb.artstation.com/p/assets/images/images/017/632/632/large/cabeza-patata-chess-rook.jpg?1556726211', color: 'bg-red-100' },
  { name: 'PAUL PAWN', role: 'The Soul', img: 'https://cdnb.artstation.com/p/assets/images/images/017/632/631/large/cabeza-patata-chess-pawn.jpg?1556726207', color: 'bg-yellow-100' }
];

const CharacterGallery: React.FC = () => {
  return (
    <div className="py-24">
      <div className="mb-20">
        <h2 className="text-4xl md:text-6xl font-heading font-black text-[#1A1A1A] mb-6">MEET THE <span className="text-orange-500">FLEET</span></h2>
        <p className="text-xl text-gray-500 font-medium">Every piece has a personality. Choose your favorite and learn their moves.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {CHARACTERS.map((char) => (
          <div key={char.name} className="group cursor-pointer">
            <div className={`${char.color} aspect-square rounded-[48px] p-6 relative overflow-hidden transition-all duration-500 group-hover:scale-95 group-hover:shadow-2xl`}>
              <img 
                src={char.img} 
                className="w-full h-full object-cover rounded-[32px] shadow-lg transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6" 
                alt={char.name} 
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                <span className="text-white font-black text-xs tracking-widest uppercase">Explore</span>
              </div>
            </div>
            <div className="mt-6 text-center">
              <h4 className="font-black text-[#1A1A1A] text-sm uppercase tracking-tighter">{char.name}</h4>
              <p className="text-[10px] text-gray-400 font-black tracking-widest uppercase mt-1">{char.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterGallery;
