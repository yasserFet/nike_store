import { ChevronDoubleLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";

function CartCount({
  closeDispatch,
  likeItem,
  clearDispatch,
  nbrOfItems,
  clearLike,
  isOpen,
}) {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex justify-center gap-2 items-center p-3">
          <button onClick={closeDispatch}>
            <ChevronDoubleLeftIcon className="icon-style bg-green-300 rounded " />
          </button>
          <div>
            <h1 className="font-bold text-sm ">
              your cart{" "}
              <span className="bg-theme-cart px-3 py-1 text-slate-200  text-sm rounded">
                {isOpen ? likeItem.length : nbrOfItems} item
                {nbrOfItems > 1 ? "s" : ""}
              </span>
            </h1>
          </div>
        </div>
        <div onClick={isOpen ? clearLike : clearDispatch} className="mr-2">
          <XMarkIcon className="icon-style bg-orange-500 rounded" />
        </div>
      </div>
    </>
  );
}

export default CartCount;
