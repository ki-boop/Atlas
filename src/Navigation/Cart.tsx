import React from "react";
import Header from "../components/Header/Header";
import {CartList} from "../components/CartList/CartList";
import {ProductsProvider} from "../Context/ProductsContext";
export const Cart = ()=>{
    return(
        <React.Fragment>
            <Header/>
            <CartList/>
        </React.Fragment>
    )
}