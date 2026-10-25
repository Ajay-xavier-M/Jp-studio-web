import { ServiceItem, ShowreelItem, AudioTrack, GearCategory, Testimonial } from '../types';

export const EVENT_SERVICES: ServiceItem[] = [
  {
    id: 'school-annual-day',
    title: 'School & College Annual Days',
    category: 'event',
    subtitle: 'High-Energy Multicam Capture & Crystal-Clear Sound for Thousands of Proud Parents',
    description: 'Transform your institution\'s grand annual celebration into a cinematic spectacle. We provide end-to-end multi-camera 4K live switching, high-gain PA systems that eliminate microphone squeal, live onstage LED wall feeds, and same-day viral highlight reels for students and alumni.',
    highlights: [
      'Multi-angle stage coverage (Jib crane sweep, podium close-ups, wide choreography)',
      'Acoustic balance tuned for student choirs, drama speech, and high-energy dance tracks',
      'Real-time broadcast to auditorium overflow screens & live YouTube/Zoom streaming for NRI parents',
      'Instant 4K recap reel delivered within 24 hours for school social media'
    ],
    specs: ['Up to 6 Cinema 4K Cameras', '24ft Telescopic Crane Jib', 'Feedback-Proof PA Line Array', 'Custom School Watermark & Graphics'],
    badge: 'Most Popular',
    iconName: 'GraduationCap',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'govt-programmes',
    title: 'Government & Civic Protocol Programmes',
    category: 'event',
    subtitle: 'Flawless Protocol Execution, Dignitary Speech Clarity & State Archival Broadcast',
    description: 'Trusted by government departments, municipal corporations, and civic authorities for state ceremonies, inaugural summits, and cultural galas. We follow strict protocol timings, redundant recording backups, VIP podium mic isolation, and clean television broadcast feeds.',
    highlights: [
      'Dual redundant recording streams for state historical archives & Doordarshan/Press feeds',
      'Ultra-crisp VIP podium gooseneck audio with dual capsule redundancy & noise suppression',
      'Multi-language simultaneous interpretation line-out support for state delegates',
      'Clean SDI feeds with official state emblems, lower-thirds, and anthem synchronization'
    ],
    specs: ['Redundant 4K Master Capture', 'Zero-Latency SDI Matrix', 'VIP Podium Acoustic Rig', 'Same-Day Press Video Handover'],
    badge: 'Protocol Certified',
    iconName: 'Building2',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'dance-drama',
    title: 'Theatrical Drama & Dance Recitals',
    category: 'event',
    subtitle: 'Dynamic Stage Lighting, Invisible Body Mics & Expressive Multi-Angle Cinematography',
    description: 'Stage plays and classical dance productions require surgical audio-visual sensitivity. We deploy invisible sweat-proof wireless body mics for actors, capture rapid footwork and subtle facial expressions, and sync dynamic moving-head lighting with musical cue sheets.',
    highlights: [
      'Discrete skin-tone wireless headworn mics for up to 16 live actors on stage',
      'High-dynamic-range cameras that excel in dramatic dark theatre lighting & strobe transitions',
      'Multitrack audio capture separating live background orchestra from actor dialogue',
      'Cinematic documentary cut capturing back-stage prep, director cues, and standing ovations'
    ],
    specs: ['16+ UHF Bodypack Channels', 'DMX Theatrical Lighting Control', 'Dual Prime-Lens Close-up Rigs', 'Multi-Track DAW Stem Master'],
    badge: 'Artistic Excellence',
    iconName: 'Drama',
    image: 'https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'concerts-festivals',
    title: 'Concerts, Music Fests & Award Galas',
    category: 'event',
    subtitle: 'Thunderous Line-Array Power, Dazzling Visuals & Stadium-Grade Multicam Production',
    description: 'From live band concerts and musical festivals to prestigious corporate award nights. We engineer wall-to-wall acoustic punch with zero distortion, accompanied by robotic pan-tilt cameras, drone arena sweeps, and live LED wall visualizer sync.',
    highlights: [
      'Stadium-scale line-array sound systems with tuned sub-bass arrays and digital stageboxes',
      'Blackmagic ATEM live switching with instant slow-motion replay and award graphics',
      'Heavy-lift drone coverage for outdoor festival crowds and fireworks finales',
      'Multitrack 32-channel audio mastering for live album releases on Spotify & Apple Music'
    ],
    specs: ['30kW Line Array Systems', 'Robotic PTZ + Roaming Steadicam', 'Dante Digital Audio Network', '1080p60 Multi-Platform Stream'],
    badge: 'Grand Scale',
    iconName: 'Flame',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80'
  }
];

export const STUDIO_SERVICES: ServiceItem[] = [
  {
    id: 'vocal-music-recording',
    title: 'Acoustic Studio Recording',
    category: 'studio',
    subtitle: 'Isolated Vocal Booths & Live Room for Instrumental Perfection',
    description: 'Floating-floor acoustic architecture offering -60dB ambient noise isolation. Equipped with industry-standard Neumann, Shure SM7B, and AKG microphones coupled with high-end discrete analog preamps.',
    highlights: ['Treated vocal booths with variable diffusion', 'High-end analog-to-digital converters', 'Custom headphone cue mixes for artists'],
    specs: ['Neumann U87 Ai', 'Universal Audio Apollo x8p', 'Avalon VT-737sp Preamp'],
    iconName: 'Mic2',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mixing-dolby-mastering',
    title: 'Dolby Atmos & Stereo Mastering',
    category: 'studio',
    subtitle: 'Commercial Loudness, Spatial Depth & Crystal Balance',
    description: 'Calibrated studio monitors tuned for flawless translation across smartphones, cinema sound systems, radio broadcast, and streaming services.',
    highlights: ['Precision EQ, multi-band dynamics & stereo widening', 'Loudness compliance for YouTube, OTT & Spotify (-14 LUFS)', 'Stem mastering & Dolby Atmos spatial mixes'],
    specs: ['Genelec 8351B Smart Active Monitors', 'Pro Tools Ultimate', 'FabFilter & Waves Suites'],
    iconName: 'Sliders',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dubbing-voiceover',
    title: 'Dubbing, ADR & Voiceover Suite',
    category: 'studio',
    subtitle: 'Multi-Language Dubbing for Documentaries, Ads & Cinema',
    description: 'Direct video sync ADR suite for film dialogue replacement, corporate narrations, school educational modules, and radio advertisements with professional voice talent bank.',
    highlights: ['Frame-accurate video playback sync during takes', 'Extensive multilingual voiceover artist roster', 'Noise removal and dialogue de-essing'],
    specs: ['Sennheiser MKH 416 Boom', 'Source-Connect Remote Direction', 'iZotope RX 10 Advanced'],
    iconName: 'Headphones',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'video-color-grading',
    title: '4K Color Grading & Post-Production',
    category: 'studio',
    subtitle: 'Cinematic Color Grading, VFX & Motion Graphics Suite',
    description: 'Transform raw footage into rich, filmic visual art. Featuring 10-bit color-calibrated OLED monitoring, DaVinci Resolve color suites, sound design foley, and motion titles.',
    highlights: ['ACES color-managed workflow with custom cinematic LUTs', 'Audio foley synchronization and sound effects design', 'Title animations, lower thirds, and intro teasers'],
    specs: ['DaVinci Resolve Studio', 'Sony Trimaster Color Monitor', 'Full Adobe Premiere & After Effects'],
    iconName: 'Film',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80'
  }
];

export const SHOWREELS: ShowreelItem[] = [
  {
    id: 'sr-1',
    title: 'Delhi Public Academy 25th Annual Day Celebration',
    category: 'annual_day',
    categoryLabel: 'School Annual Day',
    duration: '03:42',
    client: 'Delhi Public Academy',
    venue: 'Grand Indoor Auditorium, 3,500 Attendees',
    description: 'Full 5-camera 4K live switching, crane overhead shots of the mass drill, and multi-track audio recording of the 80-member student orchestra with zero feedback.',
    thumbnail: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    tags: ['5-Cam 4K', 'Crane Jib', 'Orchestra Audio', 'Live LED Wall'],
    gearUsed: ['Sony FX6 x 3', 'Sony FX3 x 2', 'Jimmy Jib 24ft', 'Behringer X32']
  },
  {
    id: 'sr-2',
    title: 'State Heritage & Cultural Gala - Government Summit',
    category: 'govt_event',
    categoryLabel: 'Government Programme',
    duration: '04:15',
    client: 'Department of Youth & Cultural Affairs',
    venue: 'State Convention Hall, 2,000 Delegates',
    description: 'Official VIP broadcast coverage, dual gooseneck speech isolation for ministerial addresses, and multicam recording of historical dance pageants.',
    thumbnail: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    tags: ['Protocol VIP Sound', 'Live Satellite Uplink', '4K Archival Master', 'State Protocol'],
    gearUsed: ['Blackmagic URSA 12K', 'ATEM 4K Switcher', 'Shure Axient Digital', 'JBL VRX']
  },
  {
    id: 'sr-3',
    title: '"Shakuntala" - Epic Theatrical Drama & Classical Ballet',
    category: 'dance_drama',
    categoryLabel: 'Dance & Theatrical Drama',
    duration: '05:10',
    client: 'Natya Kala Sangam Theatre Society',
    venue: 'National Performing Arts Theatre',
    description: '14-channel wireless miniature head-mic orchestration, synchronized moving-head spotlights, and high dynamic range camera capture preserving deep stage contrast.',
    thumbnail: 'https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    tags: ['14 Body Mics', 'Theatrical DMX Lights', 'Classical Dance', 'Stereo Foley'],
    gearUsed: ['Sennheiser EW-D x 14', 'Sony Cinema Line', 'Avolites Titan Console', 'DaVinci Resolve']
  },
  {
    id: 'sr-4',
    title: 'Euphoria Youth Music Festival & Grand Finale',
    category: 'concert',
    categoryLabel: 'Grand Concert',
    duration: '03:18',
    client: 'St. Xavier University',
    venue: 'Open-Air Stadium, 8,000+ Students',
    description: '30,000W Line-array acoustic coverage, heavy-lift drone aerial cinematography, and high-octane live stage visuals broadcasted across two 30x15ft LED side towers.',
    thumbnail: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    tags: ['30kW Line Array', 'Drone 4K', 'Dual LED Towers', 'Multitrack Master'],
    gearUsed: ['RCF HDL 30-A', 'Allen & Heath SQ6', 'DJI Inspire 3', 'Blackmagic ATEM']
  },
  {
    id: 'sr-5',
    title: 'Original Studio Soundtrack & Vocal Production Session',
    category: 'studio_recording',
    categoryLabel: 'Studio Production',
    duration: '02:50',
    client: 'Horizon Soundtracks & Film Score',
    venue: 'JP Studio - Suite A Live Room',
    description: 'Behind the scenes inside JP Studio: tracking live violins, acoustic rhythm, and lead vocal dubbing through our Neumann U87 and analog master chain.',
    thumbnail: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=80',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
    tags: ['Neumann U87', 'Analog Summing', 'Dolby Atmos', 'Vocal Mastering'],
    gearUsed: ['Neumann U87 Ai', 'Apollo x8p', 'Genelec 8351B', 'Pro Tools']
  }
];

export const AUDIO_TRACKS: AudioTrack[] = [
  {
    id: 'track-1',
    title: 'Cinematic Orchestral Overture & Live Brass',
    category: 'Grand Event Live Sound',
    artist: 'JP Studio Live Production Team',
    duration: '01:24',
    bpm: 120,
    description: 'Recorded live during State Cultural Summit opening ceremony. Pristine acoustic clarity and punchy sub frequencies.',
    synthPreset: 'cinematic'
  },
  {
    id: 'track-2',
    title: 'School Jubilee Anthem & 50-Voice Choir',
    category: 'School Anthem Production',
    artist: 'Composed & Mixed at JP Studio',
    duration: '01:45',
    bpm: 128,
    description: 'Studio recorded vocals paired with live festival brass, mastered to broadcast loudness.',
    synthPreset: 'anthem_brass'
  },
  {
    id: 'track-3',
    title: '"The Royal Court" - Drama Dialogue & Stage Foley',
    category: 'Dance Drama Foley',
    artist: 'JP Studio Theatre Sound Design',
    duration: '01:10',
    bpm: 95,
    description: 'Sample from 14-actor stage drama recording with spatial depth and subtle atmospheric foley.',
    synthPreset: 'drama_ambient'
  },
  {
    id: 'track-4',
    title: 'Commercial Brand Voiceover & Acoustic Bed',
    category: 'Voiceover & Dubbing',
    artist: 'Studio Vocal Suite A',
    duration: '00:58',
    bpm: 108,
    description: 'Rich proximity-effect vocal recording through Neumann U87 with transparent analog compression.',
    synthPreset: 'live_acoustic'
  }
];

export const GEAR_ARSENAL: GearCategory[] = [
  {
    category: 'Cinema & Broadcast Cameras',
    tagline: 'Broadcast-spec sensor fidelity with 4K 10-bit 4:2:2 recording and low-light performance',
    icon: 'Camera',
    items: [
      { name: 'Sony FX6 Cinema Line', model: 'Full-Frame 4K 120fps Cinema', specs: 'Base ISO 12,800, 15+ stops dynamic range, electronic ND', count: '4 Units' },
      { name: 'Sony FX3 Cinema Cameras', model: 'Dual Native ISO Rig', specs: 'Cage mounted, active cooling, XLR audio handle', count: '4 Units' },
      { name: 'Blackmagic URSA Mini Pro', model: '12K / 4K Broadcast Master', specs: 'Super 35 HDR sensor, Blackmagic RAW, 12G-SDI', count: '2 Units' },
      { name: 'Panasonic 4K PTZ Broadcast', model: 'AW-UE150 4K 60p PTZ', specs: '75.1° wide angle, 20x optical zoom, IP/NDI output', count: '3 Units' }
    ]
  },
  {
    category: 'Stage Sound & Wireless Microphones',
    tagline: 'Zero feedback, rock-solid RF reception, and pristine vocal intelligibility',
    icon: 'Mic',
    items: [
      { name: 'Shure Axient Digital Wireless', model: 'AD4Q Four-Channel Receiver', specs: 'Quadversity RF coverage, encryption, true diversity', count: '16 Channels' },
      { name: 'Sennheiser EW-D & G4 Headworn', model: 'Discrete Skin-Tone Microphones', specs: 'Sweat-resistant subminiature capsules for actors & dancers', count: '20 Channels' },
      { name: 'Allen & Heath SQ6 / Behringer X32', model: '48-Channel Digital Consoles', specs: '96kHz FPGA processing, Dante & MADI expansion', count: '3 Consoles' },
      { name: 'RCF & JBL Line Array Audio', model: 'Active High-Output System', specs: 'Dual 10" neodymium drivers, 30,000W RMS amplification', count: 'Full Arena Rig' }
    ]
  },
  {
    category: 'Live Video Switching & Broadcast Rigs',
    tagline: 'Zero-latency live multi-cam directing, instant replays, and multi-stream delivery',
    icon: 'MonitorPlay',
    items: [
      { name: 'Blackmagic ATEM Television Studio 4K', model: 'Pro 4K Switcher', specs: '8x 12G-SDI inputs, built-in multiviewer, talkback system', count: '2 Units' },
      { name: 'Hollyland Cosmo 4K Wireless Video', model: 'Zero-Delay SDI/HDMI Link', specs: '1,000ft transmission range without frame drop', count: '4 Systems' },
      { name: 'AJA Ki Pro Ultra 12G', model: 'Multi-Channel 4K ProRes Recorder', specs: 'Simultaneous 4-channel ISO recording on NVMe drives', count: '2 Units' },
      { name: 'LiveU Solo HDMI/SDI', model: 'Bonded Cellular Streaming', specs: 'Multi-SIM cellular aggregation for rock-solid 1080p stream', count: '2 Units' }
    ]
  },
  {
    category: 'Cranes, Jibs, Gimbals & Aerial Drones',
    tagline: 'Sweeping aerial views, dynamic auditorium movement, and fluid stage tracking',
    icon: 'Radio',
    items: [
      { name: 'Jimmy Jib Triangle Heavy Duty', model: '24ft Motorized Pan/Tilt Crane', specs: 'Smooth 360-degree Dutch roll head, heavy payload balance', count: '1 Unit' },
      { name: 'DJI Ronin 4D 6K Cinema Gimbal', model: '4-Axis Active Stabilization', specs: 'LiDAR range finder autofocus, wireless monitor transmission', count: '2 Units' },
      { name: 'DJI Mavic 3 Pro Cine Drone', model: 'Triple Camera System', specs: 'Hasselblad 4/3 CMOS, Apple ProRes 422 HQ, 43min flight', count: '2 Drones' },
      { name: 'Ready Rig GS Pro Stabilizer', model: 'Vest + Support Arms', specs: 'Eliminates camera shake for 8+ hours continuous shooting', count: '2 Rigs' }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Dr. Sunita Roy',
    role: 'Principal',
    organization: 'St. Mary\'s International School',
    eventType: 'Silver Jubilee Annual Day (3,200 Attendees)',
    quote: 'JP Studio handled our 25th Annual Day coverage with unmatched professionalism. For 4 hours with over 600 children performing on stage, there was not a single mic squeak or audio delay. The 5-camera video footage and the drone shots looked like a television awards show!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'test-2',
    name: 'Rajiv Malhotra',
    role: 'Executive Director',
    organization: 'State Directorate of Cultural Affairs',
    eventType: 'National Republic Cultural Summit',
    quote: 'State protocol events have zero tolerance for technical hiccups. JP Studio provided crisp audio for our Chief Guest speeches and flawlessly managed the live Doordarshan feed and multi-camera documentation of the traditional dance troupes.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'test-3',
    name: 'Maestro Arvind Swaminathan',
    role: 'Theatrical Director',
    organization: 'Ranga Shankara Drama Repertory',
    eventType: '3-Day Shakespearean & Folk Drama Festival',
    quote: 'Capturing 16 actors on stage who are constantly whispering, yelling, and moving requires master sound engineers. JP Studio tuned the wireless headmics so every dialogue was razor clear even to the back row. Their studio mix of our live score is pure gold.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'test-4',
    name: 'Ananya Deshmukh',
    role: 'Classical Dance Choreographer',
    organization: 'Nritya Tarang Dance Academy',
    eventType: 'Grand Arangetram & Dance Drama',
    quote: 'The lighting, the audio balance between the live mridangam and the dancer\'s ghungroos, and the slow-motion 4K closeups of eye mudras were breathtaking. JP Studio doesn\'t just record events—they elevate artistic presentation to cinema.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  }
];

export const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Acoustic & Site Reconnaissance',
    desc: 'Our senior sound engineer and camera director visit your school auditorium or event ground to measure reverberation time, map power loads, and design camera sightlines.',
    icon: 'MapPin'
  },
  {
    step: '02',
    title: 'Stage Rigging & Sound Check',
    desc: 'Complete setup 24 hours prior: Line array rigging, stage lighting focus, multi-channel RF frequency scanning to prevent wireless dropouts, and full dress rehearsal test.',
    icon: 'Wrench'
  },
  {
    step: '03',
    title: 'Zero-Latency Live Execution',
    desc: 'Live multi-cam switching with director intercom communication, live LED wall sync, redundant 4K master recordings, and real-time live streaming.',
    icon: 'Radio'
  },
  {
    step: '04',
    title: 'Studio Post-Production & Delivery',
    desc: 'Multitrack audio cleanup and mastering, DaVinci Resolve color grading, 3-minute cinematic Instagram/YouTube highlight reel + full uncompressed event master archival.',
    icon: 'Sparkles'
  }
];

export const PRICING_PACKAGES = [
  {
    id: 'pkg-standard',
    name: 'School / College Essential',
    idealFor: 'Annual Days, Sports Days, Convocation (Up to 800 Attendees)',
    price: '₹35,000 - ₹55,000',
    turnaround: 'Highlight Reel in 24 hrs',
    features: [
      '3-Camera 4K Setup (1 Fixed Stage Wide, 2 Roaming Close-ups)',
      'Digital Audio Console with Stage Mic Distribution',
      'Auditorium Line-Out Audio Sync (Zero Noise)',
      'Live Switcher Feed to Stage LED Screens',
      'Edited Full Event Video (Chapters for Each Class)',
      '3-Minute Fast Social Media Teaser Reel',
      'Dedicated Director & 4 Technicians'
    ],
    popular: false
  },
  {
    id: 'pkg-grand',
    name: 'Grand Event & Cultural Gala',
    idealFor: 'Mega Annual Days, Govt Summits, Dance Festivals (1,000 - 4,000+ Attendees)',
    price: '₹75,000 - ₹1,35,000',
    turnaround: 'Same-Day Highlights & 4K Master',
    features: [
      '5-Camera 4K Cinema Production (Including 24ft Jib Crane)',
      'Live Aerial Drone 4K Coverage for Outdoor Venues',
      'Full Digital Line-Array PA System + 8 Wireless Vocal Mics',
      'ATEM 4K Live Broadcast Switching with Custom Lower Thirds',
      'YouTube & Social Media 1080p Live Stream Bonded Rig',
      '4K Color Graded Master Video Archive on High-Speed SSD',
      'Same-Day 60-Second Viral Reel for Instagram/WhatsApp',
      'Full Crew: Director, 5 Cameramen, Sound Engineer, Crane Operator'
    ],
    popular: true
  },
  {
    id: 'pkg-theatre',
    name: 'Drama & Dance Theatrical Rig',
    idealFor: 'Theatre Plays, Classical Dance Recitals, Broadway Shows',
    price: '₹60,000 - ₹95,000',
    turnaround: 'Stem Mastered Audio + 4K Cut',
    features: [
      '12 to 16 Discrete Wireless Bodypack Headworn Mics',
      'Theatrical Moving Head Lighting Package + DMX Console',
      '4-Camera Low-Light High-Dynamic Cinema Setup',
      'Multitrack Audio Stem Recording (Speech separated from Music)',
      'Acoustic Balance & Foley Mastered in JP Studio Suite',
      'Director’s Cut Theatrical Film with Opening Credits',
      'Dedicated Theatre Sound Designer on Site'
    ],
    popular: false
  }
];

