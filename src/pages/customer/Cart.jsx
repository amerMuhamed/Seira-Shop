import React from "react";
import { useContext } from "react";
import { CartContext } from "../../hooks/CartContext";
import CartItem from "../../components/CartItem";
import AppLoader from "../../components/AppLoader";
const Cart = () => {
  const { loading, cartData } = useContext(CartContext);
  if (loading) {
    return <AppLoader />;
  }
  if (!cartData) {
    return <div>No products found</div>;
  }
  const products = cartData ;

  return (
    <div
      className=" w-full flex flex-wrap flex-col justify-center content-center items-center mx-auto p-6 "
      style={{ backgroundColor: "#eee" }}
    >
      <div className="w-full flex flex-wrap flex-col justify-center content-center items-center mx-auto " >
        {products.map((product) => (
          <CartItem key={product.productId} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Cart;