import { useState, type FormEvent } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Seo from '../components/Seo';
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const { login, isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const destination = (location.state as { from?: string } | null)?.from || '/catalog';

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = login(email, password);
    if (!result.ok) {
      setMessage(result.message ?? 'Login failed');
      return;
    }
    navigate(destination, { replace: true });
  };

  if (isLoggedIn) {
    return (
      <section className="grid min-h-[60vh] place-items-center">
        <Seo title="Login" description="Already logged in to Ova Cart." path="/login" />
        <div className="w-full max-w-md rounded-2xl border border-emerald-100 bg-white p-8 text-center shadow-card">
          <h1 className="text-2xl font-black">You are already logged in.</h1>
          <Link to="/catalog" className="mt-4 inline-flex rounded-xl bg-ova-green px-5 py-3 text-sm font-bold text-white hover:bg-ova-deep">
            Go to Catalog
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="grid min-h-[70vh] place-items-center">
      <Seo title="Login" description="Login is required before adding products to cart on Ova Cart." path="/login" />

      <div className="w-full max-w-lg rounded-3xl border border-emerald-100 bg-white p-7 shadow-card md:p-10">
        <h1 className="text-3xl font-black text-slate-900">Login</h1>
        <p className="mt-2 text-slate-600">Login is required before adding products to cart.</p>

        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="rounded-xl border border-emerald-200 px-4 py-3 outline-none ring-ova-green focus:ring"
            />
          </label>

          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="rounded-xl border border-emerald-200 px-4 py-3 outline-none ring-ova-green focus:ring"
            />
          </label>

          {message ? <p className="text-sm font-semibold text-rose-600">{message}</p> : null}

          <button type="submit" className="w-full rounded-xl bg-ova-green px-4 py-3 text-base font-bold text-white transition hover:bg-ova-deep">
            Login
          </button>
        </form>

        <p className="mt-4 text-sm text-slate-600">
          Don&apos;t have an account?{' '}
          <Link to="/register" className="font-semibold text-ova-green hover:text-ova-deep">Register</Link>
        </p>
      </div>
    </section>
  );
}
