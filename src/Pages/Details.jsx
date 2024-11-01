import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import { BsCart3 } from "react-icons/bs";
import { useProduct } from "../Context/ContextProvider";
import { Spin } from "antd";

function Details() {
  const { id } = useParams();
  const [item, setitem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { basket, addToBasket } = useProduct();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setitem(res.data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className=" flex justify-center items-center h-[80vh]">
        <p>
          <Spin size="large" />
        </p>
      </div>
    );
  }

  return (
    <div className="containerProduct">
      <div>
        <div className=" bg-white flex justify-center items-center h-[80vh]">
          <div>
            <img className=" w-[500px] h-[500px]" src={item.thumbnail}></img>
            <div className=" flex justify-center gap-4 items-center">
              <img className="w-[80px] h-[80px]" src={item.thumbnail[0]}></img>
              <img className="w-[80px] h-[80px]" src={item.thumbnail[1]}></img>
              <img className="w-[80px] h-[80px]" src={item.thumbnail[2]}></img>
              <img className="w-[80px] h-[80px]" src={item.thumbnail[3]}></img>
            </div>
          </div>
          <div className=" w-[600px]">
            <h2>{item.title}</h2>
            <hr />
            <p className=" mt-2 text-gray-600">{item.description}</p>
            <div className=" flex justify-start gap-2 w-[500px] mt-4">
              <p className=" flex gap-2">
                <span className=" text-red-500  font-semibold">Rating 4: </span>
                {item.rating}
              </p>
              <span className=" text-red-500 font-bold">|</span>
              <p className=" flex gap-2">
                <span>Brend:</span> {item.brand}
              </p>
              <span className=" text-red-500 font-bold">|</span>
              <p>category: {item.category}</p>
            </div>

            <div className="geay_div mt-4">
              <div
                style={{
                  fontSize: "20px",
                }}
                className=" flex gap-2"
              >
                <p className="text_oldpirice">{item.discountPercentage}</p>
                <p>Inclusive of all taxes</p>
              </div>
              <div className=" flex gap-3 text-3xl text-red-500 mt-2 font-semibold">
                <p>{item.price}</p>
                <p className=" text-red-500">(17.81% Off)</p>
              </div>
            </div>
            <div className=" count flex gap-6 items-center mt-6">
              <p
                style={{
                  fontSize: "20px",
                }}
                className="text-gray-600 "
              >
                Quantity :{" "}
              </p>
              <div className=" flex gap-5">
                <button
                  className="bg-gray-300 text-white font-semibold py-1 px-3 rounded-md"
                  disabled={item.quantity <= 0}
                >
                  -
                </button>
                <button
                  className="bg-gray-300 text-white font-semibold py-1 px-3 rounded-md"
                  disabled={item.quantity >= 99}
                >
                  0
                </button>
                <button
                  className="bg-gray-300 text-white font-semibold py-1 px-3 rounded-md"
                  disabled={item.quantity >= 99}
                >
                  +
                </button>
              </div>
            </div>
            <div className=" flex gap-6 mt-4">
              <button
                onClick={() => addToBasket(item)}
                className="addShop gap-2 rounded-md flex items-center"
              >
                <BsCart3 />
                Add to Cart
              </button>
              <button className="addShopinactiv rounded-md">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
