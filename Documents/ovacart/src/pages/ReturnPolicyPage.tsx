import Seo from '../components/Seo';

export default function ReturnPolicyPage() {
  return (
    <section className="mx-auto w-full max-w-4xl rounded-3xl border border-emerald-100 bg-white p-6 shadow-card md:p-10">
      <Seo title="Return Policy" description="Ova Cart return policy details." path="/return-policy" />
      <h1 className="text-3xl font-black text-slate-900">Return Policy</h1>
      <p className="mt-4 text-slate-700">For returns and issue resolution, please contact Ova Cart support through phone or Facebook.</p>
    </section>
  );
}
