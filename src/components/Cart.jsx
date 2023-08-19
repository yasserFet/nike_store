import React, { useEffect } from "react";
import CartCount from "./cart/CartCount";
import CartEmpty from "./cart/CartEmpty";
import CartEtem from "./cart/CartEtem";
import LikeItems from "../like/likeItem";
import EmptyLike from "../like/EmptyLike";
import {
  closeCart,
  clearCart,
  openCart,
  removeItem,
  addItemToCart,
  increase,
  decrease,
  totalPrice,
} from "./redux/CounterSlice";
import { close, clearLike, removeLike } from "./redux/LikeSlice";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const { cartState, nbrOfItems, cartItems, priceTotal } = useSelector(
    (state) => state.counter
  );
  const { isOpen, likeItem,ids } = useSelector((state) => state.like);
  


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(totalPrice());
  }, []);

  function closeDispatch() {
    dispatch(closeCart());
    dispatch(close());
  }
  function clearDispatch() {
    dispatch(clearCart());
    dispatch(totalPrice());
  }
  function clearLikee() {
    dispatch(clearLike());
  }
  function removeDispatch(key) {
    dispatch(removeItem(key));
    dispatch(totalPrice());
  }
  function increaseDespatch(key) {
    dispatch(increase(key));
    dispatch(totalPrice());
  }
  function decreaseDespatch(key) {
    dispatch(decrease(key));
    dispatch(totalPrice());
  }
  function likeToCart(key) {
    dispatch(openCart());
    dispatch(close());
    dispatch(addItemToCart(key.likeItem));
    dispatch(removeLike(key));
    dispatch(totalPrice())
  }

  return (
    <>
      <div
        className={`fixed top-0 z-300 left-0 bottom-0 right-0 w-full blur-effect-theme ${
          cartState || isOpen
            ? "opacity-100 visible translate-x-0"
            : "opacity-0 invisible translate-x-8"
        }`}
      >
        <div
          className={`blur-effect-theme duration-500 z-300  h-screen max-w-xl w-full absolute right-0 `}
        >
          <CartCount
            likeItem={likeItem}
            isOpen={isOpen}
            clearLike={clearLikee}
            closeDispatch={closeDispatch}
            clearDispatch={clearDispatch}
            nbrOfItems={nbrOfItems}
          />
          {isOpen ? (
            likeItem.length == 0 ? (
              <EmptyLike close={closeDispatch} />
            ) : (
              <div className=" overflow-y-scroll h-screen scroll-smooth scroll-hidden p-4">
                {likeItem.map((val) => (
                  <LikeItems
                    key={val.id}
                    {...val}
                    likeItem={val}
                    likeToCart={likeToCart}
                  />
                ))}
              </div>
            )
          ) : cartState ? (
            cartItems.length == 0 ? (
              <CartEmpty close={closeDispatch} />
            ) : (
              <CartEtem
                isOpen={isOpen}
                cartItems={cartItems}
                priceTotal={priceTotal}
                removeItem={removeDispatch}
                increaseDespatch={increaseDespatch}
                decreaseDespatch={decreaseDespatch}
              />
            )
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
