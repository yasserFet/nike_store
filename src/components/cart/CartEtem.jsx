import { TrashIcon } from "@heroicons/react/24/solid";
import React from "react";


function CartEtem({
  cartItems,
  priceTotal,
  removeItem,
  increaseDespatch,
  decreaseDespatch,
  isOpen,
}) {
  return (
    <>
      <div className="flex items-start justify-start  flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[71vh] scroll-smooth scroll-hidden py-3">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center p-3 w-full"
          >
            <div className="flex items-center justify-center gap-8">
              <div
                className={`relative ${item.color} bg-gradient-to-b rounded  ${item.shadow} p-3 `}
              >
                <span className="absolute top-3 right-3 bg-slate-200 p-[1px] rounded shadow shadow-slate-300 text-slate-400 text-sm">
                  $ {item.price}
                </span>
                <img src={item.img} alt="" className="w-36" />
              </div>
              <div>
                <h2 className="font-bold text-slate-500 text-md lg:text-sm md:text-xs">
                  {item.title}
                </h2>
                <p className="font-base text-slate-400 text-md lg:text-sm md:text-xs ">
                  {item.text}
                </p>
                {isOpen ? (
                  <button>buy</button>
                ) : (
                  <div className="flex justify-between mt-3">
                    <span
                      onClick={() => decreaseDespatch(item)}
                      className="bg-theme-cart rounded text-slate-100 px-2 py-1 md:py-0.5 md-px-0.5 cursor-pointer transitions-theme "
                    >
                      -
                    </span>
                    <span className="bg-theme-cart rounded text-slate-100 px-2 py-1 md:py-0.5 md-px-0.5 cursor-pointer transitions-theme ">
                      {item.nbrOfPro}
                    </span>
                    <span
                      onClick={() => increaseDespatch(item)}
                      className="bg-theme-cart md:py-0.5 md-px-0.5 rounded text-slate-100 px-2 py-1 cursor-pointer transitions-theme "
                    >
                      +
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center justify-between flex-col h-full ">
              <h3 className="font-bold text-slate-900 mb-6 text-md md:text-sm sm:text-xs">
                $ {item.price * item.nbrOfPro}
              </h3>
              <div onClick={() => removeItem(item)}>
                <TrashIcon className="w-6 h-6 " />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-3 absolute bottom-0 w-full mt-12 bg-slate-100">
        <div className=" flex justify-between w-fll items-center">
          <h3 className="font-bold text-slate-800">SUBTOTAL</h3>
          <p className="bg-theme-cart rounded  text-slate-200 p-1">
            $ {priceTotal}
          </p>
        </div>
        <div className="mt-1 flex justify-center text-base text-gray-400 w-fll items-center">
          Taxes and shipping will be calculated during the checkout process.
        </div>
        <button className="button-theme bg-theme-cart w-full mt-2 text-slate-200">
          check out{" "}
        </button>
      </div>
    </>
  );
}

export default CartEtem;
