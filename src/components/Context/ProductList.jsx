// src/components/ProductList.jsx
import { useCart } from "./CartContext";

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Headphones", price: 3000 },
  { id: 3, name: "Mouse", price: 1200 },
];

export default function ProductList() {
  const { addToCart } = useCart();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Products</h2>
      {products.map((p) => (
        <div
          key={p.id}
          className="flex justify-between items-center border-b py-2"
        >
          <div>{p.name}</div>
          <div>₹{p.price}</div>
          <button
            onClick={() => addToCart(p)}
            className="bg-blue-500 text-white px-3 py-1 rounded"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
