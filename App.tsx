
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CourseGrid from './components/CourseGrid';
import DigitalShop from './components/DigitalShop';
import StatsDashboard from './components/StatsDashboard';
import Footer from './components/Footer';
import CharacterExplorer from './components/CharacterExplorer';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'lessons' | 'shop' | 'stats'>('home');
  const [mode, setMode] = useState<'kid' | 'parent'>('kid');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-700 ${mode === 'parent' ? 'bg-[#F8F9FA]' : 'bg-[#FDF6F0]'}`}>
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        mode={mode} 
        setMode={setMode} 
      />
      
      <main className="flex-grow pt-28">
        {activeTab === 'home' && (
          <div className="animate-in fade-in duration-1000">
            <Hero mode={mode} setActiveTab={setActiveTab} />
            
            <section className="max-w-7xl mx-auto px-6 py-40 relative">
              {/* Animated Background Pieces */}
              <div className="absolute top-0 right-0 opacity-10 animate-float pointer-events-none">
                <img src="https://cdnb.artstation.com/p/assets/images/images/017/632/633/large/cabeza-patata-chess-knight.jpg" className="w-96 rounded-full" alt="" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
                <div className="lg:col-span-6 relative z-10">
                  <span className="inline-block px-5 py-2 bg-orange-100 text-orange-700 rounded-full text-xs font-black tracking-widest uppercase mb-8">
                    {mode === 'parent' ? 'Educational ROI' : 'Unlock Your Potential'}
                  </span>
                  <h2 className="text-6xl md:text-8xl font-heading font-black leading-[0.85] text-[#1A1A1A] tracking-tighter mb-10">
                    {mode === 'parent' ? (
                      <>Building <span className="text-[#2D5A4C]">Cognitive</span> Resilience</>
                    ) : (
                      <>Every Move is a <span className="text-[#2D5A4C]">Story</span></>
                    )}
                  </h2>
                  <p className="text-xl md:text-2xl text-gray-500 leading-relaxed max-w-lg mb-12 font-medium">
                    {mode === 'parent' 
                      ? "Silicon Valley’s most prestigious chess curriculum. We focus on long-term logical reasoning and executive function."
                      : "Join the Valley’s elite squad. Learn the secret moves, battle your friends, and collect legendary 3D badges."}
                  </p>
                  
                  <div className="flex gap-4">
                    <button onClick={() => setActiveTab('lessons')} className="btn-valley px-12 py-6 rounded-[32px] font-black text-lg uppercase tracking-wider">
                      Explore Academy
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-6 grid grid-cols-2 gap-6 relative">
                  <FeatureBox 
                    icon="🎓" 
                    title={mode === 'parent' ? "Ivy League Ready" : "Master Class"} 
                    color="bg-orange-50"
                  />
                  <FeatureBox 
                    icon="⚔️" 
                    title={mode === 'parent' ? "Strategic Logic" : "Epic Battles"} 
                    color="bg-emerald-50"
                  />
                  <div className="col-span-2 bg-[#1A1A1A] p-10 rounded-[48px] text-white flex items-center justify-between group cursor-pointer hover:bg-[#2D5A4C] transition-all">
                    <div>
                      <h4 className="text-3xl font-heading font-black mb-2">Join 2,400+ Students</h4>
                      <p className="opacity-70 font-bold">In Palo Alto, San Francisco & London</p>
                    </div>
                    <div className="text-5xl group-hover:translate-x-4 transition-transform">→</div>
                  </div>
                </div>
              </div>
            </section>

            <CharacterExplorer mode={mode} />
          </div>
        )}

        {activeTab === 'lessons' && <CourseGrid mode={mode} />}
        {activeTab === 'shop' && <DigitalShop />}
        {activeTab === 'stats' && <StatsDashboard />}
      </main>

      <Footer />
    </div>
  );
};

const FeatureBox: React.FC<{ icon: string; title: string; color: string }> = ({ icon, title, color }) => (
  <div className={`${color} p-10 rounded-[48px] border border-white flex flex-col items-center text-center hover:scale-105 transition-all shadow-sm`}>
    <div className="text-5xl mb-6">{icon}</div>
    <h4 className="text-xl font-black font-heading text-[#1A1A1A] leading-tight">{title}</h4>
  </div>
);

export default App;
