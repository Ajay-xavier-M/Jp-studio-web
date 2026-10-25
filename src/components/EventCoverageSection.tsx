import React, { useState } from 'react';
import { EVENT_SERVICES } from '../data/mockData';
import { ServiceItem } from '../types';
import { CheckCircle2, ChevronRight, Sparkles, Video, Mic, Calendar, Shield, Film, Users, Zap } from 'lucide-react';

interface EventCoverageSectionProps {
  onSelectEvent: (event: ServiceItem) => void;
  onBookService: (serviceName: string) => void;
}

export const EventCoverageSection: React.FC<EventCoverageSectionProps> = ({
  onSelectEvent,
  onBookService
}) => {
  const [selectedId, setSelectedId] = useState<string>(EVENT_SERVICES[0].id);

  const activeItem = EVENT_SERVICES.find((s) => s.id === selectedId) || EVENT_SERVICES[0];

  return (
    <section id="event-coverage" className="py-24 relative bg-[#090912] border-t border-white/5">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Turnkey On-Site Production</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 font-display">
            Total Event Audio & Video Coverage
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Engineered specifically for high-stakes school annual days, prestigious government protocol summits, and intricate dance & theatrical dramas.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {EVENT_SERVICES.map((service) => {
            const isActive = service.id === selectedId;
            return (
              <button
                key={service.id}
                onClick={() => setSelectedId(service.id)}
                className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all flex items-center space-x-2.5 ${
                  isActive
                    ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/25 scale-105'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
                }`}
              >
                <span>{service.title}</span>
                {service.badge && (
                  <span
                    className={`text-[10px] uppercase px-1.5 py-0.5 rounded font-extrabold ${
                      isActive ? 'bg-black/20 text-black' : 'bg-amber-500/20 text-amber-400'
                    }`}
                  >
                    {service.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Featured Service Spotlight Card */}
        <div className="glass-panel-glow rounded-3xl overflow-hidden border border-amber-500/30 mb-16 shadow-2xl transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Visual Media Half */}
            <div className="lg:col-span-6 relative min-h-[340px] sm:min-h-[420px] lg:min-h-[500px] overflow-hidden group">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090912] via-[#090912]/40 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#090912]/90 hidden lg:block"></div>

              {/* Top Floating Badge */}
              <div className="absolute top-6 left-6 flex items-center space-x-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-amber-300 border border-amber-400/30 shadow-lg">
                  {activeItem.badge || 'Professional Turnkey AV'}
                </span>
              </div>

              {/* Bottom Quick Spec Bar */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/80 backdrop-blur-md border border-white/10">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                  Production Equipment Ready
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeItem.specs.map((spec, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/10 text-slate-200 border border-white/10"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Content & Specs Half */}
            <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">
                  Comprehensive Event AV Architecture
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-display mb-3">
                  {activeItem.title}
                </h3>
                <p className="text-amber-200/90 text-sm sm:text-base font-medium mb-5">
                  {activeItem.subtitle}
                </p>
                <p className="text-slate-300 text-sm leading-relaxed mb-8">
                  {activeItem.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-3.5 mb-8">
                  {activeItem.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-200 font-medium leading-normal">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => onBookService(activeItem.title)}
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-amber-500/20 active:scale-95 transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve Date For {activeItem.title}</span>
                </button>

                <a
                  href={`https://wa.me/919876543210?text=Hello%20JP%20Studio,%20I%20am%20interested%20in%20total%20Audio%20and%20Video%20coverage%20for%20${encodeURIComponent(
                    activeItem.title
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-3.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 font-bold text-xs sm:text-sm tracking-wide transition-all"
                >
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Cards Grid - Quick Visual Feature Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EVENT_SERVICES.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className={`p-6 rounded-2xl glass-panel glass-panel-hover cursor-pointer border transition-all ${
                item.id === selectedId
                  ? 'border-amber-500/60 bg-amber-500/10'
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
                {item.id === 'school-annual-day' && <Users className="w-6 h-6" />}
                {item.id === 'govt-programmes' && <Shield className="w-6 h-6" />}
                {item.id === 'dance-drama' && <Film className="w-6 h-6" />}
                {item.id === 'concerts-festivals' && <Zap className="w-6 h-6" />}
              </div>

              <h4 className="font-display font-bold text-lg text-white mb-2">{item.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-3">
                {item.description}
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs font-semibold text-amber-400">
                <span>View Details & Specs</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

