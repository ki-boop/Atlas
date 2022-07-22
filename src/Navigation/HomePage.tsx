import React from "react";
import {ProductList} from "../components/ProductList/ProductList";
import Header from "../components/Header/Header";
import {Greeting} from "../components/Greeting/Greeting";
import {useUser} from "../Context/UserContext/UserContext";
import {log} from "util";
import {useAddProducts} from "../Context/ProductsContext";
import LocalizedStrings from "react-localization";

export const HomePage = () =>{
    const UserContext = useUser();


    return(
        <React.Fragment>
            <Header/>
            <ProductList/>
            {UserContext.greeting===undefined||UserContext.greeting?null:<Greeting/>}
        </React.Fragment>

        )

}