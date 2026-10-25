import React, { useRef, useState, useEffect } from 'react';
import { ShowreelItem } from '../types';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, Shield, Camera, MapPin, Tag } from 'lucide-react';

interface ShowreelModalProps {
  item: ShowreelItem | null;
  onClose: () => void;
  onBookThisProduction: (title: string) => void;
}

export const ShowreelModal: React.FC<ShowreelModalProps> = ({ item, onClose, onBookThisProduction }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (item && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {
        // Autoplay may require mute in some browsers
        if (videoRef.current) {
          videoRef.current.muted = true;
          setIsMuted(true);
          videoRef.current.play().catch(() => {});
        }
      });
      setIsPlaying(true);
    }
  }, [item]);

  if (!item) return null;

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const p = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(p || 0);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = pos * videoRef.current.duration;
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-[#0e0e18] rounded-3xl border border-amber-500/30 overflow-hidden shadow-2xl flex flex-col max-h-[95vh]">
        {/* Top Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#121220]">
          <div className="flex items-center space-x-3">
            <span className="px-2.5 py-1 rounded text-[11px] font-bold uppercase tracking-wider bg-amber-500/20 text-amber-400 border border-amber-500/30">
              {item.categoryLabel}
            </span>
            <h3 className="font-display font-bold text-base sm:text-lg text-white truncate max-w-md sm:max-w-xl">
              {item.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Container */}
        <div className="relative aspect-video bg-black flex items-center justify-center group overflow-hidden">
          <video
            ref={videoRef}
            src={item.videoUrl}
            poster={item.thumbnail}
            onTimeUpdate={handleTimeUpdate}
            onEnded={() => setIsPlaying(false)}
            playsInline
            loop
            className="w-full h-full object-contain cursor-pointer"
            onClick={togglePlay}
          />

          {/* Center Play Overlay if paused */}
          {!isPlaying && (
            <div
              onClick={togglePlay}
              className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer"
            >
              <div className="w-20 h-20 rounded-full bg-amber-500 text-black flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                <Play className="w-8 h-8 fill-current ml-1" />
              </div>
            </div>
          )}

          {/* Bottom Video Controls Bar */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col gap-2">
            {/* Scrubber */}
            <div
              onClick={handleSeek}
              className="w-full h-1.5 bg-white/20 hover:h-2.5 rounded-full cursor-pointer relative transition-all"
            >
              <div
                style={{ width: `${progress}%` }}
                className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full relative"
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow"></div>
              </div>
            </div>

            <div className="flex items-center justify-between text-white text-xs pt-1">
              <div className="flex items-center space-x-3">
                <button
                  onClick={togglePlay}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                </button>

                <button
                  onClick={toggleMute}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
                </button>

                <span className="font-mono text-slate-300 text-[11px]">{item.duration} HD 4K</span>
              </div>

              <div className="flex items-center space-x-2">
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/20 text-amber-300">
                  JP STUDIO 4K PRORES MASTER
                </span>
                <button
                  onClick={toggleFullscreen}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Video Production Details & Notes */}
        <div className="p-6 overflow-y-auto bg-[#0a0a12] space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
              <div className="flex items-center space-x-2 text-xs font-semibold text-amber-400 mb-1">
                <Shield className="w-4 h-4" />
                <span>Client & Institution</span>
              </div>
              <div className="text-sm font-bold text-white">{item.client}</div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
              <div className="flex items-center space-x-2 text-xs font-semibold text-cyan-400 mb-1">
                <MapPin className="w-4 h-4" />
                <span>Venue & Scale</span>
              </div>
              <div className="text-sm font-bold text-white">{item.venue}</div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
              <div className="flex items-center space-x-2 text-xs font-semibold text-purple-400 mb-1">
                <Camera className="w-4 h-4" />
                <span>Equipment Deployed</span>
              </div>
              <div className="text-xs font-mono text-slate-300 truncate">
                {item.gearUsed.join(', ')}
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Production Execution Summary
            </h4>
            <p className="text-sm text-slate-200 leading-relaxed">{item.description}</p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/10">
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-slate-300 border border-white/10"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <button
              onClick={() => {
                onClose();
                onBookThisProduction(item.title);
              }}
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 active:scale-95 transition-all"
            >
              Book Similar Coverage For Your Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

