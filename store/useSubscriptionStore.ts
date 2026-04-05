import { create } from "zustand";

interface SubscriptionFormState {
  isSuccess: boolean;
  globalError: string | null;
  setSuccess: (status: boolean) => void;
  setError: (error: string | null) => void;
}

export const useSubscriptionStore = create<SubscriptionFormState>((set) => ({
  isSuccess: false,
  globalError: null,
  setSuccess: (status) => set({ isSuccess: status }),
  setError: (error) => set({ globalError: error }),
}));
