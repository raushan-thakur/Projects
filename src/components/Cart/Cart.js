import React, { useState } from "react";

// Dummy Products
const PRODUCTS = [
  { id: 1, name: "Laptop", price: 75000 },
  { id: 2, name: "Headphones", price: 3000 },
  { id: 3, name: "Smartphone", price: 45000 },
  { id: 4, name: "Keyboard", price: 1500 },
];

// Product List Component
const ProductList = ({ onAdd }) => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {PRODUCTS.map((product) => (
        <div
          key={product.id}
          className="border p-4 rounded-xl shadow flex flex-col items-center"
        >
          <h2 className="text-lg font-bold">{product.name}</h2>
          <p>₹{product.price}</p>
          <button
            onClick={() => onAdd(product)}
            className="mt-2 px-4 py-1 bg-blue-500 text-white rounded-lg"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

// Cart Component
const Carts = ({ cartItems, onAdd, onRemove }) => {
  let total = 0;
  cartItems.map((item) => (total += item.price * item.qty));

  return (
    <div className="p-4 border-l h-full">
      <h2 className="text-xl font-bold mb-2">🛒 Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Cart is empty</p>
      ) : (
        <div className="space-y-2">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border p-2 rounded-lg"
            >
              <div>
                <p className="font-semibold">{item.name}</p>
                <p>₹{item.price} × {item.qty}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => onRemove(item)}
                  className="px-2 bg-red-500 text-white rounded"
                >
                  -
                </button>
                <button
                  onClick={() => onAdd(item)}
                  className="px-2 bg-green-500 text-white rounded"
                >
                  +
                </button>
              </div>
            </div>
          ))}
          <h3 className="font-bold text-lg">Total: ₹{total}</h3>
        </div>
      )}
    </div>
  );
};

// Main App
export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  const handleAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const handleRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div className="grid grid-cols-3 h-screen">
      <div className="col-span-2">
        <h1 className="text-2xl font-bold p-4">🛍️ Product Store</h1>
        <ProductList onAdd={handleAdd} />
      </div>
      <div className="col-span-1 bg-gray-50">
        <Carts cartItems={cartItems} onAdd={handleAdd} onRemove={handleRemove} />
      </div>
    </div>
  );
}
