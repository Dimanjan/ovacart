import Seo from '../components/Seo';

export default function PrivacyPolicyPage() {
  return (
    <section className="mx-auto w-full max-w-4xl rounded-3xl border border-emerald-100 bg-white p-6 shadow-card md:p-10">
      <Seo
        title="Privacy Policy"
        description="Official Ova Cart privacy policy covering data collection, use, security, and customer rights."
        path="/privacy-policy"
      />

      <h1 className="text-3xl font-black text-slate-900">Privacy Policy</h1>
      <p className="mt-4 text-slate-700">
        Welcome to Ovacart! This Privacy Policy describes how we collect, use, and protect your information when you use our website. By using our website, you agree to the practices outlined in this policy.
      </p>

      <h2 className="mt-8 text-2xl font-black text-slate-900">1. Information We Collect</h2>
      <p className="mt-3 text-slate-700">When you use Ovacart, we may collect the following types of information:</p>
      <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-700">
        <li><strong>Personal Information:</strong> Name, email address, phone number, and shipping address when you register or place an order.</li>
        <li><strong>Payment Information:</strong> Payment details such as credit card information (handled securely by our payment processors).</li>
        <li><strong>Usage Data:</strong> Information about your interactions with our website, such as pages visited, time spent, and browser type.</li>
      </ul>

      <h2 className="mt-8 text-2xl font-black text-slate-900">2. How We Use Your Information</h2>
      <p className="mt-3 text-slate-700">We use your information to:</p>
      <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-700">
        <li>Process your orders and deliver products.</li>
        <li>Communicate with you about your orders, offers, or updates.</li>
        <li>Improve our website and user experience.</li>
        <li>Ensure the security and functionality of our services.</li>
      </ul>

      <h2 className="mt-8 text-2xl font-black text-slate-900">3. Sharing Your Information</h2>
      <p className="mt-3 text-slate-700">
        We do not sell your personal information to third parties. However, we may share your information with trusted partners to facilitate our services, including payment processors, shipping providers, and analytics services.
      </p>

      <h2 className="mt-8 text-2xl font-black text-slate-900">4. Data Security</h2>
      <p className="mt-3 text-slate-700">
        We implement appropriate technical and organizational measures to protect your data. However, no method of transmission over the internet is completely secure, so we cannot guarantee absolute security.
      </p>

      <h2 className="mt-8 text-2xl font-black text-slate-900">5. Your Rights</h2>
      <p className="mt-3 text-slate-700">You have the right to:</p>
      <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-700">
        <li>Access your personal information.</li>
        <li>Request corrections to your information.</li>
        <li>Request deletion of your data, subject to legal requirements.</li>
      </ul>
      <p className="mt-3 text-slate-700">To exercise these rights, contact us at <strong>support@ovacart.com</strong>.</p>

      <h2 className="mt-8 text-2xl font-black text-slate-900">6. Cookies</h2>
      <p className="mt-3 text-slate-700">
        Ovacart uses cookies to enhance your experience. Cookies are small files stored on your device that help us understand user behavior and improve our website.
      </p>

      <h2 className="mt-8 text-2xl font-black text-slate-900">7. Changes to This Policy</h2>
      <p className="mt-3 text-slate-700">
        We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
      </p>

      <h2 className="mt-8 text-2xl font-black text-slate-900">8. Contact Us</h2>
      <p className="mt-3 text-slate-700">
        If you have any questions about this Privacy Policy, please contact us at <strong>contact@ovacart.com.np</strong>.
      </p>
    </section>
  );
}
