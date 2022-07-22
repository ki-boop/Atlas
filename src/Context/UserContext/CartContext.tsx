import React, {useContext, useEffect, useState} from "react";

interface cartItem{
    id: number,
    count: number,
    img:string[],
    strings:any
}


const cartContext = React.createContext([] as Array<cartItem> )
const addToCartContext = React.createContext((cartItem:cartItem)=>{})
const DeleteFromCartContext = React.createContext((id:number)=>{})
const ChangeCartContext = React.createContext((cartItem:cartItem)=>{})
const EmptyCartContext = React.createContext(()=>{})

export const useCart = () =>{
    return useContext(cartContext)
}
export const useAddToCart = () =>{
    return useContext(addToCartContext)
}
export const useDeleteFromCart = () =>{
    return useContext(DeleteFromCartContext)
}
export const useChangeCart = () =>{
    return useContext(ChangeCartContext)
}
export const useEmptyCart = () =>{
    return useContext(EmptyCartContext)
}
export const CartProvider = ({children}:any) =>{

    const [cart, setCart] = useState( [{}] as Array<cartItem>);
    useEffect(()=>{
        console.log(cart)
    },[cart])
    const addToCart = (cartItem:cartItem) =>{
        const copyCart = [...cart];
        copyCart.map((item,index)=>{
            if(item.id===cartItem.id) {

                cartItem.count+=copyCart[index].count
                copyCart.splice(index,1)
            }
        })
        console.log(cartItem)
        copyCart.push(cartItem)
        setCart(copyCart)
    }

    const deleteFromCart = (id:number) =>{
        let copyCart = [...cart];
        copyCart.map((item,index)=>{
            if(item.id===id)  copyCart.splice(index,1)
        })
        setCart(copyCart)
    }

    const changeCart = (cartItem:cartItem) =>{
        let copyCart = [...cart];
        copyCart.map((item, index)=>{
            if(item.id ===cartItem.id) copyCart[index]=cartItem
        })
        setCart(copyCart)
    }
    const deleteCart=()=>{
        setCart([{}] as Array<cartItem>)
        console.log('delete',cart)
    }

    return  (

        <cartContext.Provider value={cart}>
            <addToCartContext.Provider value={addToCart}>
                <DeleteFromCartContext.Provider value={deleteFromCart}>
                    <ChangeCartContext.Provider value={changeCart}>
                        <EmptyCartContext.Provider value={deleteCart}>
                            {children}
                        </EmptyCartContext.Provider>
                    </ChangeCartContext.Provider>
                </DeleteFromCartContext.Provider>
            </addToCartContext.Provider>
        </cartContext.Provider>

    )
}