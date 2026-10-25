import React, { useState } from 'react';
import { GEAR_ARSENAL } from '../data/mockData';
import { Camera, Mic, MonitorPlay, Radio, Cpu, Check, Shield } from 'lucide-react';

export const GearArsenal: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const getCategoryIcon = (icon: string) => {
    switch (icon) {
      case 'Camera':
        return <Camera className="w-5 h-5" />;
      case 'Mic':
        return <Mic className="w-5 h-5" />;
      case 'MonitorPlay':
        return <MonitorPlay className="w-5 h-5" />;
      case 'Radio':
      default:
        return <Radio className="w-5 h-5" />;
    }
  };

  const currentCategory = GEAR_ARSENAL[activeTab];

  return (
    <section id="gear-arsenal" className="py-24 bg-[#060609] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Industrial Grade Production Arsenal</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            The Technology Behind The Magic
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            We don't rent amateur equipment. JP Studio owns and maintains certified broadcast cinema rigs, redundant digital audio networks, and aerial cinematography systems.
          </p>
        </div>

        {/* Tab Pills */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {GEAR_ARSENAL.map((cat, idx) => {
            const isSelected = idx === activeTab;
            return (
              <button
                key={cat.category}
                onClick={() => setActiveTab(idx)}
                className={`p-4 rounded-2xl text-left transition-all border flex items-center space-x-3.5 ${
                  isSelected
                    ? 'bg-amber-500/15 border-amber-500 text-white shadow-lg'
                    : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <div
                  className={`p-2.5 rounded-xl ${
                    isSelected ? 'bg-amber-500 text-black' : 'bg-white/10 text-amber-400'
                  }`}
                >
                  {getCategoryIcon(cat.icon)}
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white">{cat.category}</div>
                  <div className="text-[11px] text-slate-400 font-medium line-clamp-1">
                    {cat.items.length} Production Rigs
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Category Details Showcase */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 mb-8 gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white font-display mb-1">
                {currentCategory.category}
              </h3>
              <p className="text-xs sm:text-sm text-amber-400/90 font-medium">
                {currentCategory.tagline}
              </p>
            </div>

            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span>Full Dual-Backup Redundancy On-Site</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentCategory.items.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-amber-500/30 transition-all flex flex-col justify-between"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-white mb-0.5">
                      {item.name}
                    </h4>
                    <div className="text-xs text-amber-400 font-semibold">{item.model}</div>
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 font-bold">
                    {item.count}
                  </span>
                </div>

                <div className="text-xs text-slate-300 leading-relaxed pt-2 border-t border-white/5">
                  {item.specs}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

