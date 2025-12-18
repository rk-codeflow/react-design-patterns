import type { CartItem } from "./cart";

export interface CartProps {
  items: CartItem[];
  onDecItemCount: (id: number) => void;
  onIncItemCount: (id: number) => void;
}
