import type { CartItem } from "../cart/cart";
import type { Product } from "../product/product";

export interface ProductPresenterProps {
  products: Product[];
  items: CartItem[];
  loading: boolean;
  error: boolean;
  quantity?: number;
  onAddToCart?: (product: Product) => void;
  onDecItemCount: (id: number) => void;
  onIncItemCount: (id: number) => void;
}
