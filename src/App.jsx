import Navbar from "./Components/Layout/Navbar";
import Section from "./Components/Layout/Section";
import Modal from "./Components/Cart/Modal";
import Cart from "./Components/Cart/Cart";
import { useSelector } from "react-redux";
import "../src/Components/Layout/scrollbar.css"


function App() {

  const showCart = useSelector((state) => state.ui.cartIsVisible)
  

  return (
    <>
     {showCart && <Modal >
        <Cart  />
      </Modal>}

      <Navbar />
      <Section />
    </>
  );
}

export default App;
