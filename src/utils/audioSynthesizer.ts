// Web Audio API generator for interactive studio audio demonstration
class StudioAudioSynthesizer {
  private ctx: AudioContext | null = null;
  private analyser: AnalyserNode | null = null;
  private isPlaying = false;
  private intervalId: number | null = null;
  private masterGain: GainNode | null = null;
  private currentPreset: string = 'cinematic';

  private init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.analyser = this.ctx.createAnalyser();
      this.analyser.fftSize = 256;
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.18, this.ctx.currentTime);
      this.masterGain.connect(this.analyser);
      this.analyser.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public getAnalyser(): AnalyserNode | null {
    this.init();
    return this.analyser;
  }

  public playPreset(preset: 'cinematic' | 'live_acoustic' | 'drama_ambient' | 'anthem_brass') {
    this.init();
    if (!this.ctx || !this.masterGain) return;
    this.stop();
    this.isPlaying = true;
    this.currentPreset = preset;

    let step = 0;
    const presetsNotes: Record<string, number[]> = {
      cinematic: [130.81, 164.81, 196.00, 246.94, 261.63, 329.63, 392.00, 493.88], // C minor / cinematic
      live_acoustic: [146.83, 185.00, 220.00, 293.66, 369.99, 440.00, 587.33], // D major acoustic
      drama_ambient: [110.00, 138.59, 164.81, 220.00, 277.18, 329.63, 440.00], // A minor mysterious
      anthem_brass: [130.81, 196.00, 261.63, 329.63, 392.00, 523.25, 659.25], // C major regal fanfare
    };

    const notes = presetsNotes[preset] || presetsNotes.cinematic;

    // Trigger rhythmic harmonic pattern
    const playNote = () => {
      if (!this.isPlaying || !this.ctx || !this.masterGain) return;

      const osc = this.ctx.createOscillator();
      const noteGain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      // Filter settings for warmth
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1600, this.ctx.currentTime);
      filter.Q.setValueAtTime(3, this.ctx.currentTime);

      const freq = notes[step % notes.length];
      step++;

      if (preset === 'cinematic') {
        osc.type = 'sawtooth';
        filter.frequency.setValueAtTime(900, this.ctx.currentTime);
      } else if (preset === 'anthem_brass') {
        osc.type = 'triangle';
        filter.frequency.setValueAtTime(2200, this.ctx.currentTime);
      } else if (preset === 'drama_ambient') {
        osc.type = 'sine';
        filter.frequency.setValueAtTime(1200, this.ctx.currentTime);
      } else {
        osc.type = 'triangle';
      }

      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      // Envelope
      const now = this.ctx.currentTime;
      noteGain.gain.setValueAtTime(0.001, now);
      noteGain.gain.exponentialRampToValueAtTime(0.3, now + 0.05);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.55);

      osc.connect(filter);
      filter.connect(noteGain);
      noteGain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 0.6);

      // Add deep bass drone periodically
      if (step % 4 === 0) {
        const bassOsc = this.ctx.createOscillator();
        const bassGain = this.ctx.createGain();
        bassOsc.type = 'sine';
        bassOsc.frequency.setValueAtTime(freq / 2, now);
        bassGain.gain.setValueAtTime(0.001, now);
        bassGain.gain.exponentialRampToValueAtTime(0.35, now + 0.08);
        bassGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.9);
        bassOsc.connect(bassGain);
        bassGain.connect(this.masterGain);
        bassOsc.start(now);
        bassOsc.stop(now + 0.95);
      }
    };

    playNote();
    this.intervalId = window.setInterval(playNote, 320);
  }

  public setVolume(val: number) {
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(Math.max(0, Math.min(1, val * 0.3)), this.ctx.currentTime);
    }
  }

  public stop() {
    this.isPlaying = false;
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }
}

export const studioAudio = new StudioAudioSynthesizer();

