import React from "react";
import Header from "../../components/Header/Header";
import './Account.scss'
import {useUser, useUserLogIn, useUserLogOut} from "../../Context/UserContext/UserContext";
import {useNavigate} from "react-router-dom";
import {OrdersList} from "../../components/Fields/OdersList/OrdersList";
import {Button} from "../../UI/Button/Button";
export const Account = ()=>{
    const userData = useUser();
    const logIn = useUserLogIn();
    const logOut = useUserLogOut()
    const navigate = useNavigate();

    const signOut = () =>{
        logOut()
        navigate('/');
    }

    return(
        <React.Fragment>
            <Header/>

            <div className={'Account'}>
                <div className={'container'}>

                    <div className={'Title'}> Личный кабинет пользователя</div>
                    {logIn?<div className={'user-info'}>
                        <div className={'user-photo'}><img src={userData.picture}/></div>
                        <div className={'user-property'}>
                            <h2>Информация о пользователе</h2>
                            <ul>
                                <li>Имя: {userData.name}</li>
                                <li>Email: {userData.email}</li>
                                <li>Тип пользователя: {userData.role}</li>
                            </ul>
                            <h2>Ваши покупки</h2>
                            <OrdersList render={true}/>
                        </div>
                    </div>:<div>Вы не авторизованы</div>}

                    <div className={'button-containers'}>
                        <Button onClick={signOut}>Выйти</Button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}