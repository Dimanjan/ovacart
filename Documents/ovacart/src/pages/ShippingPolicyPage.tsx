import Seo from '../components/Seo';

export default function ShippingPolicyPage() {
  return (
    <section className="mx-auto w-full max-w-4xl rounded-3xl border border-emerald-100 bg-white p-6 shadow-card md:p-10">
      <Seo title="Shipping Policy" description="Ova Cart shipping policy and delivery windows." path="/shipping-policy" />
      <h1 className="text-3xl font-black text-slate-900">Shipping Policy</h1>
      <p className="mt-4 text-slate-700">Delivery slots: 6am-10am and 4pm-7pm. Contact Ova Cart for location-wise delivery support.</p>
    </section>
  );
}
