
import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom'
import {  AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordFill} from "react-icons/ri";
import './login.css'
import { users } from '../../component/recoil/atom';
import { useRecoilState } from 'recoil';
import { toast } from 'react-toastify';


export default function Login() {

  let getData= JSON.parse(localStorage.getItem("userDetails")) 
  console.log(getData , "i am from local") 

  
 

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const[loggedIn,setLoggedIn]=useRecoilState(users)
   console.log(loggedIn.isUsers,"Loginn")
  function handleSubmit(event) {
    event.preventDefault();
    const newARR = getData.filter(x=> x.UserName === userName   && x.Password === password)
    console.log(newARR)
    if(newARR.length === 0){
      toast.warning("user not found")
    }else{
      toast.success("Congratulation Now Start your coding Journey by Clicking On the START CODING", {
        position: toast.POSITION.TOP_CENTER
    });
      setLoggedIn({...loggedIn,isUsers:true})
     
    
    }
   
      
  }

  
  function captUserName(e) {
    setUserName(e.target.value);
  }
  function capturePassword(e) {
    setPassword(e.target.value);
  }

  return (
    <>
    <div className="main">
    <div className="form">
    <form >
      <h1>Login Page</h1>
      
      <div className="email">
      <label style={{fontSize:"2em"}}><AiOutlineUser/></label>
      <input
       style={{backgroundColor:"black", width:"20rem",borderRadius:"20px",padding:"1rem",marginBottom:"0.3rem"}} 
        type="text"
        placeholder="Your User Name"
        value={userName}
        onChange={captUserName}
      />
    
      </div>
      <div style={{display:"flex",justifyContent:"center",alignItem:"center"}} className="email">
      <label style={{fontSize:"2em"}}><RiLockPasswordFill/></label>
      <input
       style={{backgroundColor:"black",  width:"20rem",borderRadius:"20px",padding:"1rem",marginBottom:"0.3rem"}} 
        type="password"
        placeholder="Your Password"
        value={password}
        onChange={capturePassword}
      /> 
     <br/>
      
     
      </div>
     
      
       <br/>
      
      <input  style={{backgroundColor:"white",color:"black",width:"10rem",borderRadius:"20px",padding:"1rem",marginLeft:"3rem",marginBottom:"0.3rem"}}  className="loginBtn" onClick={handleSubmit} type="button" value="SUBMIT" />
      <p >New User ? <Link to='/register'>Registration</Link> </p>
      </form>
    
      </div> 
      </div>
</>
  );
}

