import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

export default function NotFoundPage() {
  return (
    <section className="grid min-h-[60vh] place-items-center">
      <Seo title="Page Not Found" description="The page you requested does not exist." />
      <div className="w-full max-w-lg rounded-2xl border border-emerald-100 bg-white p-8 text-center shadow-card">
        <h1 className="text-3xl font-black">Page not found</h1>
        <p className="mt-2 text-slate-600">The page you are looking for does not exist.</p>
        <Link to="/" className="mt-5 inline-flex rounded-xl bg-ova-green px-5 py-3 text-sm font-bold text-white hover:bg-ova-deep">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
