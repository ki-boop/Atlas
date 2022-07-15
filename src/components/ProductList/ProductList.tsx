import React, { useState} from "react";
import Product from "../Product/Product";
import './ProductList.scss'

const ProductList = () =>{

    const [products, setProducts] = useState([
        {
            id:1,
            type:'Школа',
            name:'Pen',
            count:10,
            description:'Это Ручка',
            price:100,
            img:['../../../public/itemsImage/default.png']
        },
        {
            id:2,
            type:'Черчение',
            name:'Карандаш',
            count:0,
            description:'Это Карандаш',
            price:50,
            img:['../../../public/itemsImage/default.png']
        },
        {
            id:3,
            type:'Черчение',
            name:'Линейка',
            count:100,
            description:'Это линейка',
            price:1000,
            img:['../../../public/itemsImage/default.png']
        }
    ]);

    const sortListProducts = ()=>{
        let tempState = products
        return tempState.sort((a, b) => b.count - a.count)
    }

    {
        console.log(sortListProducts())}
        return(

            <div className={'ProductList'}>

                {products.map((product, index) => {
                    return(<Product id={product.id}
                                    type={product.type}
                                    name={product.name}
                                    count={product.count}
                                    description={product.description}
                                    price={product.price}
                                    img={product.img[0]}
                                    key={index}/>);
                    }
                )}
            </div>
            )


}


export default ProductList