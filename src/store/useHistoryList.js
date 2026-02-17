import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useHistoryStore = create(
  persist(
    (set, get) => ({
      history: [],
      validateError: "",
      addHistory: (vin) => {
        const vinCode = vin.trim();
        const errorSymbols = [" ", "\t", "\n", "\r", "-", "–", "—", "_", ".", ",", ":", ";", "/", "\\", "|", "(", ")", "[", "]", "{", "}", "<", ">", "\"", "'", "`", "!", "?", "@", "#", "$", "%", "^", "&", "*", "+", "=", "~", "I", "O", "Q"];

        if (vinCode.length === 0) {
          set({ validateError: "Поле не може бути пустим" });
          return;
        }
        if (vinCode.length > 17) {
          set({ validateError: "Поле перевищує 17 символів" });
          return;
        }
        if (vinCode.length < 17) {
          set({ validateError: "Поле має містити 17 символів" });
          return;
        }
        if (errorSymbols.some((item) => vinCode.includes(item))) {
          set({ validateError: "Наявні заборонені символи" });
          return;
        }

        set((state) => ({ history: [vinCode, ...state.history] }));
        return "";
      },
    }),
    {
      name: "history-store",
      partialize: (state) => ({ history: state.history }),
    }
  )
);
