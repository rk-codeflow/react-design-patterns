import { useEffect, useState } from "react";
import ProductListPresenter from "../presenter/ProductListPresenter";
import type { Product } from "../../types/product/product";
import type { CartItem } from "../../types/cart/cart";

const ProductContainer = () => {
  const url = "https://api.escuelajs.co/api/v1/products?offset=0&limit=10";

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [items, setItems] = useState<CartItem[]>([]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(false);

      const res = await fetch(url);

      if (!res.ok) {
        throw new Error("Error fetching data");
      }
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Error loading data", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddToCart = (product: Product) => {
    const exists = items.find((item) => item.id === product.id);

    if (exists) {
      const updated = items.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setItems(updated);
    } else {
      const updated = [...items, { ...product, quantity: 1 }];
      setItems(updated);
    }
  };

  const handleDecQty = (id: number) => {
    const updated = items
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);
    setItems(updated);
  };

  const handleIncQty = (id: number) => {
    const updated = items.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setItems(updated);
  };

  return (
    <ProductListPresenter
      products={products}
      items={items}
      loading={loading}
      error={error}
      onAddToCart={handleAddToCart}
      onDecItemCount={handleDecQty}
      onIncItemCount={handleIncQty}
    />
  );
};

export default ProductContainer;
