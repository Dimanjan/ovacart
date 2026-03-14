import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import OptimizedImage from '../components/OptimizedImage';
import { useCart } from '../context/CartContext';

export default function CartPage() {
  const { items, subtotal, totalItems, updateQuantity, removeFromCart, clearCart } = useCart();

  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');

  const orderItemLines = useMemo(
    () => items.map((item) => `${item.name} x${item.quantity} = NPR ${(item.price * item.quantity).toLocaleString()}`),
    [items]
  );

  const placeOrder = async () => {
    if (!customerName.trim() || !phoneNumber.trim() || !address.trim()) {
      setStatusMsg('Please fill Customer Name, Phone Number, and Delivery Address.');
      return;
    }

    if (!items.length) {
      setStatusMsg('Your cart is empty. Add items before placing order.');
      return;
    }

    setIsSubmitting(true);
    setStatusMsg('Placing order...');

    try {
      const embedDescription = [
        '**Customer Name**',
        customerName,
        '**Phone Number**',
        phoneNumber,
        '**Email**',
        email.trim() || 'N/A',
        '**Address**',
        address,
        '**Total Items**',
        String(totalItems),
        '**Subtotal**',
        `NPR ${subtotal.toLocaleString()}`,
        '**Order Items**',
        orderItemLines.join('\n') || 'N/A',
        '**Notes**',
        notes.trim() || 'N/A'
      ].join('\n');

      // Webhook integration removed for now.
      const payload = {
        title: 'New Order',
        description: embedDescription,
        createdAt: new Date().toISOString()
      };
      console.log('Order payload (webhook disabled):', payload);

      clearCart();
      setCustomerName('');
      setPhoneNumber('');
      setEmail('');
      setAddress('');
      setNotes('');
      setStatusMsg('Order placed successfully.');
    } catch (error) {
      setStatusMsg('Order send failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="space-y-4">
      <Seo title="Cart" description="Review your cart and place your order." path="/cart" />

      <div className="flex items-center justify-between">
        <h1 className="text-5xl font-serif text-[#5e3a1b]">Your Cart</h1>
        <Link
          to="/catalog"
          className="rounded-xl border border-[#d8c2a6] bg-white px-6 py-3 text-sm font-semibold text-[#6b4726] transition hover:bg-[#f8f2eb]"
        >
          Continue Shopping
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-[1.35fr,1fr]">
        <section className="min-h-[560px] rounded-2xl border border-[#e2d5c4] bg-white p-5">
          {!items.length ? (
            <p className="text-2xl text-[#8b7a67]">Your cart is currently empty.</p>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <article key={item.id} className="grid gap-4 rounded-xl border border-[#eadfce] p-4 md:grid-cols-[110px,1fr,180px] md:items-center">
                  <OptimizedImage src={item.image} alt={item.name} width={110} height={110} className="aspect-square rounded-lg" />

                  <div>
                    <h2 className="text-xl font-semibold text-[#5e3a1b]">{item.name}</h2>
                    <p className="text-sm text-[#8a7a67]">{item.category} / {item.subCategory}</p>
                    <p className="mt-2 text-xl font-bold text-[#5e3a1b]">NPR {(item.price * item.quantity).toLocaleString()}</p>
                  </div>

                  <div className="space-y-2 md:text-right">
                    <div className="grid grid-cols-3 gap-2 md:ml-auto md:w-[160px]">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="rounded-lg border border-[#d8c2a6] bg-white py-2 text-lg font-bold text-[#6b4726]"
                      >
                        -
                      </button>
                      <div className="grid place-items-center rounded-lg bg-[#f5ece2] font-bold text-[#5e3a1b]">{item.quantity}</div>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="rounded-lg bg-[#c79358] py-2 text-lg font-bold text-white"
                      >
                        +
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                      className="text-sm font-semibold text-[#a23f2d] hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        <aside className="rounded-2xl border border-[#e2d5c4] bg-white p-6">
          <h2 className="text-4xl font-serif text-[#5e3a1b]">Checkout Details</h2>
          <p className="mt-2 text-lg text-[#7d6851]">Total ({totalItems} items): <span className="font-bold text-[#5e3a1b]">NPR {subtotal.toLocaleString()}</span></p>

          <div className="mt-4 space-y-3">
            <input
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="Customer Name *"
              className="w-full rounded-xl border border-[#dcc8b0] bg-[#f8f3ed] px-4 py-3 text-[#5e3a1b] outline-none"
            />
            <input
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Phone Number *"
              className="w-full rounded-xl border border-[#dcc8b0] bg-[#f8f3ed] px-4 py-3 text-[#5e3a1b] outline-none"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email (optional)"
              className="w-full rounded-xl border border-[#dcc8b0] bg-[#f8f3ed] px-4 py-3 text-[#5e3a1b] outline-none"
            />
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Delivery Address *"
              rows={3}
              className="w-full rounded-xl border border-[#dcc8b0] bg-[#f8f3ed] px-4 py-3 text-[#5e3a1b] outline-none"
            />
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Notes (optional)"
              rows={3}
              className="w-full rounded-xl border border-[#dcc8b0] bg-[#f8f3ed] px-4 py-3 text-[#5e3a1b] outline-none"
            />

            <button
              type="button"
              onClick={placeOrder}
              disabled={isSubmitting}
              className="mt-2 w-full rounded-xl bg-[#c79358] px-4 py-3 text-lg font-bold text-white transition hover:bg-[#b38045] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? 'Placing Order...' : 'Place Order'}
            </button>

            {statusMsg ? <p className="text-sm font-semibold text-[#6b4726]">{statusMsg}</p> : null}
          </div>
        </aside>
      </div>
    </section>
  );
}
