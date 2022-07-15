import React from "react";
import header from "../components/Header/Header";
import ProductList from "../components/ProductList/ProductList";
import Header from "../components/Header/Header";
export const HomePage = () =>{

    return(
        <React.Fragment>
            <Header/>
            <ProductList/>
        </React.Fragment>
        )

}