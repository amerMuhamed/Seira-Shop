import React, { useState, useEffect } from "react";
import { fetchProducts } from "../../api/shopServer";
import ProductCard from "../../components/ProductCard";
import cover2 from "./images/cover2.png";
import cover from "./images/cover.png";
import reviews from "./images/reviews.png";
import Group1 from "./images/Group1.png";
import AppLoader from "../../components/AppLoader";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  if (loading) {
    return (
      <div>
        <AppLoader />
      </div>
    );
  }
  if(error){
    return(
      <p className='text-red-500 text-center'>Error: {error.message}</p>
    )
}
  if (products.length === 0) {
    return <div>No products found</div>;
  }

  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: "#eee" }}>
      <header className="flex justify-around  bg-background pt-5 mt-2 mb-5 rounded-3xl h-[380px]">
        <div className="h-[370px] hidden lg:block md:block">
          <img src={cover} alt="cover" className="w-auto h-[350px] " />
        </div>
        <div className="h-[380px] sm:w-fit">
          <h1 className="font-extrabold text-5xl leading-none tracking-tight">
            <span className="block text-black bg-fuchsia-500 p-1">LET’S</span>
            <span className="block text-black bg-white p-1 mt-2">EXPLORE</span>
            <span className="block text-white bg-orangeJP p-1 mt-2">
              UNIQUE
            </span>
            <span className="block text-black bg-white p-1 mt-2">Items.</span>
          </h1>
          <img src={reviews} alt="reviews" className="mt-10 " />
        </div>
        <div className="hidden lg:grid grid-cols-2 gap-4  sm:none">
          <img src={cover2} alt="cover2" className="w-auto h-[350px]" />
          <img src={Group1} alt="Group1" className="w-auto h-52" />
        </div>
      </header>
      <section className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </section>
    </div>
  );
};

export default Products;
