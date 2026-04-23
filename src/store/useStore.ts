import { create } from 'zustand';

export interface MenuItem {
  id: string;
  title: string;
  category: 'seafood' | 'wagyu' | 'dessert';
  description: string;
  color: string;
}

export const MENU_ITEMS: MenuItem[] = [
  { 
    id: '1', 
    title: 'Glacial Scallop', 
    category: 'seafood', 
    description: 'Cold-pressed scallop with finger lime and electric blue reduction.',
    color: '#00ccff' 
  },
  { 
    id: '2', 
    title: 'Obsidian Wagyu', 
    category: 'wagyu', 
    description: 'A5 Miyazakigyu with black garlic soil and deep crimson jus.',
    color: '#ff1100' 
  },
  { 
    id: '3', 
    title: 'Ether Honey', 
    category: 'dessert', 
    description: 'Wildflower honey spheres with honeycomb structure and iridescent pearl.',
    color: '#ffffff' 
  },
];

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
  isBookingOpen: boolean;
  setIsBookingOpen: (open: boolean) => void;
  bookingData: {
    date: string;
    guests: number;
    name: string;
  };
  setBookingData: (data: Partial<State['bookingData']>) => void;
  activeDishIndex: number;
  setActiveDishIndex: (index: number) => void;
  isLiquifying: boolean;
  setIsLiquifying: (loading: boolean) => void;
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
  isBookingOpen: false,
  setIsBookingOpen: (open) => set({ isBookingOpen: open }),
  bookingData: {
    date: '',
    guests: 1,
    name: '',
  },
  setBookingData: (data) => set((state) => ({ bookingData: { ...state.bookingData, ...data } })),
  activeDishIndex: 0,
  setActiveDishIndex: (index) => set({ activeDishIndex: index }),
  isLiquifying: false,
  setIsLiquifying: (loading) => set({ isLiquifying: loading }),
}));
