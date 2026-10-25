import React, { useState, useEffect } from 'react';
import { X, Calendar, Phone, MessageSquare, Check, Sparkles, Building2, User, MapPin } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  defaultService
}) => {
  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [venue, setVenue] = useState('');
  const [eventType, setEventType] = useState('School & College Annual Day');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultService) {
      setEventType(defaultService);
    }
  }, [defaultService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent, viaWhatsApp = false) => {
    e.preventDefault();

    if (viaWhatsApp) {
      const message = `*New Event AV Booking Inquiry - JP Studio*
Name: ${name}
Organization/School: ${organization}
Phone: ${phone}
Email: ${email || 'N/A'}
Event Category: ${eventType}
Tentative Date: ${date || 'To be decided'}
Venue: ${venue || 'To be decided'}
Notes: ${notes || 'None'}`;

      window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank');
    }

    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-[#0f0f1a] rounded-3xl border border-amber-500/30 overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between bg-[#141424]">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white">
                Reserve Event Audio & Video Team
              </h3>
              <p className="text-xs text-slate-400">
                Guaranteed date block with senior sound engineer & camera director
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>

              <h4 className="font-display font-bold text-2xl text-white">
                Inquiry Received!
              </h4>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="text-amber-400 font-semibold">{name}</span>. Our senior technical director is reviewing your requirements for <span className="text-white font-semibold">{eventType}</span> and will call you on <span className="text-white font-semibold">{phone}</span> within 2 hours.
              </p>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-400 max-w-sm mx-auto">
                Need emergency support? Call our live production desk directly at <span className="text-amber-400 font-bold">+91 98765 43210</span>.
              </div>

              <button
                onClick={handleReset}
                className="mt-4 px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs uppercase tracking-wider"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={(e) => handleSubmit(e, false)} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Principal Sharma / Rajesh K."
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Institution / Organization *
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. St. Xavier School / Dept of Culture"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 00000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Tentative Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Event Category
                </label>
                <select
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-[#181828] border border-white/10 text-white text-xs focus:outline-none focus:border-amber-500"
                >
                  <option value="School & College Annual Day">School & College Annual Day</option>
                  <option value="Government & Civic Protocol Programme">Government & Civic Protocol Programme</option>
                  <option value="Dance Recital & Theatrical Drama">Dance Recital & Theatrical Drama</option>
                  <option value="Concert / Music Festival">Concert / Music Festival</option>
                  <option value="Studio Music & Vocal Recording">Studio Music & Vocal Recording</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Venue & City / Special Requirements
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                  <textarea
                    rows={2}
                    placeholder="e.g. School Open Auditorium, 2,000 parents expected, need 4 cameras + drone and line array sound."
                    value={venue}
                    onChange={(e) => setVenue(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-amber-500 resize-none"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={(e) => handleSubmit(e, true)}
                  className="flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/20 active:scale-95 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </button>

                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 active:scale-95 transition-all"
                >
                  <span>Submit Booking Request</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

