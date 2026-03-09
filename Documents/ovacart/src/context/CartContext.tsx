import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import type { Product } from '../types';

type CartItem = Product & { quantity: number };

type CartContextValue = {
  items: CartItem[];
  totalItems: number;
  subtotal: number;
  addToCart: (product: Product) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = 'ova-cart-items';

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  const persist = (next: CartItem[]) => {
    setItems(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  };

  const addToCart = (product: Product) => {
    const existing = items.find((item) => item.id === product.id);
    if (existing) {
      persist(items.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)));
      return;
    }
    persist([...items, { ...product, quantity: 1 }]);
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      persist(items.filter((item) => item.id !== productId));
      return;
    }
    persist(items.map((item) => (item.id === productId ? { ...item, quantity } : item)));
  };

  const removeFromCart = (productId: string) => {
    persist(items.filter((item) => item.id !== productId));
  };

  const clearCart = () => persist([]);

  const value = useMemo(
    () => ({
      items,
      totalItems: items.reduce((sum, item) => sum + item.quantity, 0),
      subtotal: items.reduce((sum, item) => sum + item.price * item.quantity, 0),
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart
    }),
    [items]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
