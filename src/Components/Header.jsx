import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useProduct } from "../Context/ContextProvider";

function Header() {
  const { basket } = useProduct();
  return (
    <div>
      <div className=" bg-red-500 w-full text-white ">
        <div className="containerProduct">
          <ul className=" flex justify-between items-center">
            <li className=" flex gap-2 items-center text-2xl">
              <FaBars />
              <Link to="/">
                <h1>
                  <span className=" font-bold text-3xl">Snap</span>.Up.
                </h1>
              </Link>
            </li>
            <li className=" flex items-center gap-10">
              <div className=" relative">
                <input
                  className=" w-[1100px] h-[40px] px-3 rounded-md outline-none text-black
                "
                  type="text"
                  placeholder="search your preferred here"
                />

                <button className=" bg-red-500 px-4 py-2 text-white rounded-md absolute right-4 top-1">
                  <CiSearch />
                </button>
              </div>
              <Link to="shop">
                <button className=" text-white relative">
                  <span
                    style={{
                      width: "20px",
                      height: "20px",
                      backgroundColor: "red",
                      color: "white",
                      borderRadius: "50%",
                      transform: "translate(-50%, -50%)",
                      position: "absolute",
                      top: "-2px",
                      right: "-15px",
                      backgroundColor: "red",
                      color: "white",
                      borderRadius: "50%",
                      transform: "translate(-50%, -50%)",
                      display: basket.length > 0 ? "block" : "none",
                      textAlign: "center",
                      padding: "2px",
                      fontSize: "10px",
                    }}
                  >
                    {basket.length}
                  </span>
                  <FaCartShopping className=" text-2xl" />
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
