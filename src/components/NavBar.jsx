import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { useDispatch,useSelector } from "react-redux";
import { open } from "./redux/LikeSlice";
import { openCart,addItemToCart } from "./redux/CounterSlice";
export default function NavBar() {
  const { cartState ,nbrOfItems} = useSelector((state) => state.counter);
  const { likeItem } = useSelector((state) => state.like);
  const dispatch = useDispatch();
  const [scroolState, setScroolState] = useState(false);
  function scroolHandler() {
    if (window.scrollY > 30) {
      setScroolState(true);
    } else {
      setScroolState(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", scroolHandler);
    return ()=> {
        window.removeEventListener("scroll", scroolHandler);

    }
  }, []);
  const handleClick = () => {
    dispatch(openCart());
    
  };
  return (
    <>
      <header
        className={` ${
          scroolState
            ? " fixed top-0 left-0 w-full z-100 opacity-100 blur-effect-theme h-[9vh] flex justify-center items-center"
            : "absolute top-7 left-0 right-0 opacity-100 z-50"
        }`}
      >
        <nav className="nike-container items-center flex justify-between">
          <div>
            <img
              src={logo}
              alt=""
              className={`w-16 h-auto ${
                scroolState ? "filter brightness-0" : ""
              } `}
            />
          </div>
          <ul className="flex items-center gap-2">
            <li className="grid items-center">
              <MagnifyingGlassIcon
                className={`icon-style 
                  ${
                    scroolState
                      ? " text-slate-900 transition-all duration-300"
                      : ""
                  }
                `}
              />
            </li>

            <li className="grid items-center">
              <button
                type="button"
                onClick={() => dispatch(open())}
                className="border-none outline-none active:scale-110 transition-all duration-300 relative"
              >
                <HeartIcon
                  className={`icon-style ${
                    scroolState && "text-slate-900 transition-all duration-300"
                  }`}
                />
                <div
                  className={`absolute top-4 right-0 shadow w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ${
                    scroolState
                      ? "bg-slate-900 text-slate-100 shadow-slate-900"
                      : "bg-slate-100 text-slate-900 shadow-slate-100"
                  }`}
                >
                  {likeItem.length}
                </div>
              </button>
            </li>
            <li className="grid items-center">
              <button
                type="button"
                onClick={handleClick}
                className="border-none outline-none active:scale-110 transition-all duration-300 relative"
              >
                <ShoppingBagIcon
                  className={`icon-style ${
                    scroolState && "text-slate-900 transition-all duration-300"
                  }`}
                />
                <div
                  className={`absolute top-4 right-0 shadow w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ${
                    scroolState
                      ? "bg-slate-900 text-slate-100 shadow-slate-900"
                      : "bg-slate-100 text-slate-900 shadow-slate-100"
                  }`}
                >
                  {nbrOfItems}
                </div>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
