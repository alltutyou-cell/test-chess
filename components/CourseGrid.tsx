
import React from 'react';
import { Lesson } from '../types';

interface CourseGridProps {
  mode: 'kid' | 'parent';
}

const COURSES: Lesson[] = [
  {
    id: '1',
    title: 'Prototype Openings',
    description: 'The foundation of the board. Learn to build your first strategy with efficiency.',
    duration: '4 Lessons',
    level: 'Beginner',
    instructor: 'GM Sarah Chen',
    thumbnail: 'https://images.unsplash.com/photo-1586165368502-1bad197a6461?w=800&q=80'
  },
  {
    id: '2',
    title: 'The Growth Phase',
    description: 'Transitioning to the mid-game. Scaling your attack and managing board assets.',
    duration: '8 Lessons',
    level: 'Intermediate',
    instructor: 'GM Marcus Vole',
    thumbnail: 'https://images.unsplash.com/photo-1528819622765-d6bcf132f793?w=800&q=80'
  },
  {
    id: '3',
    title: 'The Exit Strategy',
    description: 'Mastering the endgame. Closing the deal with precision and grandmaster logic.',
    duration: '6 Lessons',
    level: 'Advanced',
    instructor: 'WGM Elena Ross',
    thumbnail: 'https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?w=800&q=80'
  }
];

const CourseGrid: React.FC<CourseGridProps> = ({ mode }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
        <div>
          <div className="text-[#2D5A4C] font-black tracking-[0.4em] text-xs uppercase mb-6">The Curriculum</div>
          <h2 className="text-6xl md:text-[120px] font-heading font-black text-[#1A1A1A] leading-none tracking-tighter uppercase">Academy</h2>
        </div>
        <p className="text-2xl text-gray-400 max-w-md font-medium leading-tight">
          {mode === 'parent' 
            ? "Rigorous analytical training designed to build lifelong critical thinking skills." 
            : "Epic quest-based learning. Level up from Pawn to Grandmaster in record time."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {COURSES.map((course) => (
          <div key={course.id} className="group cursor-pointer">
            <div className="relative rounded-[72px] overflow-hidden aspect-[4/5] bg-white shadow-sm transition-all duration-700 hover:shadow-2xl hover:translate-y-[-24px] border border-white">
              <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-transparent to-transparent opacity-60"></div>
              
              <div className="absolute top-12 left-12">
                <div className="bg-white/95 backdrop-blur-xl px-6 py-3 rounded-2xl font-black text-[10px] text-[#2D5A4C] uppercase tracking-[0.3em] shadow-2xl">
                  {course.level}
                </div>
              </div>

              <div className="absolute bottom-12 left-12 right-12 transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <button className="w-full bg-white text-[#1A1A1A] py-7 rounded-[32px] font-black text-[12px] uppercase tracking-[0.2em] shadow-2xl hover:bg-[#2D5A4C] hover:text-white transition-colors">
                  Join for $99.99
                </button>
              </div>
            </div>
            
            <div className="mt-12 px-8">
              <div className="flex items-center gap-4 text-[10px] font-black text-gray-400 mb-6 uppercase tracking-[0.3em]">
                <span>{course.duration}</span>
                <span className="w-2 h-2 bg-emerald-200 rounded-full"></span>
                <span>{course.instructor}</span>
              </div>
              <h3 className="text-4xl font-heading font-black text-[#1A1A1A] group-hover:text-[#2D5A4C] transition-colors leading-[0.85] tracking-tighter">
                {course.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseGrid;
