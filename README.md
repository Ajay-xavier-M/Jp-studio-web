# JP Studio — Audio & Video Production House & Event Coverage

A premium, interactive web application and branding platform built for **JP Studio**, specializing in end-to-end studio audio/video recording and comprehensive live coverage for **School Annual Days, Government Cultural Programmes, Theatrical Drama & Dance Recitals, and Grand Events**.

---

## 🌟 Key Presentation & Branding Highlights

### 1. Cinematic Studio Branding & "ON AIR" Aesthetics
- **Color Palette**: Dark cinema backdrop (`#07070b`) accented with warm studio gold (`#f59e0b`), broadcast red (`#ef4444`), and electric cyan/purple neon highlights.
- **Micro-Interactions**: Live pulsing "ON AIR" indicator, dynamic soundwaves, glassmorphism cards with glow borders, and film grain / vignette textures.

### 2. Specialized Event Coverage Showcase (Prompt Core)
- **School & College Annual Days**: 4K/6K multi-camera switching, 24ft camera crane jib sweeps, feedback-proof choir and speech audio, live LED wall screen distribution, and 24-hour social media highlight reel delivery.
- **Government & Civic Protocol Programmes**: Protocol VIP podium speech isolation, Doordarshan & press live transmission feeds, redundant dual-master recording, and historical state archives.
- **Dance Recitals & Theatrical Dramas**: 16+ discrete UHF head-worn wireless body mics for actors, DMX theatrical stage lighting synchronization, multitrack audio stems separating stage dialogue from musical backing tracks.
- **Concerts, Festivals & Award Galas**: 30,000W line-array sound systems, heavy-lift drone aerial cinematography, ATEM live switching consoles.

### 3. Studio Audio & Post-Production Suite
- **Acoustic Vocal Booth**: -60dB isolation with Neumann U87, Apollo x8p, and high-end analog preamps.
- **Dolby Atmos & Stereo Mastering**: Loudness-compliant masters for YouTube, Spotify, and OTT streaming platforms.
- **Voiceover & Multi-Language ADR**: Video-synced dubbing for commercials, documentaries, and educational content.
- **4K Color Grading**: DaVinci Resolve color suite with HDR monitoring.

### 4. Interactive Live Demos & Tools
- **Interactive Audio Soundboard (Web Audio API)**: Clients can listen to studio acoustic balance directly in their browser. Features real-time harmonic synthesis and a reactive HTML5 `<canvas>` frequency spectrum and oscilloscope visualizer.
- **4K Video Showreel Gallery & Fullscreen Player**: Filterable showcase across all event types with embedded 4K video previews, camera gear lists, and production notes.
- **Interactive Event AV Cost Estimator**: Transparent budget builder where event planners configure camera count, sound engineering rigs, and add-ons (drone, live stream, LED screens) to generate instant estimates and export a formatted quote straight to WhatsApp.
- **Production Gear Arsenal**: Detailed inventory of broadcast cinema cameras, line-array audio, and wireless video links.
- **Date Reservation & Booking Modal**: Direct callback scheduling and 1-click WhatsApp booking integration.

---

## 🚀 How to Run Locally

### Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Structure
```
c:\Users\Ajay\Documents\JP Studio web\
├── index.html                  # HTML template with Google Fonts (Syne, Plus Jakarta Sans, JetBrains Mono)
├── package.json                # Project dependencies & scripts
├── tailwind.config.js          # Studio brand colors & animations
├── vite.config.ts              # Vite configuration
├── src/
│   ├── main.tsx                # React root mount
│   ├── App.tsx                 # Core app layout & state orchestration
│   ├── index.css               # Custom CSS, glassmorphism, and scrollbars
│   ├── types/
│   │   └── index.ts            # TypeScript data definitions
│   ├── utils/
│   │   └── audioSynthesizer.ts # Web Audio API harmonic sound generator & analyser
│   ├── data/
│   │   └── mockData.ts         # Rich mock data (events, showreels, gear, testimonials)
│   └── components/
│       ├── Navbar.tsx          # Sticky navigation with "ON AIR" indicator
│       ├── Hero.tsx            # Cinematic hero with live audio wave preview
│       ├── EventCoverageSection.tsx  # Annual days, govt programmes, dance & drama
│       ├── StudioServicesSection.tsx # Recording suite, Dolby mastering, dubbing
│       ├── ShowreelSection.tsx       # Filterable 4K video portfolio
│       ├── ShowreelModal.tsx         # Fullscreen video player with chapters & gear notes
│       ├── AudioPlayerSuite.tsx      # Interactive Web Audio synthesizer & canvas visualizer
│       ├── CostEstimator.tsx         # AV budget calculator with WhatsApp export
│       ├── GearArsenal.tsx           # Production equipment specifications
│       ├── WorkflowSection.tsx       # 4-Step production execution blueprint
│       ├── TestimonialsSection.tsx   # Verified client reviews
│       ├── BookingModal.tsx          # Date reservation modal with WhatsApp integration
│       └── Footer.tsx                # Studio contact details & hotline
```

