const Modal = (props) => {
  return (
    <>
      <div className=" z-10 fixed left-0 top-0 w-full h-screen flex justify-center items-center">
        <dialog open className=" z-20 w-3/6 max-h-96 h-auto overflow-y-scroll  justify-center items-center">
          {props.children}
        </dialog>
        <div className=" z-8 w-full h-full bg-black bg-opacity-60"></div>
      </div>
    </>
  );
};

export default Modal;
