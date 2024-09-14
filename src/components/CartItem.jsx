import React,{useState, useEffect} from 'react'
import { fetchProductById } from '../api/shopServer';
import AppLoader from './AppLoader';
const CartItem = ({data}) => {
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState(null);
    const[cartData, setCartData] = useState(null);
    const[quantity, setQuantity] = useState(data.quantity);
    useEffect(() => {
        const getCart = async () => {
            try {
                const response = await fetchProductById(data.productId);
                setCartData(response);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        getCart();
    }, [data]);
    if(loading){
        return(
            <div>
                <AppLoader />
            </div>
        )   }
        if(error){
            return(
              <p className='text-red-500 text-center'>Error: {error.message}</p>
            )
        }
        if(!cartData){
            return(
                <div>
                    No Products Found.
                </div>
            )
        }
const totalPrice = cartData.price * quantity
const handleDecrease = () => {
  setQuantity((prevQuantity) => (prevQuantity === 1 ? 1 : prevQuantity-1));
}

const handleIncrease = () => { 
  setQuantity((prevQuantity) => prevQuantity + 1);
}


  return (
    <div className="flex items-center gap-5 p-4 bg-neutral-300 w-3/4 border border-gray-200 rounded-lg shadow-md mb-4">
      <img
        src={cartData.image}
        alt={cartData.title}
        className="w-24 h-24 object-cover rounded-full p-0.5 border bg-lime-300 border-white"
      />
      <div className="flex-grow">
        <h2 className="text-lg font-semibold">{cartData.title}</h2>
        <div className='flex items-center gap-3 mt-2'>
          <button
            className="flex items-center justify-center rounded-full pb-2 w-9 h-9 text-2xl bg-blue-500 text-white  hover:bg-cyan-950 font-semibold"
            onClick={handleDecrease}
          >
            -
          </button>
          <p className="text-lg font-bold">{quantity}</p>
          <button
            className="flex items-center justify-center rounded-full pb-2 w-9 h-9 text-2xl bg-blue-500 text-white  hover:bg-cyan-950 font-semibold"
            onClick={handleIncrease}
          >
            +
          </button>
        </div>
        <p className="text-gray-700 text-lg font-semibold">Price: <span className="text-green-900">${totalPrice.toFixed(2)}</span></p>
        
        <p className="mt-2 text-lg font-semibold">
          Total Price: <span className="text-green-900">${totalPrice.toFixed(2)}</span>
        </p>
      </div>
    </div>
  )
}

export default CartItem
