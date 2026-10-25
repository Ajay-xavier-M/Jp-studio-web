import React, { useState, useEffect, useRef } from 'react';
import { AUDIO_TRACKS } from '../data/mockData';
import { AudioTrack } from '../types';
import { studioAudio } from '../utils/audioSynthesizer';
import { Play, Pause, Volume2, VolumeX, Radio, Sparkles, Disc, Music, Sliders, CheckCircle2 } from 'lucide-react';

interface AudioPlayerSuiteProps {
  onBookAudio: (trackTitle: string) => void;
}

export const AudioPlayerSuite: React.FC<AudioPlayerSuiteProps> = ({ onBookAudio }) => {
  const [currentTrack, setCurrentTrack] = useState<AudioTrack>(AUDIO_TRACKS[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.8);
  const [visualMode, setVisualMode] = useState<'frequency' | 'wave'>('frequency');

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  const handlePlayToggle = () => {
    if (isPlaying) {
      studioAudio.stop();
      setIsPlaying(false);
    } else {
      studioAudio.playPreset(currentTrack.synthPreset);
      setIsPlaying(true);
    }
  };

  const handleSelectTrack = (track: AudioTrack) => {
    setCurrentTrack(track);
    if (isPlaying) {
      studioAudio.playPreset(track.synthPreset);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    studioAudio.setVolume(val);
  };

  // Canvas visualizer loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const analyser = studioAudio.getAnalyser();
    const bufferLength = analyser ? analyser.frequencyBinCount : 128;
    const dataArray = new Uint8Array(bufferLength);

    const render = () => {
      animationFrameRef.current = requestAnimationFrame(render);

      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);

      // Background gradient on canvas
      const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
      bgGrad.addColorStop(0, '#0a0a14');
      bgGrad.addColorStop(1, '#050508');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      if (analyser && isPlaying) {
        if (visualMode === 'frequency') {
          analyser.getByteFrequencyData(dataArray);

          const barWidth = (width / bufferLength) * 2.4;
          let x = 0;

          for (let i = 0; i < bufferLength; i++) {
            const barHeight = (dataArray[i] / 255) * height * 0.9;

            const grad = ctx.createLinearGradient(0, height - barHeight, 0, height);
            grad.addColorStop(0, '#f59e0b');
            grad.addColorStop(0.5, '#ef4444');
            grad.addColorStop(1, '#8b5cf6');

            ctx.fillStyle = grad;
            ctx.fillRect(x, height - barHeight, barWidth - 1, barHeight);

            // subtle top cap
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(x, height - barHeight - 2, barWidth - 1, 2);

            x += barWidth + 1;
            if (x > width) break;
          }
        } else {
          // Waveform oscilloscope
          analyser.getByteTimeDomainData(dataArray);

          ctx.lineWidth = 2.5;
          ctx.strokeStyle = '#f59e0b';
          ctx.beginPath();

          const sliceWidth = width / bufferLength;
          let x = 0;

          for (let i = 0; i < bufferLength; i++) {
            const v = dataArray[i] / 128.0;
            const y = (v * height) / 2;

            if (i === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }

            x += sliceWidth;
          }

          ctx.lineTo(width, height / 2);
          ctx.stroke();
        }
      } else {
        // Idle ambient gentle wave
        const time = Date.now() * 0.003;
        ctx.strokeStyle = 'rgba(245, 158, 11, 0.25)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();

        for (let x = 0; x < width; x += 3) {
          const y = height / 2 + Math.sin(x * 0.03 + time) * 12;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        // Idle text
        ctx.fillStyle = 'rgba(148, 163, 184, 0.6)';
        ctx.font = '12px "JetBrains Mono", monospace';
        ctx.textAlign = 'center';
        ctx.fillText('CLICK PLAY TO HEAR JP STUDIO ACOUSTIC MASTERING', width / 2, height / 2 + 35);
      }
    };

    render();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPlaying, visualMode]);

  return (
    <section id="audio-suite" className="py-24 bg-[#050509] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Radio className="w-3.5 h-3.5" />
            <span>Interactive Soundboard</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            Listen to JP Studio Audio Fidelity
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Experience real acoustic balance, vocal presence, and stage dynamic range directly through your headphones or speakers.
          </p>
        </div>

        {/* Master Studio Audio Console */}
        <div className="glass-panel-glow rounded-3xl border border-amber-500/30 overflow-hidden shadow-2xl p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visualizer & Deck Console (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              {/* Top status bar */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <span className={`w-3 h-3 rounded-full ${isPlaying ? 'bg-emerald-500 animate-ping' : 'bg-slate-600'}`}></span>
                    <span className="text-xs font-mono font-bold tracking-wider uppercase text-slate-300">
                      {isPlaying ? 'ACTIVE AUDIO STREAM • 96kHz 24-BIT' : 'DAW IDLE • READY'}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setVisualMode('frequency')}
                    className={`text-[11px] font-mono px-2.5 py-1 rounded transition-colors ${
                      visualMode === 'frequency'
                        ? 'bg-amber-500 text-black font-bold'
                        : 'bg-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    Spectrum
                  </button>
                  <button
                    onClick={() => setVisualMode('wave')}
                    className={`text-[11px] font-mono px-2.5 py-1 rounded transition-colors ${
                      visualMode === 'wave'
                        ? 'bg-amber-500 text-black font-bold'
                        : 'bg-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    Oscilloscope
                  </button>
                </div>
              </div>

              {/* Dynamic Canvas Visualizer */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/60 shadow-inner">
                <canvas
                  ref={canvasRef}
                  width={640}
                  height={220}
                  className="w-full h-44 sm:h-52 object-cover block"
                />

                {/* Overlaid track title */}
                <div className="absolute top-3 left-4 flex items-center space-x-2 pointer-events-none">
                  <Disc className={`w-4 h-4 text-amber-400 ${isPlaying ? 'animate-spin' : ''}`} />
                  <span className="text-xs font-bold text-white tracking-wide drop-shadow">
                    {currentTrack.title}
                  </span>
                </div>

                {/* Audio Spec Badge */}
                <div className="absolute bottom-3 right-4 px-2 py-0.5 rounded text-[10px] font-mono bg-black/80 text-amber-400 border border-white/10 pointer-events-none">
                  BPM: {currentTrack.bpm} • MASTERED
                </div>
              </div>

              {/* Player Controls Bar */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={handlePlayToggle}
                    className="w-12 h-12 rounded-xl bg-amber-500 hover:bg-amber-400 text-black flex items-center justify-center shadow-lg shadow-amber-500/30 active:scale-95 transition-all"
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5 fill-current" />
                    ) : (
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    )}
                  </button>

                  <div>
                    <div className="text-xs font-bold text-white">{currentTrack.artist}</div>
                    <div className="text-[11px] text-amber-400 font-medium">
                      {currentTrack.category}
                    </div>
                  </div>
                </div>

                {/* Volume slider */}
                <div className="flex items-center space-x-3 w-full sm:w-auto">
                  <button
                    onClick={() => {
                      const newVol = volume > 0 ? 0 : 0.8;
                      setVolume(newVol);
                      studioAudio.setVolume(newVol);
                    }}
                    className="text-slate-400 hover:text-white"
                  >
                    {volume === 0 ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="w-24 sm:w-28 accent-amber-500 cursor-pointer h-1.5 bg-white/20 rounded-lg"
                  />
                  <span className="text-[11px] font-mono text-slate-400 w-8">
                    {Math.round(volume * 100)}%
                  </span>
                </div>
              </div>
            </div>

            {/* Track Selector List (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                Select Audio Demo Track:
              </div>

              {AUDIO_TRACKS.map((track) => {
                const isSelected = track.id === currentTrack.id;
                return (
                  <div
                    key={track.id}
                    onClick={() => handleSelectTrack(track)}
                    className={`p-4 rounded-xl cursor-pointer transition-all border flex items-center justify-between ${
                      isSelected
                        ? 'bg-amber-500/15 border-amber-500 text-white shadow-md'
                        : 'bg-white/5 border-white/10 hover:bg-white/10 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center space-x-3 min-w-0">
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          isSelected ? 'bg-amber-500 text-black font-bold' : 'bg-white/10 text-slate-400'
                        }`}
                      >
                        {isSelected && isPlaying ? (
                          <span className="flex space-x-0.5 items-end h-4">
                            <span className="w-0.5 h-2 bg-black animate-pulse"></span>
                            <span className="w-0.5 h-4 bg-black animate-pulse delay-75"></span>
                            <span className="w-0.5 h-3 bg-black animate-pulse delay-150"></span>
                          </span>
                        ) : (
                          <Music className="w-4 h-4" />
                        )}
                      </div>

                      <div className="truncate">
                        <div className="text-xs sm:text-sm font-bold truncate text-white">
                          {track.title}
                        </div>
                        <div className="text-[11px] text-amber-400/90 truncate">
                          {track.category} • {track.duration}
                        </div>
                      </div>
                    </div>

                    <div className="text-right flex-shrink-0 pl-2">
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-black/40 text-slate-300 border border-white/5">
                        {track.bpm} BPM
                      </span>
                    </div>
                  </div>
                );
              })}

              <div className="mt-3 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200/90 leading-relaxed">
                <span className="font-bold text-amber-400">Audio Guarantee:</span> All live events covered by JP Studio receive dedicated feedback suppression and live multi-track digital recording.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

