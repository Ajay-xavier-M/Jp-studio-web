import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EventCoverageSection } from './components/EventCoverageSection';
import { StudioServicesSection } from './components/StudioServicesSection';
import { ShowreelSection } from './components/ShowreelSection';
import { ShowreelModal } from './components/ShowreelModal';
import { AudioPlayerSuite } from './components/AudioPlayerSuite';
import { GearArsenal } from './components/GearArsenal';
import { CostEstimator } from './components/CostEstimator';
import { WorkflowSection } from './components/WorkflowSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BookingModal } from './components/BookingModal';
import { Footer } from './components/Footer';
import { ShowreelItem, ServiceItem } from './types';
import { SHOWREELS } from './data/mockData';

export function App() {
  const [selectedShowreel, setSelectedShowreel] = useState<ShowreelItem | null>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState<boolean>(false);
  const [selectedBookingService, setSelectedBookingService] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceName?: string) => {
    setSelectedBookingService(serviceName);
    setBookingModalOpen(true);
  };

  const handleOpenCalculator = () => {
    const el = document.getElementById('packages');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreAudio = () => {
    const el = document.getElementById('audio-suite');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenShowreelHero = () => {
    setSelectedShowreel(SHOWREELS[0]);
  };

  return (
    <div className="min-h-screen bg-[#07070b] text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-black">
      {/* Sticky Glass Navbar */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenCalculator={handleOpenCalculator}
      />

      {/* Hero Section */}
      <main className="flex-1">
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onOpenCalculator={handleOpenCalculator}
          onOpenShowreel={handleOpenShowreelHero}
          onExploreAudio={handleExploreAudio}
        />

        {/* Total Event Coverage Section (School Annual Days, Govt Programmes, Dance Drama, Concerts) */}
        <EventCoverageSection
          onSelectEvent={(event: ServiceItem) => handleOpenBooking(event.title)}
          onBookService={(name: string) => handleOpenBooking(name)}
        />

        {/* Studio Services & Post-Production Suite */}
        <StudioServicesSection
          onBookService={(name: string) => handleOpenBooking(name)}
        />

        {/* Video Showreel & Portfolio Gallery */}
        <ShowreelSection
          onSelectShowreel={(reel: ShowreelItem) => setSelectedShowreel(reel)}
        />

        {/* Interactive Audio Player & Soundboard with Web Audio API Frequency Visualizer */}
        <AudioPlayerSuite
          onBookAudio={(trackTitle: string) => handleOpenBooking(`Audio Production: ${trackTitle}`)}
        />

        {/* Gear Arsenal & Hardware Inventory */}
        <GearArsenal />

        {/* Interactive Event AV Cost Estimator & Quote Generator */}
        <CostEstimator
          onOpenBookingWithDetails={(details) => handleOpenBooking(details)}
        />

        {/* 4-Step Production Blueprint */}
        <WorkflowSection
          onOpenBooking={() => handleOpenBooking('Event Production & Site Recce')}
        />

        {/* Client Testimonials */}
        <TestimonialsSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onOpenCalculator={handleOpenCalculator}
      />

      {/* Video Showreel Modal */}
      {selectedShowreel && (
        <ShowreelModal
          item={selectedShowreel}
          onClose={() => setSelectedShowreel(null)}
          onBookThisProduction={(title: string) => handleOpenBooking(title)}
        />
      )}

      {/* Booking & Consultation Reservation Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultService={selectedBookingService}
      />
    </div>
  );
}

export default App;

