import { useDispatch } from "react-redux";
import cartSlice from "../Store/cart-slice";
import { useRef } from "react";

const ProductCard = (props) => {
  const dispatch = useDispatch();

  const amountRef = useRef();

  function handlerAddItem(e, props) {
    e.preventDefault();
    dispatch(cartSlice.actions.addItemToCart({
      ...props, amount: +amountRef.current.value
    }));
  }

  return (
    <>
      <div className=" border-b border-gray-200  w-full h-32 items-center flex justify-between text-lg mb-6">
        <div className="w-4/6 flex justify-between items-center px-6">
          <img
            className=" w-20 hover:shadow-[3px_3px_5px_theme(colors.blue.200)] hover:scale-125 duration-200 hover:cursor-pointer "
            src={props.images}
            alt="404-"
          />
          <h1>{props.title.substring(1,9)}</h1>
          <h2>${props.price}</h2>
          <h2>{props.description.substring(1, 30)}</h2>
        </div>
        <form className="  flex font-semibold  ">
          <label htmlFor="amount">Amount :</label>
          <input
            ref={amountRef}
            className=" w-10 text-center mx-1  bg-gray-900"
            type="number"
            defaultValue="1"
            step="1"
            min="1"
            max="5"
          />
          <button
            onClick={(e) => handlerAddItem(e, props)}
            className=" transition-all duration-500 ease-in-out border-x-4  border-purple-950 shadow-[0_0_20px_purple] text-gray-300 mx-6 px-4 rounded-md hover:bg-purple-200 hover:text-purple-700 "
          >
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default ProductCard;
