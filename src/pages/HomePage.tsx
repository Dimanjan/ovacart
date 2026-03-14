import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Seo from '../components/Seo';
import useProducts from '../hooks/useProducts';

export default function HomePage() {
  const { products, loading } = useProducts();
  const featured = products.slice(0, 8);
  const slides = [
    {
      title: 'LOCALLY SOURCED',
      description:
        'Marketplace where you’ll find only fresh organic vegetables produced in our own organic farms all over Nepal.',
      image: '/feature-slides/locally-sourced.svg'
    },
    {
      title: 'FAST DELIVERY',
      description:
        'With our fast delivery, get your order on your doorstep in no time. You are just a few taps away from organic local food.',
      image: '/feature-slides/fast-delivery.svg'
    },
    {
      title: 'EASY PAYMENT',
      description:
        'Pay with ease through esewa, khalti and fonepay. We also accept cash on delivery of your goods.',
      image: '/feature-slides/easy-payment.svg'
    }
  ];
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 3200);
    return () => window.clearInterval(timer);
  }, [slides.length]);

  return (
    <>
      <Seo
        title="Organic Grocery Marketplace"
        description="Shop Ova Cart categories including Chamal, Satu, Khadhyana, and Food Supplements with fast delivery and easy checkout."
        path="/"
      />

      <section className="space-y-10">
        <div className="relative overflow-hidden rounded-[2rem] bg-white p-8 shadow-card md:p-10">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-ova-yellow/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-16 h-80 w-80 rounded-full bg-ova-green/20 blur-3xl" />

          <div className="relative grid gap-8 md:grid-cols-[1.25fr,0.75fr] md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ova-green">Ova Cart Groceries</p>
              <h1 className="mt-3 max-w-2xl text-4xl font-black leading-tight text-slate-900 md:text-6xl">
                Clean groceries, curated quality, elegant shopping.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                Shop Ova Cart essentials with fast product discovery, rich item details, and a reliable login-protected cart flow built for daily convenience.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/catalog" className="rounded-xl bg-ova-green px-6 py-3 text-sm font-bold text-white transition hover:bg-ova-deep">
                  Browse Catalog
                </Link>
                <Link to="/contact" className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-800 transition hover:border-ova-green hover:text-ova-green">
                  Contact Us
                </Link>
              </div>
            </div>

            <aside className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="overflow-hidden rounded-xl bg-white">
                <div
                  className="flex transition-transform duration-700 ease-out"
                  style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                >
                  {slides.map((slide) => (
                    <article key={slide.title} className="w-full shrink-0 p-4">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="h-44 w-full rounded-lg object-cover"
                        loading="lazy"
                        decoding="async"
                        width={560}
                        height={220}
                      />
                      <h2 className="mt-4 text-lg font-black tracking-wide text-ova-green">{slide.title}</h2>
                      <p className="mt-2 text-sm leading-6 text-slate-700">{slide.description}</p>
                    </article>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-black text-slate-900">Featured Products</h2>
          <Link to="/catalog" className="text-sm font-semibold text-ova-green hover:text-ova-deep">View all</Link>
        </div>

        {loading ? <p className="text-slate-500">Loading products...</p> : null}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
