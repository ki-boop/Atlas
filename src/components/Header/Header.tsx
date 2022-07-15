import React from "react";
import './Header.scss'
import logo from '../../assets/images/creative-idea.png'
import account from '../../assets/images/account.png'
import basket from '../../assets/images/shopping-bag.png'
import carts from '../../assets/images/carts.png'
import user from '../../assets/images/user.png'
import {Link} from "react-router-dom";
const Header = () =>{
    return(
        <header className={'Header'}>
            <div className={'headerWrapper'}>
                <div className={'logo'}>
                    <img src={logo}/>
                    <div className={'Title'}>Атлас</div>
                </div>
                <div className={'nav-links'}>
                    <nav>
                        <li><Link className={'link'} to={'/'}>Каталог</Link></li>
                        <li><a className={'link'} href={'#'}>Контакты</a></li>
                        <li><a className={'link'} href={'#'}>Доставка</a></li>
                        <li><a className={'link'} href={'#'}>Магазины</a></li>
                        <li><a className={'link'} href={'#'}>Оплата</a></li>
                    </nav>
                </div>

            </div>
            <div className={'userTools'}>
                <div className={''}>
                    <Link className={'link'} to={'/productList'}><img src={carts}/></Link>

                </div>
                <div className={''}>
                    <Link className={'link'} to={'/login'}><img src={user}/></Link>
                </div>
            </div>


        </header>
    )
}





export default Header