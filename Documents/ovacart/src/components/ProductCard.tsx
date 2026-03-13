import { Link } from 'react-router-dom';
import type { Product } from '../types';
import { useCart } from '../context/CartContext';
import OptimizedImage from './OptimizedImage';

type Props = { product: Product };

export default function ProductCard({ product }: Props) {
  const { items, addToCart, updateQuantity } = useCart();
  const inCart = items.find((item) => item.id === product.id);
  const quantity = inCart?.quantity ?? 0;

  const onAdd = () => {
    addToCart(product);
  };

  return (
    <article className="group overflow-hidden rounded-2xl border border-[#e8dfd3] bg-white shadow-card transition hover:-translate-y-0.5 hover:shadow-xl">
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
        <p className="text-xs font-semibold uppercase tracking-wide text-[#a17b4e]">{product.category} / {product.subCategory}</p>
        <Link to={`/product/${product.id}`} className="line-clamp-2 text-base font-bold text-slate-900 transition group-hover:text-[#8a5b2d]">
          {product.name}
        </Link>
        <p className="text-2xl font-black text-[#5e3a1b]">NPR {product.price.toLocaleString()}</p>

        {quantity > 0 ? (
          <div className="space-y-2 rounded-xl border border-[#ead8c2] bg-[#f7f3ee] p-3">
            <p className="text-sm font-semibold text-[#7a5a38]">{quantity} item in cart</p>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => updateQuantity(product.id, quantity - 1)}
                className="rounded-lg bg-white py-2 text-lg font-bold text-[#7a5a38] border border-[#d8c2a6]"
              >
                -
              </button>
              <div className="grid place-items-center rounded-lg bg-[#f2e8dd] font-bold text-[#5e3a1b]">{quantity}</div>
              <button
                type="button"
                onClick={onAdd}
                className="rounded-lg bg-[#c79358] py-2 text-lg font-bold text-white"
              >
                +
              </button>
            </div>
            <Link to="/cart" className="block rounded-lg bg-[#6e4320] px-3 py-2.5 text-center text-sm font-semibold text-white">
              Proceed to Checkout
            </Link>
          </div>
        ) : (
          <button
            type="button"
            onClick={onAdd}
            className="w-full rounded-lg bg-[#c79358] px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-[#b38045]"
          >
            Add to Cart
          </button>
        )}
      </div>
    </article>
  );
}
