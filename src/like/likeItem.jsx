import React from "react";
import { TrashIcon } from "@heroicons/react/24/solid";
import { clearLike, removeLike } from "../components/redux/LikeSlice";
import { useDispatch } from "react-redux";
export default function LikeItems({
  likeToCart,
  color,
  id,
  title,
  btn,
  text,
  price,
  rating,
  shadow,
  img,
  likeItem,
}) {
 
  const dispatch = useDispatch();
  return (
    <>
      <div
        className={`relative ${color} bg-gradient-to-b mb-3 rounded  ${shadow} p-3 w-full nike-container flex justify-around`}
      >
        <div className={` `}>
          <h2 className="font-bold text-slate-200 text-md lg:text-sm md:text-xs">
            {title}
          </h2>
          <img src={img} alt="" className="w-36" />
        </div>
        <div className="flex items-center justify-between flex-col h-full gap-8">
          <h3 className="font-bold text-slate-200 text-md lg:text-sm md:text-xs">
            $ {text}
          </h3>
          <button
            onClick={(id) => likeToCart({ likeItem: likeItem, isCart: true })}
            className="font-bold text-slate-300 p-1 rounded bg-slate-900 mb-6 text-md md:text-sm sm:text-xs"
          >
            {btn}
          </button>
        </div>
        <div className="flex items-center justify-between flex-col h-full ">
          <h3 className="font-bold text-slate-200 mb-6 text-md md:text-sm sm:text-xs">
            $ {price}
          </h3>
          <div
            onClick={() =>
              dispatch(removeLike({ likeItem: likeItem, isCart: false }))
            }
          >
            <TrashIcon className="w-6 h-6 " />
          </div>
        </div>
      </div>
    </>
  );
}
