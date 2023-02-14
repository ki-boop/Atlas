import React, { useEffect, useState } from "react";
import "./ImputNumber.scss";
import useLongPress from "../../OwnHooks/useLongPress";
import {
  useCountItem,
  useSetCountItem,
} from "../../Context/UserContext/CountItemContext";
import { useChangeProducts, useProducts } from "../../Context/ProductsContext";

interface InputNumber {
  id: number;
  type: string;
  name: string;
  count: number;
  description: string;
  price: number;
  img: string;
  initCount: number;
}

export const InputNumber = (props: InputNumber) => {
  let tempCount = props.initCount === 0 ? 1 : props.count;
  const count = useCountItem();
  const [countItem, setCountItem] = useState(1);
  const setCountItems = useSetCountItem();
  const product = useProducts();
  useEffect(() => {
    setCountItems(countItem);
  }, [countItem]);
  useEffect(() => {
    setCountItem(count);
  }, [product]);

  const minButton = () => {
    if (countItem - 1 > 0) {
      setCountItem((prevState) => prevState - 1);
    }
  };
  const plusButton = () => {
    if (countItem + 1 <= props.count) {
      setCountItem((prevState) => prevState + 1);
    }
  };
  const maxLongPress = useLongPress(minButton, 200);
  const minLongPress = useLongPress(plusButton, 200);

  return (
    <React.Fragment>
      <div className={"InputNumber"}>
        <button
          className={"btn btn-min"}
          type={"button"}
          {...maxLongPress}
          onClick={minButton}
        >
          -
        </button>
        <input
          className={"inputCountItems"}
          type={"text"}
          value={countItem}
          readOnly
        />
        <button
          className={"btn btn-plus"}
          type={"button"}
          {...minLongPress}
          onClick={plusButton}
        >
          +
        </button>
      </div>
      {countItem === props.count ? (
        <div className={"endMessage"}>Этого товара больше нет на складе</div>
      ) : null}
    </React.Fragment>
  );
};
