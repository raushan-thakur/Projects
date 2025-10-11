// App.jsx
import React from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import { store } from "./store";
import { addToCart, removeFromCart } from "./cartSlice";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  return (

    <div className="border p-4 rounded-xl shadow flex flex-col items-center justify-center">
      <h3 >{product.name}</h3>
      <h3>${product.price/100}</h3>
      <div className="flex items-center justify-center">
        <button className="m-2 px-4 py-1 bg-blue-500 text-white rounded-lg" onClick={() => dispatch(addToCart(product))}>Add</button>
        <button className="m-2 px-4 py-1 bg-blue-500 text-white rounded-lg" onClick={() => dispatch(removeFromCart(product))}>Remove</button>
      </div>
    </div>
  );
};

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  // console.log("cartItems",cartItems);
  // let leng=0;
  // cartItems.map((cart) =>{
  //   leng+=cart.qty;
  // })
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="p-3 m-2 font-bold bg-[#0e0747] rounded-lg text-white">Cart ({cartItems.length} items)</h2>
      <div>
      {cartItems.map((item) => (
        <div className="px-4 p-2 m-2 bg-slate-500 text-white rounded-lg" key={item.id}>{item.name} × {item.qty}</div>
      ))}
      </div>
    </div>
  );
};

export default function flipkartCart() {
  const products = [
    { id: 1, name: "Laptop", price: 75000 },
    { id: 2, name: "Headphones", price: 3000 },
    { id: 3, name: "Smartphone", price: 45000 },
  { id: 4, name: "Keyboard", price: 1500 },
  ];

  return (
    
    <Provider store={store}>
      <div className="grid grid-cols-3  h-screen">
      <div className="col-span-2">
        <h1 className="text-2xl font-bold p-4">🛍️ Flipart Style Cart</h1>
        <div className="grid grid-cols-2 gap-4 p-4">
          {products.map((p) => (
            <Product key={p.id} product={p} />
          ))}
        </div>
      </div>

      <div className=" col-span-1 bg-gray-50 p-4">
        <Cart />
      </div>
      </div>
    </Provider>
  );
}
