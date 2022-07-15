import { Routes, Route } from 'react-router-dom';
import ProductList from "./components/ProductList/ProductList";
import {HomePage} from "./Navigation/HomePage";
import {Login} from "./components/Login/Login";
import React from "react";
const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/productList" element={ <ProductList/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    );
}
export default Main;