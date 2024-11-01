import React from "react";
import { useProduct } from "../Context/ContextProvider";
import { Link } from "react-router-dom";
import { GrDocumentText } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";
import { Spin } from "antd";

function Basket() {
  const { basket, deleteFromBasket } = useProduct();
  return (
    <div>
      {basket?.length === 0 ? (
        <div
          style={{
            flexDirection: "column",
          }}
          className=" flex justify-center items-center h-[80vh]"
        >
          <img
            src="https://example-for-exam.vercel.app/static/media/shopping_cart.9bdd8040b334d31946f4.png"
            className=" w-[100px] h-[100px]"
          ></img>
          <p>Your shopping cart is empty.</p>
          <Link to="/">
            <button
              className=" bg-red-500 px-2 py-2 rounded-lg text-white mt-3 w-[240px] 
          "
            >
              Go shopping Now
            </button>
          </Link>
          {/* <p className=" mt-4">
            <Spin size="large" />
          </p> */}
        </div>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
          {basket.map((item) => (
            <div className=" cardProduct relative" key={item.id}>
              <span className="category">{item.category}</span>
              <Link to={`/details/${item.id}`}>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-40 object-contain mb-4"
                />
              </Link>
              <div className=" px-10 text-center">
                <p>Brend {item.brand}</p>
                <hr />
                <h2 className=" mt-2">{item.title}</h2>
                <div className=" flex items-center gap-8 justify-center py-3">
                  <p>{item.price}</p>
                  <p>{item.discountPercentage}</p>
                  <buton
                    onClick={() => deleteFromBasket(item)}
                    className="delet
                  bg-red-500 text-white font-semibold py-2 px-3 rounded-md"
                  >
                    <RiDeleteBinLine />
                  </buton>
                </div>
              </div>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Basket;
