
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-orange-50 mt-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
          <div className="md:col-span-1">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-[#2D5A4C] rounded-[18px] flex items-center justify-center font-black text-white text-xl">CV</div>
              <span className="font-heading font-black tracking-tighter text-2xl text-[#1A1A1A]">CHESS LAB</span>
            </div>
            <p className="text-gray-400 leading-relaxed font-bold text-sm">
              Developing the next wave of strategic thinkers through premium digital chess education. 
              Palo Alto, California.
            </p>
          </div>
          
          <div>
            <h5 className="font-black mb-10 text-[10px] uppercase tracking-[0.3em] text-gray-400">Products</h5>
            <ul className="space-y-6 font-black text-sm text-[#1A1A1A]">
              <li><a href="#" className="hover:text-[#2D5A4C] transition-colors">Academy Access</a></li>
              <li><a href="#" className="hover:text-[#2D5A4C] transition-colors">Digital Library</a></li>
              <li><a href="#" className="hover:text-[#2D5A4C] transition-colors">Strategy Books</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-black mb-10 text-[10px] uppercase tracking-[0.3em] text-gray-400">Company</h5>
            <ul className="space-y-6 font-black text-sm text-[#1A1A1A]">
              <li><a href="#" className="hover:text-[#2D5A4C] transition-colors">Valley Vision</a></li>
              <li><a href="#" className="hover:text-[#2D5A4C] transition-colors">Contact Support</a></li>
              <li><a href="#" className="hover:text-[#2D5A4C] transition-colors">Partnerships</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-black mb-10 text-[10px] uppercase tracking-[0.3em] text-gray-400">Social</h5>
            <div className="flex gap-4">
              {['𝕏', 'IG', 'YT'].map(social => (
                <a key={social} href="#" className="w-14 h-14 bg-gray-50 rounded-[22px] flex items-center justify-center font-black text-[#1A1A1A] hover:bg-[#2D5A4C] hover:text-white transition-all shadow-sm">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-32 pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest">© 2024 Checkmate Valley Academy. All rights reserved.</p>
          <div className="flex gap-12 text-[10px] font-black text-gray-300 uppercase tracking-widest">
            <a href="#" className="hover:text-[#1A1A1A]">Privacy Protocol</a>
            <a href="#" className="hover:text-[#1A1A1A]">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Subtle character peeking in footer */}
      <img src="https://cdnb.artstation.com/p/assets/images/images/017/632/631/large/cabeza-patata-chess-pawn.jpg?1556726207" className="absolute -bottom-10 right-0 w-32 opacity-10 rotate-[-20deg]" alt="" />
    </footer>
  );
};

export default Footer;
