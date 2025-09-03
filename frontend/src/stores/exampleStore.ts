import { create } from 'zustand'

type Bear = number;
type ExampleStore = {
    bears: Bear;
    increasePopulation: () => void;
    removeAllBears: () => void;
    updateBears: (newBears: Bear) => void;
}

export const useExampleStore = create<ExampleStore>((set) => ({
  bears: 10,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
}))
