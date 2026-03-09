import { useEffect } from 'react';

type SeoProps = {
  title: string;
  description: string;
  path?: string;
};

const BASE_URL = 'https://www.ovacart.com.np';

export default function Seo({ title, description, path = '' }: SeoProps) {
  useEffect(() => {
    document.title = `${title} | Ova Cart`;

    const upsertMeta = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let el = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        if (property) {
          el.setAttribute('property', name);
        } else {
          el.setAttribute('name', name);
        }
        document.head.appendChild(el);
      }
      el.content = content;
    };

    upsertMeta('description', description);
    upsertMeta('robots', 'index, follow');
    upsertMeta('og:title', `${title} | Ova Cart`, true);
    upsertMeta('og:description', description, true);
    upsertMeta('og:type', 'website', true);
    upsertMeta('og:image', `${BASE_URL}/ova-logo.png`, true);
    upsertMeta('twitter:card', 'summary_large_image');

    const canonicalHref = `${BASE_URL}${path}`;
    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalHref;
  }, [description, path, title]);

  return null;
}
