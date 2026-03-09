import { Navigate, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import CartPage from './pages/CartPage';
import CatalogPage from './pages/CatalogPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import ProductPage from './pages/ProductPage';
import RegisterPage from './pages/RegisterPage';

export default function App() {
  return (
    <div className="min-h-screen bg-ova-soft">
      <Header />
      <main className="mx-auto w-full max-w-7xl px-4 py-8 md:py-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
