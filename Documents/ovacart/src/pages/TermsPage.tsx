import Seo from '../components/Seo';

export default function TermsPage() {
  return (
    <section className="mx-auto w-full max-w-4xl rounded-3xl border border-emerald-100 bg-white p-6 shadow-card md:p-10">
      <Seo title="Terms of Service" description="Ova Cart terms of service information." path="/terms-of-service" />
      <h1 className="text-3xl font-black text-slate-900">Terms of Service</h1>
      <p className="mt-4 text-slate-700">For terms and service assistance, please contact Ova Cart at +977 9843101641.</p>
    </section>
  );
}
