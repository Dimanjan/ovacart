import { useEffect, useMemo, useState } from 'react';
import type { Product, ProductData } from '../types';

export default function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let mounted = true;

    fetch('/data/products.json')
      .then((res) => {
        if (!res.ok) throw new Error('Could not load products');
        return res.json() as Promise<ProductData>;
      })
      .then((data) => {
        if (mounted) setProducts(data.products || []);
      })
      .catch(() => {
        if (mounted) setError('Unable to load product data right now.');
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  const categories = useMemo(() => ['All', ...new Set(products.map((p) => p.category))], [products]);

  return { products, loading, error, categories };
}
