import { useDispatch, useSelector } from "react-redux";
import CartIcon from "../Icons/CartIcon";
import uiSlice from "../Store/ui-slice";
import AnimatePing from "../animations/AnimatePing";
import { useState } from "react";

const Navbar = (props) => {
  const dispatch = useDispatch();

  const totalAmount = useSelector((state) => state.cart.totalAmount);
  function handlerShowCart() {
    dispatch(uiSlice.actions.toggle());
  }


  

  return (
    <>
      <div className=" bg-gray-950 flex justify-around items-center text-gray-300 h-20 font-bold w-screen border-b">
        <div>
          <h1 className=" text-3xl font-semibold font-serif text-gray-200 ">
            YDG Products
          </h1>
        </div>
        <div
          onClick={handlerShowCart}
          className={`cursor-pointer ${totalAmount > 0 ? "animate-pulse" : ""} text-xl flex border w-60 h-12 justify-around items-center rounded-2xl hover:text-white hover:bg-purple-950 transition-all duration-300 `}
        >
          <CartIcon />
          <h2>My Cart</h2>
          <h3 className="flex w-10 pl-3  justify-between text-center bg-gray-800  rounded-xl">
            {totalAmount}
            {totalAmount > 0 ? (
              <div className=" bg-purple-500 w-4 h-4 rounded-full animate-bounce ">
                <AnimatePing />
              </div>
            ) : (
              ""
            )}
          </h3>
        </div>
      </div>
    </>
  );
};

export default Navbar;
