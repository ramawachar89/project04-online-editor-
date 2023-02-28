import React,{useState} from 'react'
import CustomInput from '../../atom/input/input'
import CustomButtons from '../../atom/button/button'
import { isuserName ,isuserEmail,isuserPassword} from '../../helper/validation'
import { useContext } from 'react'
import {DataContext} from '../context/DataProvider'
import { Dialog } from '@mui/material'
import styled from './account.module.css'
import CustomButton from '../../atom/custombutton/custombutton';
import { TfiTwitter} from "react-icons/tfi";
import { FaFacebookSquare } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { useNavigate ,Link} from "react-router-dom";
function Account(){
    const navigate = useNavigate();
  const route = () => {
    let path = "/register";
    navigate(path);
  };
    return(
        <>
        <div className={styled.account}>
            <h1>Create Account</h1>
            <CustomButton 
            startIcon={<TfiTwitter/>}
            name="Sign up With Twitter"
            styling={{backgroundColor:"skyblue",width:"28rem",borderRadius:"20px",padding:"1rem",marginBottom:"1rem"}}
            />
             <CustomButton 
             startIcon={<BsGithub/>}
            name="Sign up With Git Hub"
            styling={{backgroundColor:"gray",width:"28rem",borderRadius:"20px",padding:"1rem",marginBottom:"1rem"}}
            />
             <CustomButton 
             startIcon={<FaFacebookSquare/>}
            name="Sign up With Facebook"
            styling={{backgroundColor:"grayblue",width:"28rem",borderRadius:"20px",padding:"1rem",marginBottom:"1rem"}}
            />
        </div>
        <h4 style={{marginLeft:"1rem"}} >Or,</h4>
       
        <div className={styled.main}>
       <Link to='./register'> <CustomButton name="sign up With Email"
         styling={{backgroundColor:"black",width:"28rem",borderRadius:"20px",padding:"1rem",marginBottom:"1rem"}}
        onClick={route}
        /></Link>
        </div>
        </>
    )
}
export default Account;