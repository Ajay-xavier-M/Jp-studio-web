import React from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { Star, Quote, Award } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#050508] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Client Praise & Reputation</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            Trusted By Leading Institutions & Artists
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Hear why schools, government directorates, and drama troupes rely on JP Studio for zero-glitch audio and cinematic visuals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="glass-panel rounded-3xl p-8 border border-white/10 hover:border-amber-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <Quote className="w-8 h-8 text-amber-500/20" />
                </div>

                <div className="inline-block px-2.5 py-1 rounded text-[11px] font-semibold bg-white/5 text-amber-300 border border-white/10 mb-4">
                  {t.eventType}
                </div>

                <p className="text-slate-200 text-sm sm:text-base leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center space-x-4 pt-5 border-t border-white/10">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-amber-500/40"
                />
                <div>
                  <div className="font-bold text-white text-sm">{t.name}</div>
                  <div className="text-xs text-slate-400">
                    {t.role}, <span className="text-amber-400">{t.organization}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

