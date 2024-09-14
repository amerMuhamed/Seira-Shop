import React from "react";
import { useContext } from "react";
import { CartContext } from "../../hooks/CartContext";
import CartItem from "../../components/CartItem";
import AppLoader from "../../components/AppLoader";
const Cart = () => {
  const { loading, cartData ,clearCart} = useContext(CartContext);
  if (loading) {
    return <AppLoader />;
  }
  if (!cartData) {
    return <div>No products found</div>;
  }
  const products = cartData ;
const handleClearCart=()=>{
  clearCart();
}
  return (
    <div
      className="w-full flex flex-wrap flex-col h-full justify-center content-center items-center mx-auto p-6 "
      style={{ backgroundColor: "#eee" ,minHeight:"calc(100vh - 109px)"}}
    >
      <div className="w-full flex flex-wrap flex-col justify-center content-center items-center mx-auto " >
        {products.map((product) => (
          <CartItem key={product.productId} data={product} />
        ))}
      </div>
{products.length===0 ? <p className="text-3xl text-red-500 font-bold">No Products Found</p>:
      <button  onClick={handleClearCart} className="w-1/5 bg-red-500 text-white hover:bg-red-800 px-8 py-2 rounded-md font-semibold">Clear Cart</button>}
    </div>

  );
};

export default Cart;