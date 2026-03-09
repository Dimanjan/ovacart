import Seo from '../components/Seo';

export default function ContactPage() {
  return (
    <>
      <Seo title="Contact" description="Contact Ova Cart by phone or social channels." path="/contact" />

      <section className="grid gap-6 md:grid-cols-[1.1fr,0.9fr]">
        <article className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-card">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">Reach Ova Cart</p>
          <h1 className="mt-2 text-3xl font-black text-slate-900">Let’s help you with your order</h1>
          <p className="mt-4 leading-7 text-slate-600">
            For order support, delivery queries, or product availability, connect with us directly.
          </p>

          <div className="mt-8 grid gap-4 text-sm">
            <a href="tel:+9779843101641" className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4 transition hover:border-emerald-300 hover:bg-emerald-100">
              <p className="font-semibold text-slate-500">Phone</p>
              <p className="mt-1 text-lg font-black text-ova-green">+977 9843101641</p>
            </a>

            <a href="https://www.facebook.com/ovacart" target="_blank" rel="noreferrer" className="rounded-2xl border border-emerald-100 p-4 transition hover:border-emerald-300 hover:bg-emerald-50">
              <p className="font-semibold text-slate-500">Facebook</p>
              <p className="mt-1 font-bold text-slate-800">facebook.com/ovacart</p>
            </a>

            <a href="https://www.instagram.com/_ovacart" target="_blank" rel="noreferrer" className="rounded-2xl border border-emerald-100 p-4 transition hover:border-emerald-300 hover:bg-emerald-50">
              <p className="font-semibold text-slate-500">Instagram</p>
              <p className="mt-1 font-bold text-slate-800">instagram.com/_ovacart</p>
            </a>

            <a href="https://x.com/ovacart/" target="_blank" rel="noreferrer" className="rounded-2xl border border-emerald-100 p-4 transition hover:border-emerald-300 hover:bg-emerald-50">
              <p className="font-semibold text-slate-500">Twitter / X</p>
              <p className="mt-1 font-bold text-slate-800">x.com/ovacart</p>
            </a>
          </div>
        </article>

        <aside className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-white to-emerald-50 p-8 text-slate-800 shadow-card">
          <img src="/ova-logo.png" alt="Ova Cart logo" width={135} height={33} className="h-12 w-auto" loading="lazy" decoding="async" />
          <h2 className="mt-6 text-2xl font-black text-slate-900">Customer Support Hours</h2>
          <p className="mt-3 leading-7 text-slate-600">
            We respond quickly during business hours and prioritize delivery and cart related queries.
          </p>
          <div className="mt-8 rounded-2xl border border-emerald-200 bg-white p-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-ova-green">Quick Tip</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Include your product name and delivery area in the first message for faster support.
            </p>
          </div>
        </aside>
      </section>
    </>
  );
}
