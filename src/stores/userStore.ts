import { create } from "zustand";

interface userState {
  bears: number;
  increase: (by: number) => void;
}

const userStore = create<userState>()((set) => ({
  bears: 0,
  increase: (by) => set((state) => ({ bears: state.bears + by })),
}));
