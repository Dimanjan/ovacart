import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Seo from '../components/Seo';
import { useAuth } from '../context/AuthContext';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = register(name, email, password);
    if (!result.ok) {
      setMessage(result.message ?? 'Registration failed');
      return;
    }
    navigate('/login', { replace: true });
  };

  return (
    <section className="grid min-h-[70vh] place-items-center">
      <Seo title="Register" description="Create your Ova Cart account to add products to cart." path="/register" />

      <div className="w-full max-w-lg rounded-3xl border border-emerald-100 bg-white p-7 shadow-card md:p-10">
        <h1 className="text-3xl font-black text-slate-900">Create Account</h1>
        <p className="mt-2 text-slate-600">Register before shopping and adding items to cart.</p>

        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Full Name
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              className="rounded-xl border border-emerald-200 px-4 py-3 outline-none ring-ova-green focus:ring"
            />
          </label>

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
              placeholder="Minimum 6 characters"
              className="rounded-xl border border-emerald-200 px-4 py-3 outline-none ring-ova-green focus:ring"
            />
          </label>

          {message ? <p className="text-sm font-semibold text-rose-600">{message}</p> : null}

          <button type="submit" className="w-full rounded-xl bg-ova-green px-4 py-3 text-base font-bold text-white transition hover:bg-ova-deep">
            Register
          </button>
        </form>

        <p className="mt-4 text-sm text-slate-600">
          Already have an account?{' '}
          <Link to="/login" className="font-semibold text-ova-green hover:text-ova-deep">Login</Link>
        </p>
      </div>
    </section>
  );
}
