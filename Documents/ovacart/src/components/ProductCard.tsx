import { Link, useNavigate } from 'react-router-dom';
import type { Product } from '../types';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import OptimizedImage from './OptimizedImage';

type Props = { product: Product };

export default function ProductCard({ product }: Props) {
  const { isLoggedIn } = useAuth();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const onAdd = () => {
    if (!isLoggedIn) {
      navigate('/login', { state: { from: `/product/${product.id}` } });
      return;
    }
    addToCart(product);
  };

  return (
    <article className="group overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-card transition hover:-translate-y-0.5 hover:shadow-xl">
      <Link to={`/product/${product.id}`}>
        <OptimizedImage
          src={product.image}
          alt={product.name}
          width={420}
          height={420}
          className="aspect-square"
        />
      </Link>
      <div className="space-y-2 p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700/70">{product.category} / {product.subCategory}</p>
        <Link to={`/product/${product.id}`} className="line-clamp-2 text-base font-bold text-slate-900 transition group-hover:text-ova-green">
          {product.name}
        </Link>
        <div className="flex items-center justify-between pt-2">
          <p className="text-lg font-extrabold text-ova-deep">NPR {product.price.toLocaleString()}</p>
          <button
            type="button"
            onClick={onAdd}
            className="rounded-lg bg-ova-green px-3 py-2 text-sm font-semibold text-white transition hover:bg-ova-deep"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}
