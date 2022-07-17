import React, {Component, useEffect, useState} from "react";
import GmailClientId from "./GmailClientId";
import jwtDecode from "jwt-decode";
import {GoogleLogin} from  'react-google-login'
import GoogleButton from 'react-google-button'
import renderButton = google.accounts.id.renderButton;
import {Link} from "react-router-dom";
import {log} from "util";

export const GmailAuth = () =>{
    let user= {};




    const handleCallbackResponse = (response:any)=>{
        console.log('code',jwtDecode(response.credential))
        user = jwtDecode(response.credential)
        console.log(user)
        document.getElementById('g-btn')!.click()
        ;
    }
    useEffect(()=>{
       google.accounts.id.initialize({
           client_id:GmailClientId,
           callback: handleCallbackResponse,

       })
        google.accounts.id.renderButton(
            document.getElementById('g-btn')!,
            {theme: "outline", size:"large",type:"icon",shape:"pill"}
        )

    },[])



    return <Link to={'/'} id={'g-btn'}></Link>



}
