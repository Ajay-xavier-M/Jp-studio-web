import React, { useState } from 'react';
import { SHOWREELS } from '../data/mockData';
import { ShowreelItem } from '../types';
import { Play, Sparkles, Filter, Clock, MapPin, Film } from 'lucide-react';

interface ShowreelSectionProps {
  onSelectShowreel: (item: ShowreelItem) => void;
}

export const ShowreelSection: React.FC<ShowreelSectionProps> = ({ onSelectShowreel }) => {
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Productions' },
    { id: 'annual_day', label: 'School Annual Days' },
    { id: 'govt_event', label: 'Government Programmes' },
    { id: 'dance_drama', label: 'Dance & Drama' },
    { id: 'concert', label: 'Concerts & Galas' },
    { id: 'studio_recording', label: 'Studio Sessions' },
  ];

  const filteredItems = filter === 'all'
    ? SHOWREELS
    : SHOWREELS.filter((item) => item.category === filter);

  return (
    <section id="showreel" className="py-24 bg-[#08080f] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Film className="w-3.5 h-3.5" />
            <span>Cinematic Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            Watch Our Live Production Showreels
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Experience our 4K multi-camera switching, crane sweeps, and live audio mastering across diverse venues.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setFilter(c.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all ${
                filter === c.id
                  ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20 font-bold'
                  : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/5'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Showreel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((reel) => (
            <div
              key={reel.id}
              onClick={() => onSelectShowreel(reel)}
              className="glass-panel glass-panel-hover rounded-2xl overflow-hidden border border-white/10 group cursor-pointer flex flex-col justify-between"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video overflow-hidden bg-black">
                <img
                  src={reel.thumbnail}
                  alt={reel.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-black/80 text-amber-400 flex items-center space-x-1 border border-white/10">
                  <Clock className="w-3 h-3" />
                  <span>{reel.duration}</span>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-slate-200 border border-white/10">
                  {reel.categoryLabel}
                </div>

                {/* Play Button Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                  <div className="w-14 h-14 rounded-full bg-amber-500 text-black flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-1.5 text-xs text-amber-400 font-semibold mb-1">
                    <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="truncate">{reel.client}</span>
                  </div>
                  <h3 className="font-display font-bold text-base text-white group-hover:text-amber-400 transition-colors line-clamp-2 mb-2">
                    {reel.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2 mb-4">
                    {reel.description}
                  </p>
                </div>

                {/* Tags and CTA */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {reel.tags.slice(0, 2).map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-slate-300 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs font-bold text-amber-400 flex items-center space-x-1">
                    <span>Watch 4K</span>
                    <Play className="w-3 h-3 fill-current ml-1" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

