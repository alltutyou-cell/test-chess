
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const DATA = [
  { name: 'Mon', elo: 800 },
  { name: 'Tue', elo: 840 },
  { name: 'Wed', elo: 825 },
  { name: 'Thu', elo: 890 },
  { name: 'Fri', elo: 950 },
  { name: 'Sat', elo: 1020 },
  { name: 'Sun', elo: 1100 },
];

const StatsDashboard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-5xl font-heading font-black mb-16 text-[#1A1A1A]">PROGRESS HUD</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 bg-white rounded-[48px] p-10 shadow-sm border border-orange-100">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h3 className="text-2xl font-bold font-heading text-[#1A1A1A]">Learning Velocity</h3>
              <p className="text-gray-500 font-medium mt-1">Consistency score: 98%</p>
            </div>
            <div className="text-right">
              <div className="text-4xl font-black text-orange-500">+300</div>
              <div className="text-xs font-black text-gray-400 uppercase tracking-widest">ELO THIS WEEK</div>
            </div>
          </div>
          
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={DATA}>
                <defs>
                  <linearGradient id="colorElo" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FF8B66" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#FF8B66" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#F0F0F0" vertical={false} />
                <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #FFD2A8', borderRadius: '24px', padding: '15px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                  itemStyle={{ color: '#FF8B66', fontWeight: 'bold' }}
                />
                <Area type="monotone" dataKey="elo" stroke="#FF8B66" fillOpacity={1} fill="url(#colorElo)" strokeWidth={4} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <div className="bg-orange-500 rounded-[48px] p-10 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-20 transform translate-x-4 -translate-y-4">
              <span className="text-8xl">🔥</span>
            </div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-black opacity-80 mb-6">Current Streak</h4>
            <div className="flex items-end gap-3">
              <span className="text-7xl font-black font-heading leading-none">14</span>
              <span className="text-2xl font-bold mb-1 opacity-90">DAYS</span>
            </div>
            <p className="mt-8 text-sm font-bold opacity-80 leading-relaxed">Don't break the chain! 1 more day until next milestone.</p>
          </div>

          <div className="bg-white rounded-[48px] p-10 shadow-sm border border-orange-100 flex-grow">
            <h4 className="text-xs uppercase tracking-[0.2em] font-black text-gray-400 mb-8">Badges</h4>
            <div className="space-y-8">
              <BadgeItem icon="🏹" title="Tactical Hunter" color="bg-blue-100 text-blue-600" />
              <BadgeItem icon="⚡" title="Speed Demon" color="bg-yellow-100 text-yellow-600" />
              <BadgeItem icon="🛡️" title="King Guard" color="bg-purple-100 text-purple-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BadgeItem: React.FC<{ icon: string; title: string; color: string }> = ({ icon, title, color }) => (
  <div className="flex items-center gap-5">
    <div className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center text-2xl shadow-sm shrink-0`}>
      {icon}
    </div>
    <span className="font-black text-gray-800 tracking-tight">{title}</span>
  </div>
);

export default StatsDashboard;
