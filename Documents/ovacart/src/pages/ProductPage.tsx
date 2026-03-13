import { Link, useNavigate, useParams } from 'react-router-dom';
import OptimizedImage from '../components/OptimizedImage';
import Seo from '../components/Seo';
import { useCart } from '../context/CartContext';
import useProducts from '../hooks/useProducts';

export default function ProductPage() {
  const { productId } = useParams();
  const { products, loading, error } = useProducts();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const product = products.find((item) => item.id === productId);

  if (loading) return <p className="text-slate-500">Loading product...</p>;
  if (error) return <p className="text-red-600">{error}</p>;
  if (!product) return <p className="text-slate-500">Product not found.</p>;

  const onAdd = () => {
    addToCart(product);
    navigate('/cart');
  };

  return (
    <>
      <Seo title={product.name} description={product.description} path={`/product/${product.id}`} />

      <section className="grid gap-8 rounded-3xl border border-emerald-100 bg-white p-5 shadow-card md:grid-cols-[1fr,1fr] md:p-8">
        <OptimizedImage src={product.image} alt={product.name} width={720} height={720} className="aspect-square rounded-2xl" eager />

        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">{product.category} / {product.subCategory}</p>
          <h1 className="text-3xl font-black text-slate-900">{product.name}</h1>
          <p className="text-3xl font-black text-ova-green">NPR {product.price.toLocaleString()}</p>
          <p className="leading-7 text-slate-600">{product.description}</p>

          <div className="flex flex-wrap gap-3 pt-3">
            <button type="button" onClick={onAdd} className="rounded-xl bg-ova-green px-5 py-3 text-sm font-bold text-white transition hover:bg-ova-deep">
              Add to Cart
            </button>
            <Link to="/catalog" className="rounded-xl border border-emerald-200 px-5 py-3 text-sm font-bold text-slate-700 transition hover:bg-emerald-50">
              Back to Catalog
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
