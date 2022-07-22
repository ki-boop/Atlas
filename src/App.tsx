import React from 'react';
import './App.css';
import Main from "./Main";
import {UserProvider} from "./Context/UserContext/UserContext";
import {CartProvider} from "./Context/UserContext/CartContext";
import {CountItemProvider} from "./Context/UserContext/CountItemContext";
import {ProductsProvider} from "./Context/ProductsContext";
import {OrderProvider} from "./Context/OrderContext";

function App() {


  return (

      <React.Fragment>
          <ProductsProvider>
              <UserProvider>
                  <CartProvider>
                      <CountItemProvider>
                          <OrderProvider>
                              <Main/>
                          </OrderProvider>
                      </CountItemProvider>
                  </CartProvider>
              </UserProvider>
          </ProductsProvider>
      </React.Fragment>


  );
}

export default App;
