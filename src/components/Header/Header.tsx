import React, {useEffect} from "react";
import './Header.scss';
import logo from '../../assets/images/creative-idea.png';
import carts from '../../assets/images/carts.png';
import user from '../../assets/images/user.png';
import moon from '../../assets/images/moon.png';
import sun from '../../assets/images/sun.png';
import {Link, Navigate, useNavigate} from "react-router-dom";
import LocalizedStrings from 'react-localization';
import {useUser, useUserLogIn} from "../../Context/UserContext/UserContext";
import {useAddProducts} from "../../Context/ProductsContext";
import {useTheme} from "../../OwnHooks/useTheme";



let strings = new LocalizedStrings({
    ru:{
        logo: 'Атлас',
        link0: 'Каталог',
        link1: 'Контакты',
        link2: 'Доставка',
        link3: 'Магазины',
        link4: 'Оплата'
    },
    ar:{
        logo: 'Atlas',
        link0: 'الكتالوج',
        link1: 'جهات الاتصال',
        link2: 'التسليم',
        link3: 'المحلات التجارية',
        link4: 'الدفع'
    }
})


const Header = () =>{
    const {theme, setTheme} = useTheme()
    const isLog = useUserLogIn();
    useEffect(()=>{
        strings.setLanguage(navigator.language)
    })

    const isLogIn = () =>{
        if(isLog) return '/account'
        return '/login'
    }

    const handleLightThemeClick = () =>{
        setTheme('light')
    }
    const handleDarkThemeClick = () =>{
        setTheme('dark')
    }



    return(
        <header className={'Header'}>
            <div className={'headerWrapper'}>
                <div className={'logo'}>
                    <img src={logo}/>
                    <div className={'Title'}>{strings.logo}</div>
                </div>
                <div className={'nav-links'}>
                    <nav>
                        <li><Link className={'link'} to={'/'}>{strings.link0}</Link></li>
                        <li><a className={'link'} href={'#'}>{strings.link1}</a></li>
                        <li><a className={'link'} href={'#'}>{strings.link2}</a></li>
                        <li><a className={'link'} href={'#'}>{strings.link3}</a></li>
                        <li><a className={'link'} href={'#'}>{strings.link4}</a></li>
                    </nav>
                </div>

            </div>
            <div className={'userTools'}>
                <div className={''}>
                    <Link className={'link'} to={'/cart'}><img src={carts}/></Link>
                </div>
                <div className={''}>
                        <Link className={'link'} to={isLogIn()} ><img src={user}/></Link>
                </div>
                <div className={'sun'}>
                    <img onClick={handleLightThemeClick} src={sun}/>
                </div>
                <div className={'moon'}>
                    <img onClick={handleDarkThemeClick} src={moon}/>
                </div>
            </div>


        </header>
    )
}





export default Header