import React, {useContext, useState} from "react";

const CountItemContext = React.createContext(1);
const SetCountItemContext = React.createContext((count:number)=>{});

export const useCountItem = () =>{
    return useContext(CountItemContext)
}
export const useSetCountItem = () =>{
    return useContext(SetCountItemContext)
}
export const CountItemProvider = ({children}:any) =>{
    const [countItems, setCountItems] = useState(1);

    const setItems = (count:number) =>{
        setCountItems(count)
    }
    return(
        <CountItemContext.Provider value={countItems}>
            <SetCountItemContext.Provider value={setItems}>
                {children}
            </SetCountItemContext.Provider>

        </CountItemContext.Provider>
    )

}