import React from "react";
import {Image} from "../../../UI/Image/Image";
import './AddField.scss'
import {Button} from "../../../UI/Button/Button";
import {useAddProducts, useProducts} from "../../../Context/ProductsContext";
import LocalizedStrings from "react-localization";

export const AddField = ()=>{
    let strings = new LocalizedStrings({
        ru:{
            specifications:'Характеристики',
            name:'Название',
            type:'Тип',
            price:'Цена',
            count:'Количество',
            description:'Описание',
            buttonText:'Добавить товар'
        },
        ar:{
            specifications:'المواصفات',
            name:'العنوان',
            type:'النوع',
            price:'السعر',
            count:'الكمية',
            description:'الوصف',
            buttonText:'إضافة منتج'
        }
    })
    const productList = useProducts()
    let newProduct={
        id: productList.length+1,
        count: 1,
        img:['default.png'],
        strings:{
            ru:{
                type:'',
                name:'',
                description:'',
                price:'',
            },
            ar:{
                type:'',
                name:'',
                description:'',
                price:'',
            }
        }
    }

    const addProduct = useAddProducts()

    const onChangeNameRu = (event:React.FormEvent<HTMLInputElement>)=>{
      newProduct.strings.ru.name=event.currentTarget.value
    }
    const onChangeNameAR = (event:React.FormEvent<HTMLInputElement>)=>{
        newProduct.strings.ar.name=event.currentTarget.value
    }
    const onChangeTypeRu = (event:React.FormEvent<HTMLInputElement>)=>{
        newProduct.strings.ru.type=event.currentTarget.value
    }
    const onChangeTypeAR = (event:React.FormEvent<HTMLInputElement>)=>{
        newProduct.strings.ar.type=event.currentTarget.value
    }
    const onChangePrice = (event:React.FormEvent<HTMLInputElement>)=>{
        newProduct.strings.ru.price=event.currentTarget.value
        newProduct.strings.ar.price=(parseInt(event.currentTarget.value)/15).toString()
    }
    const onChangeCount = (event:React.FormEvent<HTMLInputElement>)=>{
        newProduct.count=parseInt(event.currentTarget.value);

    }
    const onDescriptionTypeRu = (event:React.FormEvent<HTMLInputElement>)=>{
        newProduct.strings.ru.description=event.currentTarget.value
    }
    const onDescriptionTypeAR = (event:React.FormEvent<HTMLInputElement>)=>{
        newProduct.strings.ar.description=event.currentTarget.value
    }
    const onImage = (event:React.FormEvent<HTMLInputElement>)=>{
        if (event.currentTarget.files && event.currentTarget.files[0]) {
            let img = event.currentTarget.files[0];
            newProduct.img=[URL.createObjectURL(img)]

    };
    }

    const sendForm = (event:any)=>{
        event.preventDefault();
        addProduct(newProduct);
        event.currentTarget.reset()
    }
    return <div className={'Field'}>
        <form onSubmit={(event)=>sendForm(event)}>
            <div className={'forImage'}>
                <Image  name={'default.png'} alt={'item'} />
                <input className={'Button'} onChange={(event)=>{onImage(event)}} type={"file"} />
            </div>
            <div className={'specifications'}>
                <h1>{strings.specifications}</h1>
                <div className={'inputs'}>
                    <div className={'col'}>
                        <div className={'block-input'}>
                            <div className={'inputsTitle'}>{strings.name}</div>
                            <div className={'input-block'}><label>RU</label> <input onChange={(event)=>{onChangeNameRu(event)}} type={"text"} required/></div>
                            <div className={'input-block'}><label>AR</label> <input onChange={(event)=>{onChangeNameAR(event)}} type={"text"} required/></div>
                        </div>

                        <div className={'block-input'}>
                            <div className={'inputsTitle'}>{strings.type}</div>
                            <div className={'input-block'}><label>RU</label> <input onChange={(event)=>{onChangeTypeRu(event)}} type={"text"} required/></div>
                            <div className={'input-block'}><label>AR</label> <input onChange={(event)=>{onChangeTypeAR(event)}} type={"text"} required/></div>
                        </div>

                    </div>
                    <div className={'col'}>
                        <div className={'block-input'}>
                            <div className={'inputsTitle'}>{strings.price}</div>
                            <div className={'input-block'}><input onChange={(event)=>{onChangePrice(event)}} min={1} type={"number"} required/><span></span></div>
                        </div>

                        <div className={'block-input'}>
                            <div className={'inputsTitle'}>{strings.count}</div>
                            <div className={'input-block'}><input  onChange={(event)=>{onChangeCount(event)}} min={1} type={"number"} required/><span></span></div>
                        </div>

                    </div>
                    <div className={'col'}>
                        <div className={'block-input'}>
                            <div className={'inputsTitle'}>{strings.description}</div>
                            <div className={'input-block'}><label>RU</label> <input onChange={(event)=>{onDescriptionTypeRu(event)}} type={"text"} required/></div>
                            <div className={'input-block'}><label>AR</label> <input onChange={(event)=>{onDescriptionTypeAR(event)}} type={"text"} required/></div>

                        </div>
                        <Button onClick={()=>1}>{strings.buttonText}</Button>
                    </div>
                </div>
            </div>
        </form>

       </div>

}