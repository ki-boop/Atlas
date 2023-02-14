import React, {useEffect, useState} from "react";
import {useAddProducts, useChangeProducts, useProducts, useRemoveProducts} from "../../../Context/ProductsContext";
import {Image} from "../../../UI/Image/Image";
import {Button} from "../../../UI/Button/Button";
import './DeleteField.scss'
import LocalizedStrings from "react-localization";
let strings = new LocalizedStrings({
    ru:{
        label:'Введите Id',
        notFound:'Такого товара еще нет',
        specifications:'Характеристики',
        name:'Название',
        type:'Тип',
        price:'Цена',
        count:'Количество',
        description:'Описание',
        buttonText:'Удалить'
    },
    ar:{
        label:'أدخل المعرف',
        notFound:'لا يوجد مثل هذا المنتج حتى الآن',
        specifications:'المواصفات',
        name:'العنوان',
        type:'النوع',
        price:'السعر',
        count:'الكمية',
        description:'الوصف',
        buttonText:'إزالة'
    }
})
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
            <label>{strings.label}</label>
            <input type={'number'} min={1} onChange={(event)=>{getProduct(event)}}/>
        </div>
        {has?   <form onSubmit={(event)=>sendForm(event)}>
                <div className={'forImage'}>
                    <Image  name={currentProduct.img[0]} alt={'item'} />
                </div>
                <div className={'specifications'}>
                    <h1>{strings.specifications}</h1>
                    <div className={'inputs'}>
                        <div className={'col'}>
                            <div className={'block-input'}>
                                <div className={'inputsTitle'}>{strings.name}</div>
                                {currentProduct.strings.getLanguage()==='ru'?
                                    <div className={'input-block'}><label>RU</label> <input readOnly  value={currentProduct.strings.name} type={"text"} disabled/></div>:
                                    <div className={'input-block'}><label>AR</label> <input  readOnly value={currentProduct.strings.name} type={"text"} disabled/></div>}
                            </div>

                            <div className={'block-input'}>

                                <div className={'inputsTitle'}>{strings.type}</div>
                                {currentProduct.strings.getLanguage()==='ru'?
                                    <div className={'input-block'}><label>RU</label> <input readOnly  type={"text"} value={currentProduct.strings.type} disabled/></div>
                                    :<div className={'input-block'}><label>AR</label> <input readOnly  type={"text"} value={currentProduct.strings.type} disabled/></div>}
                            </div>

                        </div>
                        <div className={'col'}>
                            <div className={'block-input'}>
                                <div className={'inputsTitle'}>{strings.price}</div>
                                <div className={'input-block'}><input readOnly  min={1} type={"number"} value={currentProduct.strings.price} disabled /><span></span></div>
                            </div>

                            <div className={'block-input'}>
                                <div className={'inputsTitle'}>{strings.count}</div>
                                <div className={'input-block'}><input  readOnly  min={1} value={currentProduct.count} type={"number"} disabled/><span></span></div>
                            </div>

                        </div>
                        <div className={'col'}>
                            <div className={'block-input'}>
                                <div className={'inputsTitle'}>{strings.description}</div>
                                { currentProduct.strings.getLanguage()==='ru'?
                                    <div className={'input-block'}><label>RU</label> <input readOnly  value={currentProduct.strings.description} disabled type={"text"} /></div>
                                    :<div className={'input-block'}><label>AR</label> <input readOnly  value={currentProduct.strings.description} disabled type={"text"} /></div>}

                            </div>
                            <Button onClick={()=>1}>{strings.buttonText}</Button>
                        </div>
                    </div>
                </div>
            </form>
            :<div className={'not-found'}>{strings.notFound}</div>}


    </div>

}