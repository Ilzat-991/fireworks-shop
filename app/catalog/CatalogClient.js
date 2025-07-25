import ProductCard from '@/components/ProductCard';
import products from '@/data/products';

export default function CatalogClient() {
  return (
    <div className="catalog-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
