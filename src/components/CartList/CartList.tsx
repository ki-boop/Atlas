import React, { useEffect } from "react";
import {
  useCart,
  useEmptyCart,
} from "../../Context/UserContext/CartContext";
import "./CartList.scss";
import { CartItem } from "../CartItem/CartItem";
import { Price } from "../Price/Price";
import { Button } from "../../UI/Button/Button";
import { useAddOrder } from "../../Context/OrderContext";
import { useUser } from "../../Context/UserContext/UserContext";
import LocalizedStrings from "react-localization";

let strings = new LocalizedStrings({
  ru: {
    cartTitle: "Ваша корзина",
    emptyCart: "В вашей корзине ничего нет",
    result: "Итого: ",
    orderButton: "Заказать",
  },
  ar: {
    cartTitle: "سلة التسوق الخاصة بك",
    emptyCart: "لا يوجد شيء في سلتك",
    result: "المجموع:",
    orderButton: "لأجل",
  },
});

export const CartList = () => {
  const cart = useCart();
  const listCart = cart.slice(1);
  const addOrder = useAddOrder();
  const user = useUser();
  const deleteCart = useEmptyCart();
  const calculateAllPrice = () => {
    return <Price price={sum()} />;
  };
  const sum = () => {
    let res = 0;
    listCart.map((value) => {
      res += value.count * value.strings.price;
    });
    return res;
  };
  useEffect(() => {});
  const makeOrder = () => {
    addOrder({
      user: user,
      cart: listCart,
      sum: sum(),
    });
    deleteCart();

    return 0;
  };
  return (
    <React.Fragment>
      <h1>{strings.cartTitle}</h1>
      {listCart.length === 0 ? (
        <div className={"emptyCart"}>{strings.emptyCart}</div>
      ) : (
        listCart.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <div className={"CartList"} key={"item" + index}>
                <CartItem
                  id={item.id}
                  count={item.count}
                  img={item.img}
                  strings={item.strings}
                ></CartItem>
              </div>
            </React.Fragment>
          );
        })
      )}
      {listCart.length !== 0 ? (
        <div className={"Result"}>
          <div className={"total-price"}>
            <span>{strings.result} </span> {calculateAllPrice()}
          </div>
          <Button onClick={makeOrder}>{strings.orderButton}</Button>
        </div>
      ) : null}
    </React.Fragment>
  );
};
