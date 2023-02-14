import { Routes, Route, useLocation } from "react-router-dom";
import { ProductList } from "./components/ProductList/ProductList";
import { HomePage } from "./Navigation/HomePage";
import { Login } from "./components/Login/Login";
import { Cart } from "./Navigation/Cart";
import { Account } from "./Navigation/Account/Account";
import { Admin } from "./Navigation/Admin/Admin";
import { useTransition, animated } from "react-spring";

const Main = () => {
  const location = useLocation();
  const transition = useTransition(location, {
    from: {
      opacity: 0,
      transform: "translateX(100%)",
    },
    enter: {
      opacity: 1,
      transform: "translateX(0%)",
    },
    leave: {
      opacity: 0,
      transform: "translateX(-100%)",
    },
  });

  return transition((props, item) => (
    <main style={{}}>
      <animated.div style={props}>
        <Routes location={item}>
          <Route path="/" element={<HomePage />} />
          <Route path="/productList" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Account />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </animated.div>
    </main>
  ));
};
export default Main;
