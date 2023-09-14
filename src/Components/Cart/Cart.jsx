import { useDispatch, useSelector } from "react-redux";
import CartLayout from "./CartLayout";
import uiSlice from "../Store/ui-slice";

const Cart = (props) => {
  const dispatch = useDispatch();

  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const items = useSelector((state) => state.cart.items);

  function handlerCloseCart() {
    dispatch(uiSlice.actions.toggle());
  }

  return (
    <>
      <div className=" p-6 bg-slate-900 text-white ">
        {items.map((item) => (
          <CartLayout
            id={item.id}
            key={item.id}
            title={item.title}
            amount={item.amount}
            price={item.price}
            images={item.images}
          />
        ))}

        <div className=" flex justify-between font-semibold">
          <div className="flex text-lg justify-around w-4/6 text-white">
            <h2 className=" mx-4 border border-orange-700 rounded-lg px-10">
              Total Amount : {totalAmount}
            </h2>
            <h2 className=" mx-4 border border-orange-700 rounded-lg px-10">
              Total Price : {totalPrice} $
            </h2>
          </div>
          <div >
            <button className=" transition-all duration-300 bg-lime-950 text-slate-300 hover:bg-lime-600 hover:text-white  p-1 px-3 rounded-md mx-4">
              Approve
            </button>
            <button
              onClick={handlerCloseCart}
              className="transition-all duration-300  bg-fuchsia-950  text-slate-300 hover:bg-fuchsia-600 hover:text-white p-1 px-3 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
