import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Seo from '../components/Seo';
import useProducts from '../hooks/useProducts';

export default function CatalogPage() {
  const { products, loading, error, categories } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();

  const initialSearch = searchParams.get('search') || '';
  const [search, setSearch] = useState(initialSearch);

  const selectedCategory = searchParams.get('category') || 'All';
  const selectedSubCategory = searchParams.get('subCategory') || 'All';

  const subCategories = useMemo(() => {
    const base = selectedCategory === 'All' ? products : products.filter((item) => item.category === selectedCategory);
    return ['All', ...new Set(base.map((item) => item.subCategory))];
  }, [products, selectedCategory]);

  const filtered = useMemo(
    () =>
      products.filter((item) => {
        const inCategory = selectedCategory === 'All' || item.category === selectedCategory;
        const inSubCategory = selectedSubCategory === 'All' || item.subCategory === selectedSubCategory;
        const inSearch = !search || `${item.name} ${item.description}`.toLowerCase().includes(search.toLowerCase());
        return inCategory && inSubCategory && inSearch;
      }),
    [products, search, selectedCategory, selectedSubCategory]
  );

  const setFilter = (key: 'category' | 'subCategory', value: string) => {
    const next = new URLSearchParams(searchParams);
    if (value === 'All') next.delete(key);
    else next.set(key, value);
    if (key === 'category') next.delete('subCategory');
    setSearchParams(next);
  };

  return (
    <>
      <Seo
        title="Catalog"
        description="Browse Ova Cart products by category and subcategory, with fast search and optimized image loading."
        path="/catalog"
      />

      <section className="space-y-6">
        <h1 className="text-3xl font-black text-slate-900">Catalog</h1>

        <div className="grid gap-4 rounded-2xl border border-emerald-100 bg-white p-4 shadow-card md:grid-cols-3">
          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Category
            <select
              className="rounded-xl border border-emerald-200 px-3 py-2 outline-none ring-ova-green focus:ring"
              value={selectedCategory}
              onChange={(e) => setFilter('category', e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </label>

          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Subcategory
            <select
              className="rounded-xl border border-emerald-200 px-3 py-2 outline-none ring-ova-green focus:ring"
              value={selectedSubCategory}
              onChange={(e) => setFilter('subCategory', e.target.value)}
            >
              {subCategories.map((sub) => (
                <option key={sub} value={sub}>{sub}</option>
              ))}
            </select>
          </label>

          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Search
            <input
              className="rounded-xl border border-emerald-200 px-3 py-2 outline-none ring-ova-green focus:ring"
              value={search}
              onChange={(e) => {
                const value = e.target.value;
                setSearch(value);
                const next = new URLSearchParams(searchParams);
                if (value.trim()) next.set('search', value.trim());
                else next.delete('search');
                setSearchParams(next);
              }}
              placeholder="Find by product name"
            />
          </label>
        </div>

        {loading ? <p className="text-slate-500">Loading products...</p> : null}
        {error ? <p className="text-red-600">{error}</p> : null}
        {!loading && !error && !filtered.length ? <p className="text-slate-500">No products found.</p> : null}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
