// src/components/Cart.jsx
import { useCart } from "./CartContext";

export default function Cart() {
  const {
    cartItems,
    removeFromCart,
    decreaseQty,
    addToCart,
    totalItems,
    totalPrice,
  } = useCart();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Cart ({totalItems} items)</h2>

      {cartItems.length === 0 && <p>Your cart is empty</p>}

      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border-b py-2"
        >
          <div>
            <p className="font-medium">{item.name}</p>
            <p>₹{item.price} × {item.qty}</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => decreaseQty(item.id)}
              className="bg-gray-300 px-2"
            >
              -
            </button>
            <span>{item.qty}</span>
            <button
              onClick={() => addToCart(item)}
              className="bg-gray-300 px-2"
            >
              +
            </button>
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 text-white px-2 rounded"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      {cartItems.length > 0 && (
        <h3 className="mt-4 font-bold text-lg">Total: ₹{totalPrice}</h3>
      )}
    </div>
  );
}
