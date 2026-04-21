import { create } from 'zustand';

interface State {
  scrollProgress: number;
  setScrollProgress: (progress: number) => void;
  isMenuOpen: boolean;
  toggleMenu: (open?: boolean) => void;
  currentSection: number;
  setCurrentSection: (section: number) => void;
  isAudioEnabled: boolean;
  toggleAudio: (enabled?: boolean) => void;
  masterVolume: number;
  setMasterVolume: (volume: number) => void;
}

export const useStore = create<State>((set) => ({
  scrollProgress: 0,
  setScrollProgress: (progress) => set({ scrollProgress: progress }),
  isMenuOpen: false,
  toggleMenu: (open) => set((state) => ({ isMenuOpen: open !== undefined ? open : !state.isMenuOpen })),
  currentSection: 0,
  setCurrentSection: (section) => set({ currentSection: section }),
  isAudioEnabled: false,
  toggleAudio: (enabled) => set((state) => ({ isAudioEnabled: enabled !== undefined ? enabled : !state.isAudioEnabled })),
  masterVolume: 0.5,
  setMasterVolume: (volume) => set({ masterVolume: volume }),
}));
