import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import OptimizedImage from '../components/OptimizedImage';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

export default function CartPage() {
  const { isLoggedIn } = useAuth();
  const { items, subtotal, updateQuantity, removeFromCart, clearCart } = useCart();

  if (!isLoggedIn) {
    return (
      <section className="space-y-4 rounded-2xl border border-emerald-100 bg-white p-6 shadow-card">
        <Seo title="Cart" description="Login required to manage your Ova Cart cart." path="/cart" />
        <h1 className="text-3xl font-black text-slate-900">Your Cart</h1>
        <p className="text-slate-600">You need to login before managing your cart.</p>
        <Link to="/login" className="inline-flex rounded-xl bg-ova-green px-5 py-3 text-sm font-bold text-white transition hover:bg-ova-deep">
          Go to Login
        </Link>
      </section>
    );
  }

  if (!items.length) {
    return (
      <section className="space-y-4 rounded-2xl border border-emerald-100 bg-white p-6 shadow-card">
        <Seo title="Cart" description="Your cart is currently empty." path="/cart" />
        <h1 className="text-3xl font-black text-slate-900">Your Cart</h1>
        <p className="text-slate-600">Your cart is empty.</p>
        <Link to="/catalog" className="inline-flex rounded-xl bg-ova-green px-5 py-3 text-sm font-bold text-white transition hover:bg-ova-deep">
          Continue Shopping
        </Link>
      </section>
    );
  }

  return (
    <section className="space-y-5">
      <Seo title="Cart" description="Review products in your Ova Cart cart before checkout." path="/cart" />

      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-black text-slate-900">Your Cart</h1>
        <button type="button" onClick={clearCart} className="rounded-lg border border-rose-200 px-3 py-1.5 text-sm font-semibold text-rose-600 hover:bg-rose-50">
          Clear cart
        </button>
      </div>

      <div className="space-y-3">
        {items.map((item) => (
          <article key={item.id} className="grid gap-4 rounded-2xl border border-emerald-100 bg-white p-4 shadow-card md:grid-cols-[120px,1fr,170px] md:items-center">
            <OptimizedImage src={item.image} alt={item.name} width={120} height={120} className="aspect-square rounded-xl" />

            <div>
              <h2 className="text-lg font-bold text-slate-900">{item.name}</h2>
              <p className="text-sm text-slate-500">{item.category} / {item.subCategory}</p>
              <p className="mt-1 text-base font-bold text-ova-green">NPR {(item.price * item.quantity).toLocaleString()}</p>
            </div>

            <div className="grid gap-2 md:justify-items-end">
              <label className="grid gap-1 text-sm font-semibold text-slate-700">
                Qty
                <input
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, Number(e.target.value || 1))}
                  className="w-24 rounded-lg border border-emerald-200 px-2 py-1.5 outline-none ring-ova-green focus:ring"
                />
              </label>
              <button type="button" onClick={() => removeFromCart(item.id)} className="text-sm font-semibold text-rose-600 hover:text-rose-700">
                Remove
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="ml-auto w-full max-w-xs rounded-2xl border border-emerald-100 bg-white p-5 shadow-card">
        <p className="text-sm text-slate-500">Subtotal</p>
        <p className="mt-1 text-3xl font-black text-ova-green">NPR {subtotal.toLocaleString()}</p>
      </div>
    </section>
  );
}
