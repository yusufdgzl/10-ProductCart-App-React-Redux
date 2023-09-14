import { useDispatch } from "react-redux";
import cartSlice from "../Store/cart-slice";

const CartLayout = (props) => {

  const dispatch = useDispatch();

  function handlerAddItem() {
    dispatch(cartSlice.actions.addItemToCart({
      ...props,amount:1
    }))
  }

  function handlerRemoveItem(id) {
    dispatch(cartSlice.actions.removeItemToCart(id))
  }

  return (
    <>
      <div className="flex items-center h-20 justify-between border-b-2 text-lg mb-5">
        <div className="flex  w-4/6 justify-between px-4 items-center">
          <img className=" w-16 " src={props.images} />
          <h2>{props.title.substring(1,10)}</h2>
          <h2>${props.price}</h2>
          <h2>{props.amount}</h2>
        </div>
        <div className=" w-1/6  items-center flex justify-around  text-xl text-center">
          <button
            onClick={handlerAddItem}
            className="border border-sky-700 px-4 rounded-md text-sky-500 hover:bg-sky-700 hover:text-white transition-all"
          >
            +
          </button>
          <button
            onClick={handlerRemoveItem.bind(null,props.id)}
            className=" border hover:text-white text-red-500 border-red-700 px-4 rounded-md hover:bg-red-700 transition-all"
          >
            -
          </button>
        </div>
      </div>
    </>
  );
};

export default CartLayout;
