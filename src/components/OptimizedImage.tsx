import { useState } from 'react';

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  eager?: boolean;
};

export default function OptimizedImage({ src, alt, width, height, className = '', eager = false }: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!loaded ? <div className="absolute inset-0 animate-pulse bg-slate-200" aria-hidden="true" /> : null}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={eager ? 'high' : 'low'}
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover transition duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
}
