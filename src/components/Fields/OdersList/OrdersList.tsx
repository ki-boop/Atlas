import React from "react";
import {useOrder} from "../../../Context/OrderContext";
import './OrdersList.scss'
import {Price} from "../../Price/Price";
import {useUser} from "../../../Context/UserContext/UserContext";
interface OrdersList{
    render: boolean
}

export const OrdersList = (render:OrdersList)=>{
    console.log(render)
    const userData = useUser()
    const orders = useOrder()
    let listOrders = orders.slice(1)
    if(render.render){
        listOrders.map((value, index) => {
            if(value.user.full_name!==userData.full_name) {
                listOrders.splice(index,1)
                console.log('list', listOrders)
            }

        })

    }
    return (
        <div className={'OrdersList'}>
            {listOrders.length>=1?
                listOrders.map((value, index) => {
                    return (
                        <React.Fragment key={index}>
                            <div className={'order-item'}>
                                <div>{value.user.email? value.user.full_name + ` (${value.user.email})`:'Неавторизованный пользователь'}</div>
                                <div className={'items'}>
                                {value.cart.map((value)=>{
                                    return(
                                        <React.Fragment>
                                            <div className={'item'}>
                                                <div className={'props'}>{value.strings.name}</div>
                                                <div className={'props'}>{value.count} шт.</div>
                                                <div className={'props'}><Price price={value.strings.price}/></div>
                                            </div>
                                        </React.Fragment>
                                    )
                                })}
                                </div>
                                <div className={'forPrice'}><Price price={value.sum}/></div>
                            </div>

                        </React.Fragment>

                    )
                })
                :<div>Пока заказов нет</div>}
        </div>

    )

}