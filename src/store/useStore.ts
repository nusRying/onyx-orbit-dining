import { create } from 'zustand';

interface State {
  scrollProgress: number;
  setScrollProgress: (progress: number) => void;
  isMenuOpen: boolean;
  toggleMenu: (open?: boolean) => void;
  currentSection: number;
  setCurrentSection: (section: number) => void;
}

export const useStore = create<State>((set) => ({
  scrollProgress: 0,
  setScrollProgress: (progress) => set({ scrollProgress: progress }),
  isMenuOpen: false,
  toggleMenu: (open) => set((state) => ({ isMenuOpen: open !== undefined ? open : !state.isMenuOpen })),
  currentSection: 0,
  setCurrentSection: (section) => set({ currentSection: section }),
}));
