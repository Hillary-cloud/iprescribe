import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useThemeStore = create(
  persist(
    (set) => ({
      mode: 'light',
      toggleTheme: () =>
        set((state) => ({
          mode: state.mode === 'light' ? 'dark' : 'light',
        })),
      setTheme: (mode) => set({ mode }),
    }),
    {
      name: 'theme-storage', // localStorage key
    }
  )
);

export default useThemeStore;