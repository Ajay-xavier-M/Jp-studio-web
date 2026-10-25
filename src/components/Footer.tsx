import React from 'react';
import { Volume2, Phone, Mail, MapPin, Clock, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenCalculator: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenCalculator }) => {
  return (
    <footer className="bg-[#040407] border-t border-white/10 pt-20 pb-12 relative overflow-hidden text-slate-400">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-amber-500/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-red-500 flex items-center justify-center text-white shadow-lg shadow-amber-500/20">
                <Volume2 className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-2xl text-white tracking-wider">
                  JP <span className="text-amber-400">STUDIO</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                  Audio • Video • Grand Events
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Premier audiovisual production company specializing in comprehensive live multicam and acoustic coverage for School Annual Days, Government Cultural Programmes, Dance & Theatrical Dramas, and high-end studio mastering.
            </p>

            <div className="pt-2 flex items-center space-x-2 text-xs text-amber-400 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>500+ Grand Events Covered Across India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Event AV Solutions
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#event-coverage" className="hover:text-amber-400 transition-colors">
                  School Annual Days
                </a>
              </li>
              <li>
                <a href="#event-coverage" className="hover:text-amber-400 transition-colors">
                  Government & Civic Events
                </a>
              </li>
              <li>
                <a href="#event-coverage" className="hover:text-amber-400 transition-colors">
                  Dance & Theatrical Dramas
                </a>
              </li>
              <li>
                <a href="#event-coverage" className="hover:text-amber-400 transition-colors">
                  Concerts & Music Festivals
                </a>
              </li>
              <li>
                <a href="#gear-arsenal" className="hover:text-amber-400 transition-colors">
                  Jib Crane & Drone Rig
                </a>
              </li>
            </ul>
          </div>

          {/* Studio Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Studio & Mastering
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#studio-services" className="hover:text-amber-400 transition-colors">
                  Acoustic Vocal Recording
                </a>
              </li>
              <li>
                <a href="#studio-services" className="hover:text-amber-400 transition-colors">
                  Dolby Atmos & Stereo Mastering
                </a>
              </li>
              <li>
                <a href="#studio-services" className="hover:text-amber-400 transition-colors">
                  ADR & Multi-Language Dubbing
                </a>
              </li>
              <li>
                <a href="#audio-suite" className="hover:text-amber-400 transition-colors">
                  Interactive Soundboard
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-amber-400 transition-colors">
                  Budget Calculator
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Studio Contact
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start space-x-2.5">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">+91 98765 43210</div>
                  <div className="text-[11px] text-slate-500">Live Production Hotline</div>
                </div>
              </li>
              <li className="flex items-start space-x-2.5">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">bookings@jpstudio.pro</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">JP Studio Enclave, Creative Arts District</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <Clock className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">24/7 Event Technical Crew On Call</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} JP Studio Production House. All rights reserved.
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-slate-400">Total Audio & Video Mastery</span>
            <span>•</span>
            <span className="text-amber-400 font-semibold">Broadcast & Live Event Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

