export interface ServiceItem {
  id: string;
  title: string;
  category: 'event' | 'studio' | 'broadcast';
  subtitle: string;
  description: string;
  highlights: string[];
  specs: string[];
  badge?: string;
  iconName: string;
  image: string;
}

export interface ShowreelItem {
  id: string;
  title: string;
  category: 'annual_day' | 'govt_event' | 'dance_drama' | 'studio_recording' | 'concert';
  categoryLabel: string;
  duration: string;
  client: string;
  venue: string;
  description: string;
  thumbnail: string;
  videoUrl: string; // real video stream or high-res preview
  tags: string[];
  gearUsed: string[];
}

export interface AudioTrack {
  id: string;
  title: string;
  category: string;
  artist: string;
  duration: string;
  bpm: number;
  description: string;
  synthPreset: 'cinematic' | 'live_acoustic' | 'drama_ambient' | 'anthem_brass';
}

export interface GearCategory {
  category: string;
  tagline: string;
  icon: string;
  items: {
    name: string;
    model: string;
    specs: string;
    count: string;
  }[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  eventType: string;
  quote: string;
  rating: number;
  avatar: string;
}

export interface EstimateOptions {
  eventType: string;
  guestCount: string;
  videoPackage: string;
  audioPackage: string;
  lightingPackage: string;
  addons: string[];
}
