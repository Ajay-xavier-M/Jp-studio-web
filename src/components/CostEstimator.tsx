import React, { useState } from 'react';
import { Sparkles, Calculator, Check, ArrowRight, MessageSquare, Copy, CheckCheck, Info } from 'lucide-react';

interface CostEstimatorProps {
  onOpenBookingWithDetails?: (details: string) => void;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({ onOpenBookingWithDetails }) => {
  const [eventType, setEventType] = useState('School Annual Day');
  const [crowdSize, setCrowdSize] = useState('500 - 1,500 (Auditorium)');
  const [videoPack, setVideoPack] = useState('3-Camera 4K Multicam + Live Switcher');
  const [audioPack, setAudioPack] = useState('Full Line-Array PA + Digital Stage Box');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    'Stage LED Screen Wall Feed',
    'Same-Day 60s Instagram/YouTube Highlight Reel'
  ]);
  const [copied, setCopied] = useState(false);

  // Pricing calculations
  const calculateEstimate = () => {
    let baseMin = 25000;
    let baseMax = 38000;

    // Event type weights
    if (eventType === 'Government & Civic Programme') {
      baseMin += 15000;
      baseMax += 25000;
    } else if (eventType === 'Dance & Theatrical Drama') {
      baseMin += 20000;
      baseMax += 32000;
    } else if (eventType === 'Grand Concert / Music Fest') {
      baseMin += 35000;
      baseMax += 55000;
    } else if (eventType === 'Studio Recording & Mastering') {
      return { min: 12000, max: 28000 };
    }

    // Crowd size
    if (crowdSize === '1,500 - 4,000 (Grand Hall / Ground)') {
      baseMin += 15000;
      baseMax += 22000;
    } else if (crowdSize === '4,000+ (Stadium / Arena)') {
      baseMin += 30000;
      baseMax += 45000;
    }

    // Video package
    if (videoPack === '5-Camera 4K + 24ft Crane Jib + Drone 4K') {
      baseMin += 25000;
      baseMax += 38000;
    } else if (videoPack === '3-Camera 4K Multicam + Live Switcher') {
      baseMin += 12000;
      baseMax += 18000;
    }

    // Audio package
    if (audioPack === 'Theatre Wireless Rig (16+ Body Headmics)') {
      baseMin += 18000;
      baseMax += 26000;
    } else if (audioPack === 'Full Line-Array PA + Digital Stage Box') {
      baseMin += 10000;
      baseMax += 15000;
    }

    // Addons
    selectedAddons.forEach((addon) => {
      if (addon.includes('LED')) {
        baseMin += 8000;
        baseMax += 12000;
      }
      if (addon.includes('Live Stream')) {
        baseMin += 6000;
        baseMax += 10000;
      }
      if (addon.includes('Highlight Reel')) {
        baseMin += 5000;
        baseMax += 8000;
      }
      if (addon.includes('Lighting')) {
        baseMin += 12000;
        baseMax += 20000;
      }
    });

    return { min: baseMin, max: baseMax };
  };

  const { min, max } = calculateEstimate();

  const toggleAddon = (name: string) => {
    setSelectedAddons((prev) =>
      prev.includes(name) ? prev.filter((a) => a !== name) : [...prev, name]
    );
  };

  const generateQuoteText = () => {
    return `*JP Studio Event Quotation Estimate*
Event Type: ${eventType}
Crowd & Venue: ${crowdSize}
Video Setup: ${videoPack}
Audio Setup: ${audioPack}
Add-ons: ${selectedAddons.length > 0 ? selectedAddons.join(', ') : 'None'}
Estimated Budget Range: ₹${min.toLocaleString()} - ₹${max.toLocaleString()}
Please confirm crew availability.`;
  };

  const handleCopyQuote = () => {
    navigator.clipboard.writeText(generateQuoteText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const openWhatsAppQuote = () => {
    const text = encodeURIComponent(
      `Hello JP Studio! I generated an estimate on your website:\n\n${generateQuoteText()}`
    );
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <section id="packages" className="py-24 bg-[#07070d] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive AV Budget Builder</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            Estimate Your Event AV Cost
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Configure your video cameras, sound engineering, stage mics, and lighting to see transparent pricing in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Options Configuration (7 cols) */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 space-y-7">
            {/* 1. Event Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
                1. Select Event Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'School Annual Day',
                  'Government & Civic Programme',
                  'Dance & Theatrical Drama',
                  'Grand Concert / Music Fest',
                  'Studio Recording & Mastering',
                ].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setEventType(type)}
                    className={`p-3 rounded-xl text-left text-xs font-bold transition-all border ${
                      eventType === type
                        ? 'bg-amber-500 text-black border-amber-500 shadow-md'
                        : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Venue & Crowd Size */}
            {eventType !== 'Studio Recording & Mastering' && (
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
                  2. Venue Scale & Audience Size
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    'Under 500 (Small Hall)',
                    '500 - 1,500 (Auditorium)',
                    '1,500 - 4,000 (Grand Hall / Ground)',
                    '4,000+ (Stadium / Arena)',
                  ].map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setCrowdSize(size)}
                      className={`p-3 rounded-xl text-left text-xs font-bold transition-all border ${
                        crowdSize === size
                          ? 'bg-amber-500 text-black border-amber-500'
                          : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* 3. Video Cameras */}
            {eventType !== 'Studio Recording & Mastering' && (
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
                  3. Multi-Camera Cinematography
                </label>
                <div className="space-y-2">
                  {[
                    '2-Camera 4K Stage Pack (Basic)',
                    '3-Camera 4K Multicam + Live Switcher',
                    '5-Camera 4K + 24ft Crane Jib + Drone 4K',
                  ].map((cam) => (
                    <button
                      key={cam}
                      type="button"
                      onClick={() => setVideoPack(cam)}
                      className={`w-full p-3 rounded-xl text-left text-xs font-bold transition-all border flex items-center justify-between ${
                        videoPack === cam
                          ? 'bg-amber-500/20 border-amber-500 text-white'
                          : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      <span>{cam}</span>
                      {videoPack === cam && <Check className="w-4 h-4 text-amber-400" />}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* 4. Audio Rig */}
            {eventType !== 'Studio Recording & Mastering' && (
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
                  4. Stage Audio & Microphones
                </label>
                <div className="space-y-2">
                  {[
                    'Standard Stage PA + Podium Mics',
                    'Full Line-Array PA + Digital Stage Box',
                    'Theatre Wireless Rig (16+ Body Headmics)',
                  ].map((aud) => (
                    <button
                      key={aud}
                      type="button"
                      onClick={() => setAudioPack(aud)}
                      className={`w-full p-3 rounded-xl text-left text-xs font-bold transition-all border flex items-center justify-between ${
                        audioPack === aud
                          ? 'bg-amber-500/20 border-amber-500 text-white'
                          : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      <span>{aud}</span>
                      {audioPack === aud && <Check className="w-4 h-4 text-amber-400" />}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* 5. Production Add-ons */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
                5. High-Impact Add-ons (Select all that apply)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Stage LED Screen Wall Feed',
                  '1080p YouTube/Zoom Bonded Live Stream',
                  'Same-Day 60s Instagram/YouTube Highlight Reel',
                  'Theatrical Moving Head Stage Lighting Rig',
                ].map((addon) => {
                  const isChecked = selectedAddons.includes(addon);
                  return (
                    <div
                      key={addon}
                      onClick={() => toggleAddon(addon)}
                      className={`p-3 rounded-xl cursor-pointer text-xs font-semibold border flex items-center space-x-2.5 transition-all ${
                        isChecked
                          ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                          : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 ${
                          isChecked ? 'bg-amber-500 border-amber-500 text-black' : 'border-white/30'
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span>{addon}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quotation Summary Card (5 cols) */}
          <div className="lg:col-span-5 sticky top-28 glass-panel-glow rounded-3xl p-6 sm:p-8 border border-amber-500/40 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                Instant Quotation Summary
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">
                Turnkey AV
              </span>
            </div>

            {/* Estimated Price Range */}
            <div className="mb-6 p-5 rounded-2xl bg-black/60 border border-white/10">
              <div className="text-xs text-slate-400 mb-1">Estimated Budget Range</div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-display">
                ₹{min.toLocaleString()} - ₹{max.toLocaleString()}
              </div>
              <div className="text-[11px] text-emerald-400 mt-1 flex items-center space-x-1">
                <Info className="w-3 h-3 flex-shrink-0" />
                <span>Includes Full On-Site Tech Crew & Sound Engineer</span>
              </div>
            </div>

            {/* Configuration Specs breakdown */}
            <div className="space-y-3 mb-6 text-xs text-slate-300">
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-slate-400">Event:</span>
                <span className="font-bold text-white text-right">{eventType}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-slate-400">Scale:</span>
                <span className="font-bold text-white text-right">{crowdSize}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-slate-400">Video:</span>
                <span className="font-bold text-white text-right truncate max-w-[200px]">
                  {videoPack}
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-slate-400">Audio:</span>
                <span className="font-bold text-white text-right truncate max-w-[200px]">
                  {audioPack}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block mb-1">Included Add-ons:</span>
                <div className="flex flex-wrap gap-1">
                  {selectedAddons.length > 0 ? (
                    selectedAddons.map((a, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-amber-300">
                        {a}
                      </span>
                    ))
                  ) : (
                    <span className="text-slate-500 italic">None selected</span>
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={openWhatsAppQuote}
                className="w-full flex items-center justify-center space-x-2 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/20 active:scale-95 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Confirm Quote On WhatsApp</span>
              </button>

              <button
                onClick={handleCopyQuote}
                className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 font-bold text-xs uppercase tracking-wider border border-white/10 transition-all"
              >
                {copied ? (
                  <>
                    <CheckCheck className="w-4 h-4 text-emerald-400" />
                    <span>Quote Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-amber-400" />
                    <span>Copy Quotation Specs</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

