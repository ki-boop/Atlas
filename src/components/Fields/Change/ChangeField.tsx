import React, { useEffect, useState } from "react";
import {
  useChangeProducts,
  useProducts,
} from "../../../Context/ProductsContext";
import { Image } from "../../../UI/Image/Image";
import { Button } from "../../../UI/Button/Button";
import "./ChangeField.scss";
import LocalizedStrings from "react-localization";

let strings = new LocalizedStrings({
  ru: {
    label: "Введите Id",
    notFound: "Такого товара еще нет",
    specifications: "Характеристики",
    name: "Название",
    type: "Тип",
    price: "Цена",
    count: "Количество",
    description: "Описание",
    buttonText: "Изменить",
  },
  ar: {
    label: "أدخل المعرف",
    notFound: "لا يوجد مثل هذا المنتج حتى الآن",
    specifications: "المواصفات",
    name: "العنوان",
    type: "النوع",
    price: "السعر",
    count: "الكمية",
    description: "الوصف",
    buttonText: "إضافة منتج",
  },
});

export const ChangeField = () => {
  const productList = useProducts();
  const changeProduct = useChangeProducts();

  const onChangeNameRu = (event: React.FormEvent<HTMLInputElement>) => {
    setCurrentProduct({
      ...currentProduct,
    });
    currentProduct.strings.name = event.currentTarget.value;
  };

  const onChangeNameAR = (event: React.FormEvent<HTMLInputElement>) => {
    setCurrentProduct({
      ...currentProduct,
    });
    currentProduct.strings.name = event.currentTarget.value;
  };

  const onChangeTypeRu = (event: React.FormEvent<HTMLInputElement>) => {
    setCurrentProduct({
      ...currentProduct,
    });
    currentProduct.strings.type = event.currentTarget.value;
  };

  const onChangeTypeAR = (event: React.FormEvent<HTMLInputElement>) => {
    setCurrentProduct({
      ...currentProduct,
    });
    currentProduct.strings.type = event.currentTarget.value;
  };

  const onChangePrice = (event: React.FormEvent<HTMLInputElement>) => {
    setCurrentProduct({
      ...currentProduct,
    });
    currentProduct.strings.price = event.currentTarget.value;
    currentProduct.count = parseInt(event.currentTarget.value);
  };

  const onChangeCount = (event: React.FormEvent<HTMLInputElement>) => {
    setCurrentProduct({
      ...currentProduct,
      ["count"]: parseInt(event.currentTarget.value),
    });
  };

  const onDescriptionTypeRu = (event: React.FormEvent<HTMLInputElement>) => {
    setCurrentProduct({
      ...currentProduct,
    });
    currentProduct.strings.description = event.currentTarget.value;
  };

  const onDescriptionTypeAR = (event: React.FormEvent<HTMLInputElement>) => {
    setCurrentProduct({
      ...currentProduct,
    });
    currentProduct.strings.description = event.currentTarget.value;
  };

  const onImage = (event: React.FormEvent<HTMLInputElement>) => {
    if (event.currentTarget.files && event.currentTarget.files[0]) {
      setCurrentProduct({
        ...currentProduct,
        ["img"]: [URL.createObjectURL(event.currentTarget.files[0])],
      });
    }
  };

  const [currentProduct, setCurrentProduct] = useState(productList[0]);
  const [has, setHas] = useState(false);

  const getProduct = (event: React.FormEvent<HTMLInputElement>) => {
    let flag = false;
    productList.map((value, index) => {
      if (event.currentTarget.value === value.id.toString()) {
        flag = true;
        setCurrentProduct(productList[index]);
      }
    });
    setHas(flag);
  };

  useEffect(() => {}, [has]);
  useEffect(() => {}, [currentProduct]);

  const sendForm = (event: any) => {
    event.preventDefault();
    changeProduct(currentProduct);
    event.currentTarget.reset();
  };
  
  return (
    <div className={"Field"}>
      <div className={"selectId"}>
        <label>{strings.label}</label>
        <input
          type={"number"}
          min={1}
          onChange={(event) => {
            getProduct(event);
          }}
        />
      </div>
      {has ? (
        <form onSubmit={(event) => sendForm(event)}>
          <div className={"forImage"}>
            <Image name={currentProduct.img[0]} alt={"item"} />
            <input
              className={"Button"}
              onChange={(event) => {
                onImage(event);
              }}
              type={"file"}
            />
          </div>
          <div className={"specifications"}>
            <h1>{strings.specifications}</h1>
            <div className={"inputs"}>
              <div className={"col"}>
                <div className={"block-input"}>
                  <div className={"inputsTitle"}>{strings.name}</div>
                  {currentProduct.strings.getLanguage() === "ru" ? (
                    <div className={"input-block"}>
                      <label>RU</label>{" "}
                      <input
                        onChange={(event) => {
                          onChangeNameRu(event);
                        }}
                        value={currentProduct.strings.name}
                        type={"text"}
                        required
                      />
                    </div>
                  ) : (
                    <div className={"input-block"}>
                      <label>AR</label>{" "}
                      <input
                        onChange={(event) => {
                          onChangeNameAR(event);
                        }}
                        value={currentProduct.strings.name}
                        type={"text"}
                        required
                      />
                    </div>
                  )}
                </div>

                <div className={"block-input"}>
                  <div className={"inputsTitle"}>{strings.type}</div>
                  {currentProduct.strings.getLanguage() === "ru" ? (
                    <div className={"input-block"}>
                      <label>RU</label>{" "}
                      <input
                        onChange={(event) => {
                          onChangeTypeRu(event);
                        }}
                        type={"text"}
                        value={currentProduct.strings.type}
                        required
                      />
                    </div>
                  ) : (
                    <div className={"input-block"}>
                      <label>AR</label>{" "}
                      <input
                        onChange={(event) => {
                          onChangeTypeAR(event);
                        }}
                        type={"text"}
                        value={currentProduct.strings.type}
                        required
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className={"col"}>
                <div className={"block-input"}>
                  <div className={"inputsTitle"}>{strings.price}</div>
                  <div className={"input-block"}>
                    <input
                      onChange={(event) => {
                        onChangePrice(event);
                      }}
                      min={1}
                      type={"number"}
                      value={currentProduct.strings.price}
                      required
                    />
                    <span></span>
                  </div>
                </div>

                <div className={"block-input"}>
                  <div className={"inputsTitle"}>{strings.count}</div>
                  <div className={"input-block"}>
                    <input
                      onChange={(event) => {
                        onChangeCount(event);
                      }}
                      min={1}
                      value={currentProduct.count}
                      type={"number"}
                      required
                    />
                    <span></span>
                  </div>
                </div>
              </div>
              <div className={"col"}>
                <div className={"block-input"}>
                  <div className={"inputsTitle"}>{strings.description}</div>
                  {currentProduct.strings.getLanguage() === "ru" ? (
                    <div className={"input-block"}>
                      <label>RU</label>{" "}
                      <input
                        onChange={(event) => {
                          onDescriptionTypeRu(event);
                        }}
                        value={currentProduct.strings.description}
                        type={"text"}
                        required
                      />
                    </div>
                  ) : (
                    <div className={"input-block"}>
                      <label>AR</label>{" "}
                      <input
                        onChange={(event) => {
                          onDescriptionTypeAR(event);
                        }}
                        value={currentProduct.strings.description}
                        type={"text"}
                        required
                      />
                    </div>
                  )}
                </div>
                <Button onClick={() => 1}>{strings.buttonText}</Button>
              </div>
            </div>
          </div>
        </form>
      ) : (
        <div className={"not-found"}>{strings.notFound}</div>
      )}
    </div>
  );
};
