
import React from 'react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: any) => void;
  mode: 'kid' | 'parent';
  setMode: (mode: 'kid' | 'parent') => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, mode, setMode }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6">
      <nav className="max-w-7xl mx-auto glass-nav shadow-[0_20px_50px_-20px_rgba(45,90,76,0.15)] rounded-[32px] px-8 py-4 flex items-center justify-between">
        
        {/* Toggle Mode */}
        <div className="flex bg-gray-100 p-1.5 rounded-2xl">
          <button 
            onClick={() => setMode('kid')}
            className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${mode === 'kid' ? 'bg-white text-[#2D5A4C] shadow-sm' : 'text-gray-400'}`}
          >
            Kid
          </button>
          <button 
            onClick={() => setMode('parent')}
            className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${mode === 'parent' ? 'bg-white text-[#2D5A4C] shadow-sm' : 'text-gray-400'}`}
          >
            Parent
          </button>
        </div>

        <div 
          className="flex items-center gap-4 cursor-pointer group"
          onClick={() => setActiveTab('home')}
        >
          <div className="w-11 h-11 bg-[#2D5A4C] rounded-2xl flex items-center justify-center text-white font-black text-xl group-hover:rotate-12 transition-transform shadow-lg">
            CV
          </div>
          <span className="hidden md:block text-lg font-heading font-black tracking-tighter text-[#1A1A1A] uppercase">
            Checkmate <span className="text-[#2D5A4C]">Valley</span>
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-10">
          <NavLink label="Home" active={activeTab === 'home'} onClick={() => setActiveTab('home')} />
          <NavLink label="Academy" active={activeTab === 'lessons'} onClick={() => setActiveTab('lessons')} />
          <NavLink label="Library" active={activeTab === 'shop'} onClick={() => setActiveTab('shop')} />
          <NavLink label="Stats" active={activeTab === 'stats'} onClick={() => setActiveTab('stats')} />
        </div>

        <button className="bg-[#1A1A1A] text-white px-8 py-4 rounded-[20px] font-black text-[11px] uppercase tracking-widest hover:bg-[#2D5A4C] transition-all transform hover:scale-105 active:scale-95 shadow-md">
          Portal
        </button>
      </nav>
    </header>
  );
};

const NavLink: React.FC<{ label: string; active: boolean; onClick: () => void }> = ({ label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`font-black text-[11px] tracking-[0.2em] uppercase transition-all hover:text-[#2D5A4C] ${active ? 'text-[#2D5A4C]' : 'text-gray-400'}`}
  >
    {label}
  </button>
);

export default Header;
