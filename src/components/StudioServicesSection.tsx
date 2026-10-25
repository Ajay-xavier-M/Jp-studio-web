import React from 'react';
import { STUDIO_SERVICES } from '../data/mockData';
import { Mic2, Sliders, Headphones, Film, ArrowRight, Check } from 'lucide-react';

interface StudioServicesSectionProps {
  onBookService: (serviceName: string) => void;
}

export const StudioServicesSection: React.FC<StudioServicesSectionProps> = ({ onBookService }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Mic2':
        return <Mic2 className="w-6 h-6 text-amber-400" />;
      case 'Sliders':
        return <Sliders className="w-6 h-6 text-cyan-400" />;
      case 'Headphones':
        return <Headphones className="w-6 h-6 text-purple-400" />;
      case 'Film':
      default:
        return <Film className="w-6 h-6 text-red-400" />;
    }
  };

  return (
    <section id="studio-services" className="py-24 bg-[#06060a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4">
              <span>Studio A & Post-Production Facility</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              Acoustic Studio & Mastering Suite
            </h2>
            <p className="mt-4 text-slate-400 text-base sm:text-lg">
              Beyond live events, JP Studio features an acoustically isolated recording suite for pristine vocal tracking, commercial dubbing, and broadcast-ready Dolby mastering.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex items-center space-x-3">
            <button
              onClick={() => onBookService('Studio Recording & Mastering')}
              className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider border border-white/10 transition-all"
            >
              <span>Book Studio Time</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {STUDIO_SERVICES.map((service) => (
            <div
              key={service.id}
              className="glass-panel rounded-3xl p-8 border border-white/10 hover:border-amber-500/30 transition-all flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle top glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-amber-500/5 to-transparent rounded-full blur-2xl group-hover:from-amber-500/15 transition-all"></div>

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10">
                    Acoustic Spec -60dB
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 font-display">{service.title}</h3>
                <p className="text-sm font-semibold text-amber-400/90 mb-3">{service.subtitle}</p>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">{service.description}</p>

                {/* Key features */}
                <div className="space-y-2.5 mb-6">
                  {service.highlights.map((h, i) => (
                    <div key={i} className="flex items-center space-x-2 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hardware / Gear Tag Bar */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {service.specs.map((spec, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onBookService(service.title)}
                  className="text-xs font-bold text-slate-300 hover:text-amber-400 transition-colors flex items-center space-x-1"
                >
                  <span>Inquire Session</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

