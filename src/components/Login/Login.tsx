import React, {useState} from "react";
import Header from "../Header/Header";
import './Login.scss'
export const Login = ()=>{

    const [auth,setAuth]=useState({})
    setAuth((prevState)=>{prevState:{}

    })

    const submitHandler=(event:Event)=>{
        event.preventDefault();
    }


    return (
        <React.Fragment>
            <Header/>
            <div className={'Login'}>
                <div className={'formContainer'}>
                    <div>Вход/Регистрация</div>
                    <form onSubmit={(event)=>submitHandler}>

                    </form>
                </div>

            </div>
        </React.Fragment>

    )
}