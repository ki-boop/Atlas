import React, {useEffect, useState} from "react";
import Header from "../Header/Header";
import './Login.scss'
import { validate } from 'email-validator';
import {Input} from "../../UI/Input/Input";
import {Button} from "../../UI/Button/Button";
import {GmailAuth} from "../../UI/GmailAuth/GmailAuth";
import {Link, useNavigate} from "react-router-dom";
import {} from 'react-router'
import {useUserLogIn} from "../../Context/UserContext/UserContext";


export const Login = ()=>{
    const isLog = useUserLogIn();
    const navigate = useNavigate();
    const [email, setEmail] = useState({
        value: '',
        type: 'email',
        label: 'Email',
        errorMessage: 'Введите корректный email',
        valid: false,
        touched: false,
        validation: {
            required: true,
            email: true
        }
    })
    const [password, setPassword] = useState({
        value: '',
        type: 'password',
        label: 'Пароль',
        errorMessage: 'Длина пароля должна быть больше 6 сиволов',
        valid: false,
        touched: false,
        validation: {
            required: true,
            minLength: 6
        }
    })

    useEffect(()=>{
        if(isLog) navigate('/account')
    })



    const [isFormValid,setIsFormValid] = useState(false)

    const validateControl=(value:any, validation:any)=>{
        if(!validation){
            return true
        }


        let isValid =true
        if(validation.required){
            isValid = value.trim() !== '' && isValid
        }

        if(validation.email){
            isValid = validate(value) && isValid
        }

        if(validation.minLength){
            isValid = value.length >= validation.minLength && isValid
        }

        return isValid
    }


    const submitHandler=(event:Event)=>{
        event.preventDefault();
    }


    const onChangeHandler = (event:React.FormEvent<HTMLInputElement>, controlName:any) =>{
    switch (controlName){
    case 0:{
        setEmail({
            ...email,
            ['value']:event.currentTarget.value,
            ['touched']: true,
            ['valid']: validateControl(event.currentTarget.value, email.validation)
        })

        break
    }

    case 1:{
        setPassword({
            ...password,
            ['value']:event.currentTarget.value,
            ['touched']: true,
            ['valid']: validateControl(event.currentTarget.value, password.validation)
        })
        break
    }

}

        let isFormValid = true;

        [email,password].map((control, index) =>{
            setIsFormValid(control.valid && isFormValid);
        })


    }

    const renderInputs=()=>{

        return [email,password].map((controlName, index)=>{
            const control = [email,password][index];
            return(
                <React.Fragment key={'input-box'+index}>
                    <div className={'user-box'}>
                        <Input
                            type={control.type}
                            value={control.value}
                            valid={control.valid}
                            touched={control.touched}
                            label={control.label}
                            shouldValidate={!!control.validation}
                            errorMessage={control.errorMessage}
                            onChange={(event:React.FormEvent<HTMLInputElement>)=>onChangeHandler(event, index)}
                        />
                    </div>
                </React.Fragment>

            )
        })
    }


    return (
        <React.Fragment>
            <Header/>
            <div className={'Login'}>
                <div className={'formContainer'}>
                    <h1>Вход</h1>
                    <form onSubmit={(event)=>submitHandler}>
                        <div className={'login-box'}>
                            {renderInputs()}
                            <div className={'auth-btn'}>
                                <Link to={'/'}>
                                    <Button onClick={()=>1}>Войти</Button>
                                </Link>
                                <Link to={'/admin'}>
                                    <Button onClick={()=>1}>Админ</Button>
                                </Link>
                                <Link to={'/'}>

                                </Link>
                                <GmailAuth/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>

    )
}



