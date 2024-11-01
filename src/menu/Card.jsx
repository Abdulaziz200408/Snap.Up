import React from "react";
import { useProduct } from "../Context/ContextProvider";
import { Spin } from "antd";
import "../App.css";
import { Link } from "react-router-dom";

function Card() {
  const { data } = useProduct();

  if (data.length === 0) {
    return (
      <div className=" flex justify-center items-center h-[80vh]">
        <p>
          <Spin size="large" />
        </p>
      </div>
    );
  }

  return (
    <div className=" containerProduct mt-4">
      <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py3">
        {data.map((item) => {
          return (
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
                  <p className=" text-red-500">(% Off)</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Card;
