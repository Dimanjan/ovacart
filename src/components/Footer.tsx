import { Link, NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="mt-16 bg-slate-950 text-slate-200">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 md:grid-cols-4">
        <section>
          <Link to="/" className="inline-flex items-center gap-3">
            <img src="/ova-logo.png" alt="Ova Cart logo" className="h-9 w-auto" width={135} height={33} loading="lazy" decoding="async" />
          </Link>
          <div className="mt-4 space-y-1 text-sm text-slate-400">
            <p>KL Tower, Chabahil</p>
            <p>Kathmandu, Nepal</p>
            <p>+977-9843101641</p>
            <p>ovacartofficial2014@gmail.com</p>
          </div>
        </section>

        <section>
          <h3 className="text-lg font-bold text-white">Policies</h3>
          <nav className="mt-4 grid gap-2 text-sm">
            <NavLink to="/privacy-policy" className="hover:text-ova-yellow">Privacy Policy</NavLink>
          </nav>
        </section>

        <section>
          <h3 className="text-lg font-bold text-white">Delivery Slot</h3>
          <div className="mt-4 grid gap-2 text-sm text-slate-300">
            <p>6am-10am</p>
            <p>4pm-7pm</p>
          </div>
        </section>

        <section>
          <h3 className="text-lg font-bold text-white">Payment Option</h3>
          <img
            src="/payment-options.svg"
            alt="Accepted payments: eSewa, Khalti, fonepay, VISA"
            className="mt-4 h-auto w-full rounded-xl bg-white p-2"
            loading="lazy"
            decoding="async"
            width={640}
            height={220}
          />
          <div className="mt-4 flex items-center gap-3">
            <a
              href="https://www.instagram.com/_ovacart"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition hover:border-ova-yellow hover:text-ova-yellow"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9z" />
                <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM17.8 6.7a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/ovacart"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition hover:border-ova-yellow hover:text-ova-yellow"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.6-1.6h1.7V4.8c-.8-.1-1.5-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4V11H8v3h2.6v8h2.9z" />
              </svg>
            </a>
            <a
              href="https://x.com/ovacart/"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter / X"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition hover:border-ova-yellow hover:text-ova-yellow"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M18.2 3h2.9l-6.3 7.2L22.2 21h-5.8l-4.6-6-5.2 6H3.7l6.8-7.8L2 3h5.9l4.2 5.5L18.2 3zm-1 16.2h1.6L7 4.7H5.3l11.9 14.5z" />
              </svg>
            </a>
          </div>
        </section>
      </div>
    </footer>
  );
}
