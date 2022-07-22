import React, {useContext, useState} from "react";

const OrderContext = React.createContext({} as Array<Order>);
const AddOrderContext = React.createContext((order:Order)=>{})
interface cartItem{
    id: number,
    count: number,
    img:string[],
    strings:any
}
interface UserData {
    email: string,
    name: string,
    full_name: string,
    picture: string,
    greeting: boolean,
    role: string
}
interface Order{
    user: UserData
    cart: Array<cartItem>,
    sum: number
}

export const useOrder = () =>{
    return useContext(OrderContext)
}
export const useAddOrder = () =>{
    return useContext(AddOrderContext)
}

export const OrderProvider = ({children}:any) =>{
    const [orders, setOrders] = useState([{}] as Array<Order>);


    const addOrder = (order:Order) =>{
        let ordersList = [...orders]
        ordersList.push(order)
        setOrders(ordersList)
        }



    return (
        <OrderContext.Provider value={orders}>
            <AddOrderContext.Provider value={addOrder}>
                {children}
            </AddOrderContext.Provider>
        </OrderContext.Provider>
    )
}
