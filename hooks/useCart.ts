import { Product } from "@prisma/client";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface CartProps {
  items: Product[];
  addItem: (item: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartProps>(
    (set, get) => ({
      items: [],
      addItem: (item: Product) => {
        const items = get().items;
        const existItem = items.find((i) => i.id === item.id);

        if (existItem) {
          return;
        }
        set({ items: [...items, item] });
      },
      removeItem: (id: string) => {
        const items = get().items;
        set({ items: items.filter((i) => i.id !== id) });
      },
      removeAll: () => {
        set({ items: [] });
      },
    }),
    {
      name: "cart",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;