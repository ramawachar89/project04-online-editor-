
import React from 'react';
import { useState ,useEffect } from 'react';
import {Link} from 'react-router-dom'
import RegisterStyle from './register.module.css'
import { AiOutlineMail ,AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordFill} from "react-icons/ri";
import { Dialog } from '@mui/material';
import {users} from '../../component/recoil/atom'
import { useRecoilState } from 'recoil';
import { toast } from 'react-toastify';
export default function Register() {
    const[open,setOpen]=useState(true)
  // useEffect(()=>{
  //   if(localStorage.getItem("userDetails")){
  //     let data= JSON.parse(localStorage.getItem("userDetails"))
  //     setData(data)
  //     console.log(data)
  //   }
  //   },[])
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [EM, setEM] = useState('');
  const [PW, setPW] = useState('');
  const [US, setUS] = useState('');
  const [show, setShow] = useState(false);
  const [data ,setData]= useState([])
  const [loggedIn, setLoggedIn] = useRecoilState(users);
console.log(loggedIn.isUsers,"Registr")
console.log("something happen")

  function captureEmail(e) {
    setEmail(e.target.value);
    const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;    
    if (regEmail.test(email)) {
      setEM('');
    } else if(!regEmail.test(email) && email !== " "){
      setEM("Email is Not Valid");
    }else{
      setEM('');
    }
  }
  function captUserName(e) {
    setUserName(e.target.value);
    const userRegEx = /\s/g;
    if (userRegEx.test(!userName) ) {
      setUS('');
    }  else if(userRegEx.test(userName) && userName !== ""){
      setUS('UserName is not Valid');
    }else{
      setUS('');
    }
  }
  function capturePassword(e) {
    setPassword(e.target.value);
    const pwRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,20}$/;
    if (pwRegEx.test(password)) {
      setPW('');
    } else if(!pwRegEx.test(password) && password === " "){
      setPW("pw is Not Valid");
    
    } else  {
      setPW('');
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    //===================email

   
    //=============username
    

    //==================password
   
    if(email === "" || userName === "" || password=== ""){
      toast.info("please enter something")
    }else if(EM === "EMAIL IS NOT VALID" || PW === "pw is Not Valid" || US === 'UserName is not Valid'){
      toast.info("you have enter wrong details")
    
    }else{
    const userData= {Email :email , UserName : userName , Password : password,isUsers: loggedIn.isUsers,}
    data.push(userData)
    setData([...data])
    setLoggedIn({...loggedIn,isUsers:false})

   console.log(data)  
    if(show=== true){
      setShow(false)
    }else{
      setShow(true)
      
      toast.success(`${userName.toUpperCase()} 👍 You Have Successfully Register`, {
        position: toast.POSITION.TOP_CENTER
    });
    }
  }
  localStorage.setItem("userDetails" , JSON.stringify(data))
 
  
  setEmail("")
  setUserName("")
  setPassword("")
  setEM("")
  setPW("")
  setUS("")
  }
  
  return (
    <>
  

    <div className={RegisterStyle.main}>
      <div className={RegisterStyle.form}>
      <form >
      {show?<p>{`${userName.toUpperCase()} 👍 You Have Successfully Register`}</p> : "" }
        <h1>Registration Page</h1>
        <div className={RegisterStyle.email}>
      
        <input
         style={{backgroundColor:"black", width:"20rem",borderRadius:"20px",padding:"1rem",marginBottom:"0.3rem"}} 
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={captureEmail}
        />
        </div>
        <p>{EM}</p>
        <div className={RegisterStyle.email}>
       
        <input
         style={{backgroundColor:"black", width:"20rem",borderRadius:"20px",padding:"1rem",marginBottom:"0.3rem"}}
          type="text"
          placeholder="Your User Name"
          value={userName}
          onChange={captUserName}
        />
        </div>
        <p>{US}</p>
        <div className={RegisterStyle.email}>
        
      <input
         style={{backgroundColor:"black", width:"20rem",borderRadius:"20px",padding:"1rem",marginBottom:"0.3rem"}}
          type="password"
          placeholder="Your Password"
          value={password}
          onChange={capturePassword}
        />
        </div>
        <p>{PW}</p>
        <input className={RegisterStyle.btn}  style={{backgroundColor:"green", width:"10rem",borderRadius:"10px",marginBottom:"0.3rem",marginLeft:"1rem"}} onClick={handleSubmit} type="button" value="SUBMIT" />
        <p className={RegisterStyle.loginLink}>Already Registered ? <Link to='/login'>Login</Link> </p>
       
    
      </form>
    </div>
    </div>
  
</>


  );
}




































































// import React,{useState} from 'react'
// import CustomInput from '../../atom/input/input'
// import CustomButtons from '../../atom/button/button'
// import { isuserName ,isuserEmail,isuserPassword} from '../../helper/validation'
// import { useContext } from 'react'
// import {DataContext} from '../context/DataProvider'
// import { Dialog } from '@mui/material'
// import styled from './register.module.css'
// import CustomButton from '../../atom/custombutton/custombutton';
// import { TfiTwitter} from "react-icons/tfi";
// import { FaFacebookSquare } from "react-icons/fa";
// import { BsGithub } from "react-icons/bs";
// function Register(){
//     const[name , setName]=useState("")
//     const[email , setEmail]=useState("")
//     const[password , setPassword]=useState("")
//     const[nameerror , setnameerror]=useState("")
//     const[emailerror , setemailerror]=useState("")
//     const[passworderror , setpassworderror]=useState("")
//     const[data, setData]=useState([])
    
//     function captureName(e){
//        setName(e)
//        const namevalidate=isuserName(name)
//        setnameerror(namevalidate)
//     }
//     function captureEmail(e){
//         setEmail(e)
//         const emailvalidate=isuserEmail(email)
//         setemailerror(emailvalidate)
//      }
    
//      function capturePassword(e){
//         setPassword(e)
//         const passwordvalidate=isuserPassword(password)
//         setpassworderror(passwordvalidate)
//      }
//      function handleSubmit(e){
//         e.preventDefault();  //you stop the refresh page again and again
//         if(name==="" || email==="" || password===""){
//             alert("Enter something")
        
//     }else if(nameerror=="Invalid username"|| emailerror=="Invalid Email" || passworderror=="Invalid Password"  ){
//         alert("you have Enter wrong details")
//     }else{
//         const userData={name:name, Email:email, password:password}
//         data.push(userData)
//  }

//         localStorage.setItem("userInfo",JSON.stringify(data))
//         console.log(data)
//       }
//     return(
//         <>
//         <div className={styled.account}>
//             <h1>Create Account</h1>
//             <CustomButton 
//             startIcon={<TfiTwitter/>}
//             name="Sign up With Twitter"
//             styling={{backgroundColor:"skyblue",width:"28rem",borderRadius:"20px",padding:"1rem",marginBottom:"1rem"}}
//             />
//              <CustomButton 
//              startIcon={<BsGithub/>}
//             name="Sign up With Git Hub"
//             styling={{backgroundColor:"gray",width:"28rem",borderRadius:"20px",padding:"1rem",marginBottom:"1rem"}}
//             />
//              <CustomButton 
//              startIcon={<FaFacebookSquare/>}
//             name="Sign up With Facebook"
//             styling={{backgroundColor:"grayblue",width:"28rem",borderRadius:"20px",padding:"1rem",marginBottom:"1rem"}}
//             />
//         </div>
//         <h4 style={{marginLeft:"1rem"}} >Or,</h4>
       
//         <div className={styled.main}>
//         <CustomButton name="sign up With Email"
//          styling={{backgroundColor:"black",width:"28rem",borderRadius:"20px",padding:"1rem",marginBottom:"1rem"}}
//         />
//          <CustomInput 
//          placeholder="Enter Name" 
//          type="text"
//          onChange={captureName}
//          style={{width:"20rem",borderRadius:"20px",padding:"1rem",marginBottom:"1rem"}}
//          />
//         {nameerror}
        
//          <CustomInput 
//          placeholder="Email" 
//          type="text"
//          onChange={captureEmail}
//          style={{width:"20rem",borderRadius:"20px",padding:"1rem",marginBottom:"1rem"}}
//          />
//          {emailerror}
//          <CustomInput 
//          placeholder="password"
//         type="password"
//         onChange={capturePassword}
//         style={{width:"20rem",borderRadius:"20px",padding:"1rem",marginBottom:"1rem"}}
//        />
//         {passworderror}
//         <CustomButtons

//         placeholder="Submit"
//         onClick={handleSubmit}
       
//         />
//          </div>
        
 
//         </>
//     )
// }

// export default Register;