import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import LoadingIcon from "../Icons/LoadingIcon";

const AvailableProducts = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const [cardAnimate, setCardAnimate] = useState("");

  useEffect(() => {
    setLoading(true);
    setCardAnimate("animate-bounce-slow");
    fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=10")
      .then((res) => res.json())
      .then((data) => setProduct(data));
    const timer = setInterval(() => {
      setLoading(false);
      setCardAnimate("");
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="flex justify-center h-20 my-10">
        {loading && <LoadingIcon /> }
      </div>

      <div
        className={`  text-white  rounded-xl w-4/6 mx-auto h-3/5 p-6 shadow-[0_0_50px_theme('colors.purple.800')] ${cardAnimate} `}
      >
        <div className=" h-full overflow-y-scroll ">
          {product.map((item) => (
            <ProductCard
              id={item.id}
              images={item.images}
              title={item.title}
              description={item.description}
              price={item.price}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default AvailableProducts;
