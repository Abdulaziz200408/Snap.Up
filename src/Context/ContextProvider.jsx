import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const Context = createContext(null);

function ContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [basket, setBasket] = useState([]);
  const notifyError = () =>
    toast.error("Mahsulot o'chirildi", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      draggable: false,
      style: {
        width: "280px",
        height: "30px",
        background: "white",
        color: "red",
      },
      className: "custom-toast",
    });

  const SucsesNotify = () => {
    toast.success("Mahsulot qo'shildi!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      style: {
        width: "280px",
        height: "30px",
        background: "white",
        color: "black",
      },
      className: "custom-toast",
    });
  };

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setData(res.data.products);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const addToBasket = (product) => {
    setBasket((prev) => {
      const isProductInBasket = prev.some((item) => item.id === product.id);
      if (!isProductInBasket) {
        console.log(`qoshildi`);
        SucsesNotify();
        return [...prev, product];
      }
      return prev;
    });

    return !basket.some((item) => item.id === product.id);
  };

  const deleteFromBasket = (product) => {
    setBasket((prev) => prev.filter((item) => item.id !== product.id));
    notifyError();
  };

  return (
    <Context.Provider value={{ data, addToBasket, basket, deleteFromBasket }}>
      {children}
    </Context.Provider>
  );
}

export const useProduct = () => {
  return useContext(Context);
};

export default ContextProvider;
