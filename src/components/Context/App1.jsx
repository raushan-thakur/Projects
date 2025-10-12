import ProductList from "./ProductList";
import Cart from "./Cart";
import { CartProvider } from "./CartContext";

function App1() {
  return (
        <CartProvider>
            <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold text-center my-4">React Cart with Context</h1>
            <ProductList />
            <Cart />
            </div>
      </CartProvider>
  );
}

export default App1;
