import React, {useEffect} from "react";
import GmailClientId from "./GmailClientId";
import jwtDecode from "jwt-decode";
import {Link} from "react-router-dom";
import {useNewUser} from "../../Context/UserContext/UserContext";
interface UserData {
    aud: string,
    azp: string,
    email: string,
    email_verified: boolean,
    exp: number,
    family_name: string,
    given_name: string,
    iat: number,
    iss: string,
    jti: string,
    name: string,
    nbf: string,
    picture: string,
    sub: string
}
export const GmailAuth = () =>{
    const user2 = useNewUser();

    const handleCallbackResponse = (response:any)=>{
        const user = jwtDecode(response.credential) as UserData;
        user2({email:user.email, full_name:user.name, name:user.given_name,picture:user.picture, greeting:false, role:'user'});
        document.getElementById('g-btn')!.click();
    }
    useEffect(()=>{
       google.accounts.id.initialize({
           client_id:GmailClientId,
           callback: handleCallbackResponse,

       })
        google.accounts.id.renderButton(
            document.getElementById('g-btn')!,
            {theme: "outline", size:"large",type:"standard",shape:"pill"}
        )

    },[])

    return <Link to={'/'} id={'g-btn'}></Link>



}



