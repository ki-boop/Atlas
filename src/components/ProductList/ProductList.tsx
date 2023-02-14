import Product from "../Product/Product";
import "./ProductList.scss";
import { useProducts } from "../../Context/ProductsContext";
interface Product {
  id: number;
  count: number;
  img: string[];
  strings: Object;
}

export const ProductList = () => {
  const products = useProducts();

  return (
    <div className={"ProductList"}>
      {products.map((product, index) => {
        return (
          <Product
            id={product.id}
            type={product.strings.type}
            name={product.strings.name}
            count={product.count}
            description={product.strings.description}
            price={product.strings.price}
            img={product.img[0]}
            key={index}
          />
        );
      })}
    </div>
  );
};
