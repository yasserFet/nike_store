import { HeartIcon } from "@heroicons/react/24/outline";
import { ShoppingBagIcon, StarIcon } from "@heroicons/react/24/solid";
import React from "react";
import heart from "../assets/heart.png";
import heartEmpty from "../assets/heartEmpty.png";
import { useDispatch,useSelector } from "react-redux";
import { open, addLike,removeLike } from "./redux/LikeSlice";
import { addItemToCart, openCart, totalPrice } from "./redux/CounterSlice";
export default function Items({
  id,
  color,
  text,
  title,
  rating,
  btn,
  price,
  img,
  shadow,
  isExist,
  nbrOfPro,
}) {
   const { isOpen, likeItem ,ids} = useSelector((state) => state.like);
  const dispatch = useDispatch();
  const item = {
    id,
    color,
    text,
    title,
    btn,
    price,
    img,
    shadow,
    nbrOfPro,
    rating,
  };
  
  function onAddItem() {
    dispatch(addItemToCart(item));
    dispatch(openCart());
    dispatch(totalPrice());
  }
  function removeL(key) {
    dispatch(removeLike({ likeItem:{id: key} }));
 
  }
  function addLikeItem() {
    dispatch(addLike(item));
    dispatch(open());
  }
  const finded = likeItem.find(item => item.id == id )


  return (
    <>
      <div
        className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center ${
          isExist ? "justify-items-start" : "justify-items-center"
        } px-5 py-4 rounded-xl w-full`}
      >
        <div
          className={`grid items-center ${
            isExist ? "justify-items-start" : "justify-items-center"
          }`}
        >
          <h3 className="text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow">
            {title}
          </h3>
          <p className="text-slate-200 text-base md:text-sm font-normal filter drop-shadow">
            {text}
          </p>

          <div className="flex justify-between my-2 w-28 items-center">
            <div className="flex items-center rounded px-1 bg-white/80">
              ${price}
            </div>

            <div className="items-center flex ">
              <StarIcon className="icon-style  w-5 h-5 md-h-4 md-w-4 text-slate-200" />
              <p className="text-slate-200 text-sm font-medium">{rating}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="" onClick={!finded ? addLikeItem :()=> removeL(id)}>
              {finded ? (
                <img
                  src={heart}
                  className="text-green-900 w-6 h-6   shadow-sky-200"
                  alt=""
                />
              ) : (
                <img
                  src={heartEmpty}
                  className="text-green-900 w-6 h-6   shadow-sky-200"
                  alt=""
                />
              )}
            </button>

            <button
              onClick={onAddItem}
              className="rounded  z-50 text-slate-900  button-theme bg-slate-200 blur-effect-theme shadow shadow-sky-200"
            >
              {btn}
            </button>
          </div>
        </div>
        <div
          className={` ${
            isExist ? "absolute top-15 justify-center right-1" : ""
          }`}
        >
          <img
            className={`  ${
              isExist ? "w-56 h-auto lg:w-52 md:w-40 sm:w-48" : "w-64 h-36"
            } transitions-theme hover:-rotate-12`}
            src={img}
            alt="img"
          />
        </div>
      </div>
    </>
  );
}
