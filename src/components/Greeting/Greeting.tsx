import React, {useContext} from "react";
import './Greeting.scss'
import {UserProvider, useUser} from "../../Context/UserContext/UserContext";


export const Greeting = () =>{
    let cls = ['Greeting','appear']
    const user = useUser();


    const getName=()=>{
        return user.name===undefined? 'новый пользователь': user.name;
    }

    const closeGreeting=()=>{
        cls = ['Greeting','disappear']
        document.querySelector('.Greeting')!.className=cls.join(' ')
        user.greeting=true;
    }
    return(
        <React.Fragment>
            <div className={cls.join(' ')}>
                <div className={'Title'}>Добро пожаловать, {getName()}</div>
                <div className={'close'} onClick={closeGreeting}>&#10006;</div>
            </div>
        </React.Fragment>

    )

}