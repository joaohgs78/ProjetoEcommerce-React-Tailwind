import { useContext } from "react";
import { useCartContext } from "../hooks/useCartContext";
import { Link } from "react-router-dom";
import React from "react";
import { MdClose } from "react-icons/md";

const CartItem = ({ item }) => {
  const { id, name, image, price, amount } = item;
  const { removeCart, increaseAmount, descreaseAmount } = useContext(useCartContext);

  return (
    <div className="flex gap-x-4 py-2 lg:border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
       
          <img src={image} alt="Imagem do produto" className="max-w-[70px]" />

          <div  className="inline-flex mt-4">
           <button onClick={() => increaseAmount(id)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-l">
                +
            </button>
            <button onClick={()=> descreaseAmount(id)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-r">
                -
            </button>
          </div>
        

        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase max-w-[200px] hover:underline"
            >
              {name}
              <br />
              {`R$ ${price} (${amount})`}
              
              <br />
            </Link>

            <div className="text-xl cursor-pointer">
              <MdClose
                className="hover:text-red-600 transition"
                onClick={() => removeCart(id)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;