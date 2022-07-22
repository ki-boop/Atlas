import { Routes, Route , Navigate} from 'react-router-dom';
import {ProductList} from "./components/ProductList/ProductList";
import {HomePage} from "./Navigation/HomePage";
import {Login} from "./components/Login/Login";
import {Cart} from "./Navigation/Cart";
import {Account} from "./Navigation/Account/Account";
import {Admin} from "./Navigation/Admin/Admin";

const Main = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/productList" element={ <ProductList/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/account" element={<Account/>}/>
            <Route path="/admin" element={<Admin/>}/>
        </Routes>
    );
}
export default Main;