import LocalizedStrings from "react-localization";
import {useAddProducts} from "./ProductsContext";

export const tempList = [
    {
        id:1,
        count:10,
        img:['default.png'],
        strings: new LocalizedStrings({
            ru:{
                type:'Школа',
                name:'Ручка',
                description:'Это крутая ручка',
                price:100,
            },
            ar:{
                type:'المدرسة',
                name:'قلم',
                description:'هذا هو مقبض بارد',
                price: 6.7
            }
        })
    },
    {
        id:2,
        count: 0,
        img:['default.png'],
        strings: new LocalizedStrings({
            ru:{
                type:'Черчение',
                name:'Карандаш',
                description:'Это Карандаш',
                price:50,
            },
            ar:{
                type:'الرسم الفني',
                name:'قلم رصاص',
                description:'إنه قلم رصاص',
                price:3.4,
            }
        })
    },
    {
        id:3,
        count:100,
        img:['default.png'],
        strings: new LocalizedStrings({
            ru:{
                type:'Черчение',
                name:'Линейка',
                description:'Это линейка',
                price:1000,
            },
            ar:{
                type:'الرسم الفني',
                name:'حاكم',
                description:'هذا هو الحاكم',
                price: 67,
            }
        })
    }
]
