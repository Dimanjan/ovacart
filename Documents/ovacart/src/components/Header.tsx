import { FormEvent, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="9" cy="20" r="1" />
      <circle cx="17" cy="20" r="1" />
      <path d="M3 4h2l2.5 11h10.5l2-8H6" />
    </svg>
  );
}

export default function Header() {
  const [search, setSearch] = useState('');
  const { isLoggedIn, user, logout } = useAuth();
  const { totalItems } = useCart();
  const navigate = useNavigate();

  const onSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = search.trim();
    navigate(query ? `/catalog?search=${encodeURIComponent(query)}` : '/catalog');
  };

  return (
    <header className="sticky top-0 z-30 border-b border-emerald-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img src="/ova-logo.png" alt="Ova Cart logo" className="h-9 w-auto" width={135} height={33} />
        </Link>

        <form onSubmit={onSearch} className="order-3 flex w-full overflow-hidden rounded-xl border border-emerald-200 bg-white shadow-sm md:order-none md:ml-2 md:w-[440px]">
          <label htmlFor="site-search" className="sr-only">Search products</label>
          <input
            id="site-search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="w-full px-4 py-2.5 text-sm text-slate-700 outline-none"
          />
          <button type="submit" className="bg-ova-green px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-ova-deep">
            Search
          </button>
        </form>

        <nav className="ml-auto flex items-center gap-4 text-sm font-semibold text-slate-600 md:text-base">
          <NavLink className="transition hover:text-ova-green [&.active]:text-ova-green" to="/">Home</NavLink>
          <NavLink className="transition hover:text-ova-green [&.active]:text-ova-green" to="/catalog">Catalog</NavLink>
          <NavLink className="transition hover:text-ova-green [&.active]:text-ova-green" to="/contact">Contact</NavLink>
          <NavLink className="relative flex items-center gap-1 rounded-lg px-2 py-1 transition hover:bg-emerald-50 hover:text-ova-green [&.active]:text-ova-green" to="/cart" aria-label="Cart">
            <CartIcon />
            <span>Cart</span>
            <span className="inline-flex min-w-5 items-center justify-center rounded-full bg-ova-yellow px-1.5 text-xs font-bold text-slate-900">{totalItems}</span>
          </NavLink>
          {isLoggedIn ? (
            <button type="button" onClick={logout} className="rounded-lg border border-emerald-200 px-3 py-1.5 text-sm text-ova-green transition hover:bg-emerald-50">
              Logout {user?.name}
            </button>
          ) : (
            <>
              <NavLink className="rounded-lg border border-emerald-200 px-3 py-1.5 transition hover:bg-emerald-50" to="/register">Register</NavLink>
              <NavLink className="rounded-lg bg-ova-green px-3 py-1.5 text-white transition hover:bg-ova-deep" to="/login">Login</NavLink>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
