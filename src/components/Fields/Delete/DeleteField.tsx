import React, {useEffect, useState} from "react";
import {useAddProducts, useChangeProducts, useProducts, useRemoveProducts} from "../../../Context/ProductsContext";
import {Image} from "../../../UI/Image/Image";
import {Button} from "../../../UI/Button/Button";
import './DeleteField.scss'
import LocalizedStrings from "react-localization";

export const DeleteField = ()=>{
    const productList = useProducts()
    const deleteProduct = useRemoveProducts();
    const [currentProduct,setCurrentProduct] = useState(productList[0])
    const [has, setHas] = useState(false)

    const getProduct=(event:React.FormEvent<HTMLInputElement>)=>{
        let flag=false
        productList.map((value, index) => {
            if(event.currentTarget.value === value.id.toString()) {
                flag=true
                setCurrentProduct(productList[index])
            }
        })
        setHas(flag)
    }



    useEffect(()=>{

    },[has])
    useEffect(()=>{
        console.log(currentProduct)
    },[currentProduct])

    const sendForm = (event:any)=>{
        event.preventDefault();
        deleteProduct(currentProduct.id);
        setHas(false)
        event.currentTarget.reset()
    }

    return <div className={'Field'}>
        <div className={'selectId'}>
            <label>Введите id:</label>
            <input type={'number'} min={1} onChange={(event)=>{getProduct(event)}}/>
        </div>
        {has?   <form onSubmit={(event)=>sendForm(event)}>
                <div className={'forImage'}>
                    <Image  name={currentProduct.img[0]} alt={'item'} />
                </div>
                <div className={'specifications'}>
                    <h1>Характеристики</h1>
                    <div className={'inputs'}>
                        <div className={'col'}>
                            <div className={'block-input'}>
                                <div className={'inputsTitle'}>Название</div>
                                {currentProduct.strings.getLanguage()==='ru'?
                                    <div className={'input-block'}><label>RU</label> <input readOnly  value={currentProduct.strings.name} type={"text"} disabled/></div>:
                                    <div className={'input-block'}><label>AR</label> <input  readOnly value={currentProduct.strings.name} type={"text"} disabled/></div>}
                            </div>

                            <div className={'block-input'}>

                                <div className={'inputsTitle'}>Тип</div>
                                {currentProduct.strings.getLanguage()==='ru'?
                                    <div className={'input-block'}><label>RU</label> <input readOnly  type={"text"} value={currentProduct.strings.type} disabled/></div>
                                    :<div className={'input-block'}><label>AR</label> <input readOnly  type={"text"} value={currentProduct.strings.type} disabled/></div>}
                            </div>

                        </div>
                        <div className={'col'}>
                            <div className={'block-input'}>
                                <div className={'inputsTitle'}>Цена</div>
                                <div className={'input-block'}><input readOnly  min={1} type={"number"} value={currentProduct.strings.price} disabled /><span></span></div>
                            </div>

                            <div className={'block-input'}>
                                <div className={'inputsTitle'}>Количество</div>
                                <div className={'input-block'}><input  readOnly  min={1} value={currentProduct.count} type={"number"} disabled/><span></span></div>
                            </div>

                        </div>
                        <div className={'col'}>
                            <div className={'block-input'}>
                                <div className={'inputsTitle'}>Описание</div>
                                { currentProduct.strings.getLanguage()==='ru'?
                                    <div className={'input-block'}><label>RU</label> <input readOnly  value={currentProduct.strings.description} disabled type={"text"} /></div>
                                    :<div className={'input-block'}><label>AR</label> <input readOnly  value={currentProduct.strings.description} disabled type={"text"} /></div>}

                            </div>
                            <Button onClick={()=>1}>Удалить</Button>
                        </div>
                    </div>
                </div>
            </form>
            :<div className={'not-found'}>Такого товара еще нет</div>}


    </div>

}