import React, { useState, useEffect } from 'react';
import { Play, Sparkles, Video, Mic, Award, ShieldCheck, ChevronRight, Volume2, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenCalculator: () => void;
  onOpenShowreel: () => void;
  onExploreAudio: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenBooking,
  onOpenCalculator,
  onOpenShowreel,
  onExploreAudio
}) => {
  const [activeWaveIndex, setActiveWaveIndex] = useState(0);

  // Subtle wave animation ticker
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveWaveIndex((prev) => (prev + 1) % 16);
    }, 120);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-[#07070c]">
      {/* Dynamic Ambient Background Elements */}
      <div className="absolute inset-0 bg-mesh-pattern opacity-40 pointer-events-none"></div>

      {/* Dramatic cinematic light cones */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-amber-600/20 via-red-600/15 to-purple-600/10 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-[450px] h-[450px] bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Top Live Production Pill */}
          <div className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-amber-500/30 backdrop-blur-md mb-6 shadow-lg shadow-amber-500/5 animate-pulse-glow">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
            </span>
            <span className="text-xs uppercase tracking-widest font-bold text-amber-300">
              High-Fidelity Audio • 4K/6K Multicam Video • Live Event Coverage
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
            Capturing Every Beat & Frame. <br />
            <span className="text-gold-gradient">Total Audio & Video Coverage.</span>
          </h1>

          {/* Targeted Subtitle highlighting the exact prompt requirements */}
          <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mb-8">
            Complete turnkey audiovisual solutions for <span className="text-amber-300 font-semibold">School & College Annual Days</span>, <span className="text-amber-300 font-semibold">Government Cultural Programmes</span>, <span className="text-amber-300 font-semibold">Dance Recitals & Stage Dramas</span>, and cutting-edge <span className="text-amber-300 font-semibold">Studio Music & Voiceover Production</span>.
          </p>

          {/* Soundwave Interactive Graphic Preview */}
          <div className="w-full max-w-md p-3.5 rounded-2xl glass-panel border border-white/10 mb-8 flex items-center justify-between shadow-2xl">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <Volume2 className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-white tracking-wide">JP Master Soundboard</div>
                <div className="text-[10px] text-emerald-400 font-mono">0.0% Harmonic Distortion • Line Array Tuned</div>
              </div>
            </div>

            {/* Visualizer bars */}
            <div className="flex items-end space-x-1 h-7 px-3">
              {[40, 75, 55, 90, 60, 100, 45, 80, 65, 95, 50, 85, 70, 40, 90, 60].map((height, i) => {
                const isCurrent = i === activeWaveIndex;
                return (
                  <div
                    key={i}
                    style={{ height: `${isCurrent ? Math.min(100, height + 20) : height}%` }}
                    className={`w-1 rounded-full transition-all duration-150 ${
                      isCurrent
                        ? 'bg-amber-400 shadow-sm shadow-amber-400'
                        : i % 2 === 0
                        ? 'bg-amber-500/80'
                        : 'bg-red-500/70'
                    }`}
                  />
                );
              })}
            </div>

            <button
              onClick={onExploreAudio}
              className="text-[11px] font-bold text-amber-400 hover:text-amber-300 underline underline-offset-2 flex items-center"
            >
              Test Sound
              <ChevronRight className="w-3 h-3 ml-0.5" />
            </button>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto mb-14">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold text-sm uppercase tracking-wider shadow-xl shadow-amber-500/25 active:scale-95 transition-all"
            >
              <span>Book Event AV Team</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenShowreel}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-6 py-3.5 rounded-xl bg-white/[0.07] hover:bg-white/[0.12] border border-white/15 text-white font-bold text-sm tracking-wide transition-all group"
            >
              <div className="w-6 h-6 rounded-full bg-amber-500/20 group-hover:bg-amber-500 text-amber-400 group-hover:text-black flex items-center justify-center transition-colors">
                <Play className="w-3 h-3 fill-current ml-0.5" />
              </div>
              <span>Watch Grand Showreel</span>
            </button>

            <button
              onClick={onOpenCalculator}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-purple-950/40 hover:bg-purple-900/50 border border-purple-500/30 text-purple-200 font-bold text-sm tracking-wide transition-all"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>Instant Cost Estimator</span>
            </button>
          </div>

          {/* Trust Metric Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full pt-8 border-t border-white/10">
            <div className="p-3.5 rounded-xl glass-panel text-left flex items-start space-x-3">
              <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="font-extrabold text-xl sm:text-2xl text-white font-display">500+</div>
                <div className="text-xs text-slate-400 font-medium">Grand Events Covered</div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl glass-panel text-left flex items-start space-x-3">
              <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                <Video className="w-5 h-5" />
              </div>
              <div>
                <div className="font-extrabold text-xl sm:text-2xl text-white font-display">4K & 6K</div>
                <div className="text-xs text-slate-400 font-medium">Cinema Multicam & Jib</div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl glass-panel text-left flex items-start space-x-3">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="font-extrabold text-xl sm:text-2xl text-white font-display">0% Squeal</div>
                <div className="text-xs text-slate-400 font-medium">Feedback-Proof Sound</div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl glass-panel text-left flex items-start space-x-3">
              <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                <Mic className="w-5 h-5" />
              </div>
              <div>
                <div className="font-extrabold text-xl sm:text-2xl text-white font-display">24-Hour</div>
                <div className="text-xs text-slate-400 font-medium">Viral Highlight Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

