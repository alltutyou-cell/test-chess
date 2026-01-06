
import React from 'react';
import { DigitalProduct } from '../types';

const PRODUCTS: DigitalProduct[] = [
  {
    id: 'p1',
    title: 'Chess: Genesis',
    type: 'E-Book',
    price: '$59.99',
    description: 'Find out about the history of chess, memorable matches, and modern tactical theory.',
    thumbnail: 'https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?w=800&q=80'
  },
  {
    id: 'p2',
    title: 'Silicon Gambit Pack',
    type: 'Move Database',
    price: '$24.99',
    description: 'A digital collection of 500+ analyzed grandmaster matches for deep study.',
    thumbnail: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800&q=80'
  },
  {
    id: 'p3',
    title: 'Visual Strategy Pack',
    type: 'Video Pack',
    price: '$89.99',
    description: 'A 10-part high-definition video series on advanced board visualization techniques.',
    thumbnail: 'https://images.unsplash.com/photo-1580541832626-2a7131ee809f?w=800&q=80'
  }
];

const DigitalShop: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="mb-20 text-center">
        <h2 className="text-6xl md:text-8xl font-heading font-black text-[#1A1A1A] mb-8">THE LIBRARY</h2>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">
          Premium digital products for the dedicated student. Instant downloads, lifetime access.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="bg-white rounded-[64px] overflow-hidden border border-orange-100 shadow-sm flex flex-col md:flex-row transition-all hover:shadow-2xl hover:border-[#2D5A4C]/20">
            <div className="md:w-1/2 relative bg-[#2D5A4C] overflow-hidden p-8 flex items-center justify-center">
               <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <div className="h-full w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-400 via-transparent to-transparent"></div>
               </div>
               <img src={product.thumbnail} alt={product.title} className="w-full aspect-square object-cover rounded-[32px] shadow-2xl transition-transform hover:scale-105 duration-500" />
            </div>
            
            <div className="md:w-1/2 p-12 flex flex-col justify-between">
              <div>
                <div className="inline-block px-4 py-1.5 bg-gray-50 text-gray-400 rounded-full text-[10px] font-black tracking-widest uppercase mb-6">
                  {product.type}
                </div>
                <h3 className="text-4xl font-heading font-black text-[#1A1A1A] mb-4 leading-tight">{product.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-8">
                  {product.description}
                </p>
              </div>

              <div>
                <div className="flex justify-between items-end mb-10">
                  <div className="text-gray-400 text-xs font-black uppercase tracking-widest">Price</div>
                  <div className="text-4xl font-heading font-black text-[#2D5A4C]">{product.price}</div>
                </div>
                
                <button className="w-full py-6 bg-[#1A1A1A] text-white rounded-[32px] font-black text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-[#2D5A4C] transition-all">
                  Purchase <span>→</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Decorative footer figure in Shop */}
      <div className="mt-32 flex justify-center opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
        <img src="https://cdnb.artstation.com/p/assets/images/images/017/632/634/large/cabeza-patata-chess-bishop.jpg?1556726218" className="w-48 character-float" alt="" />
      </div>
    </div>
  );
};

export default DigitalShop;
