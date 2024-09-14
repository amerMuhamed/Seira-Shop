import React, { useContext } from "react";
import { AuthContext } from "../hooks/UserContext";

const ProductCard = ({ data }) => {
  const { title, price, image } = data;
  const { authenticationData } = useContext(AuthContext);

  const shortenText = (text, maxLength = 18) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  return (
    <div className=" bg-white border border-gray-200 rounded-lg shadow-md  overflow-hidden transform transition-transform hover:scale-105 duration-300">
      <img src={image} alt={title} className="w-full h-60 p-5" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {shortenText(title)}
        </h3>
        <span className="text-lg font-semibold bg-green-800 text-white px-2 py-1 rounded-full">${price}</span>
        {authenticationData && (
          <button className="mt-4 w-full bg-cyan-600 text-white py-2 rounded-lg shadow-md hover:bg-orange-500 transition-colors">
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
