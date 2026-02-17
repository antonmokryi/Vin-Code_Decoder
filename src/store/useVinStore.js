import { create } from "zustand";

export const useVinStore = create(
    (set, get) => ({
        vinStore: {},
        addToVinStore: (data) => {
            set({ vinStore: data })
        }
    })
)
