import React from 'react';
import { WORKFLOW_STEPS } from '../data/mockData';
import { MapPin, Wrench, Radio, Sparkles, ArrowRight } from 'lucide-react';

interface WorkflowSectionProps {
  onOpenBooking: () => void;
}

export const WorkflowSection: React.FC<WorkflowSectionProps> = ({ onOpenBooking }) => {
  const getStepIcon = (icon: string) => {
    switch (icon) {
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-amber-400" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-cyan-400" />;
      case 'Radio':
        return <Radio className="w-5 h-5 text-red-400" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section className="py-24 bg-[#080810] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4">
            <span>Execution Protocol</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            How We Cover Your Grand Event
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            From preliminary auditorium acoustic measurements to live director switching and studio-grade post-production delivery.
          </p>
        </div>

        {/* 4 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {WORKFLOW_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-amber-500/30 transition-all flex flex-col justify-between relative group"
            >
              {/* Step number watermark */}
              <div className="text-5xl font-black font-display text-white/5 absolute top-4 right-4 group-hover:text-amber-500/10 transition-colors pointer-events-none">
                {step.step}
              </div>

              <div>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  {getStepIcon(step.icon)}
                </div>

                <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-400 mb-1">
                  Phase {step.step}
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-3">{step.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{step.desc}</p>
              </div>

              <div className="pt-4 mt-6 border-t border-white/5 flex items-center text-[11px] font-semibold text-slate-400">
                <span>Standard Protocol Checklist</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 p-8 rounded-3xl glass-panel-glow border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl sm:text-2xl font-bold text-white font-display mb-1">
              Planning a School Annual Day or Cultural Programme?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Book a free site inspection & acoustic recce with our technical production team.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="w-full md:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 active:scale-95 transition-all flex-shrink-0"
          >
            <span>Schedule Free Site Recce</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

