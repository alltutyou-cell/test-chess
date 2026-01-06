
import React from 'react';

interface HeroProps {
  mode: 'kid' | 'parent';
  setActiveTab: (tab: any) => void;
}

const Hero: React.FC<HeroProps> = ({ mode, setActiveTab }) => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden px-6 pt-10">
      <div className="text-center max-w-7xl relative z-10 mb-20">
        <h1 className="text-7xl md:text-[160px] font-heading font-black leading-[0.75] mb-12 text-[#1A1A1A] tracking-tighter">
          {mode === 'parent' ? (
            <>LOGIC IS THE <br /><span className="text-[#2D5A4C]">NEW CURRENCY</span></>
          ) : (
            <>LEVEL UP <br /><span className="text-[#2D5A4C]">YOUR GAME</span></>
          )}
        </h1>
        
        <p className="text-2xl md:text-3xl text-gray-400 mb-16 max-w-4xl mx-auto leading-tight font-medium">
          {mode === 'parent' 
            ? "Elite strategic training for the leaders of tomorrow. Backed by Grandmaster wisdom and Silicon Valley pedagogy."
            : "The coolest chess academy on earth. High-stakes moves, epic characters, and a digital journey you'll never forget."}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-32">
          <button 
            onClick={() => setActiveTab('lessons')}
            className="btn-valley px-16 py-8 rounded-[40px] font-black text-xl shadow-2xl uppercase tracking-widest"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Interactive 3D Character Roster */}
      <div className="relative w-full max-w-7xl mx-auto h-[450px] flex items-end justify-center gap-4 lg:gap-16 px-10">
        <HeroChar 
          img="https://cdnb.artstation.com/p/assets/images/images/017/632/631/large/cabeza-patata-chess-pawn.jpg" 
          name="Pawn Pro" 
          color="bg-yellow-400" 
          rotate="-12deg"
          delay="0s"
        />
        <HeroChar 
          img="https://cdnb.artstation.com/p/assets/images/images/017/632/633/large/cabeza-patata-chess-knight.jpg" 
          name="Tech Knight" 
          color="bg-emerald-500" 
          rotate="-6deg"
          delay="0.2s"
        />
        <HeroChar 
          img="https://cdnb.artstation.com/p/assets/images/images/017/632/635/large/cabeza-patata-chess-king.jpg" 
          name="The CEO" 
          color="bg-[#1A1A1A]" 
          rotate="0deg"
          delay="0.4s"
          main
        />
        <HeroChar 
          img="https://cdna.artstation.com/p/assets/images/images/017/632/636/large/cabeza-patata-chess-queen.jpg" 
          name="The Founder" 
          color="bg-orange-500" 
          rotate="6deg"
          delay="0.6s"
        />
        <HeroChar 
          img="https://cdnb.artstation.com/p/assets/images/images/017/632/632/large/cabeza-patata-chess-rook.jpg" 
          name="The Firewall" 
          color="bg-blue-600" 
          rotate="12deg"
          delay="0.8s"
        />
      </div>

      {/* Scrolling Atmosphere */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-1/4 left-10 w-24 h-24 bg-orange-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-emerald-100 rounded-full blur-3xl opacity-50"></div>
      </div>
    </section>
  );
};

const HeroChar: React.FC<{ img: string, name: string, color: string, rotate: string, delay: string, main?: boolean }> = ({ img, name, color, rotate, delay, main }) => (
  <div 
    className={`flex flex-col items-center group cursor-pointer transition-all duration-700 ${main ? 'scale-125 translate-y-[-40px]' : ''}`}
    style={{ animation: `float-y 8s ease-in-out infinite ${delay}` }}
  >
    <div className={`relative p-2 rounded-[48px] shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-0`} style={{ transform: `rotate(${rotate})`, background: 'white' }}>
      <img src={img} className="w-24 md:w-48 rounded-[40px] shadow-inner" alt={name} />
      <div className={`absolute -bottom-4 -right-4 w-12 h-12 ${color} rounded-2xl flex items-center justify-center text-white font-black text-xs shadow-xl opacity-0 group-hover:opacity-100 transition-opacity`}>
        LV.1
      </div>
    </div>
    <span className="mt-8 text-[11px] font-black text-gray-300 uppercase tracking-[0.3em] group-hover:text-[#2D5A4C] transition-colors">{name}</span>
  </div>
);

export default Hero;
