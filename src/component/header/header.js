import React,{useEffect, useState} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Account from '../account/account';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import ViewListIcon from '@mui/icons-material/ViewList';
import SettingsIcon from '@mui/icons-material/Settings';

import { AiFillCodepenSquare } from "react-icons/ai";
import CustomButton from '../../atom/custombutton/custombutton';
import { FaPencilAlt } from "react-icons/fa";
import Register from '../../pages/register/register';
import { Dialog } from '@mui/material'
import { AiFillCloseCircle } from "react-icons/ai";
import styled from './header.module.css';
import { useRecoilState } from 'recoil';
import { users } from "../recoil/atom";
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from '../context/DataProvider';
import { myContext } from '../homes/homes';
import { color } from '@mui/system';
import { saveCode } from '../homes/homes';
export default function Header({onSave}){
  const[open,setOpen]=useState(false)
  const[inp,setInp]=useState(false)
  const[input,setInput]=useState("")
  const[name,setName]=useState("")
  const[log,setLog]=useRecoilState(users)
 
  const navigate=useNavigate()
  let path = '/'
  console.log(log.isUsers,"headre")
  function opened(){
    setOpen(true)
  }
  function handExit(){
    setOpen(false)
  }
  function inputopen(){
    setInp(!inp)
  }

  function inputed(e){
    setInput(e.target.value)
  }
  function logOut(){
      navigate(path)
      setLog({isUsers:false})
      
      
  }
  console.log(log.isUsers,"header")
  useEffect(()=>{
    const userData = JSON.parse(localStorage.getItem('userDetails'))
    setName(userData)
  },[])
console.log(name?.Email,"useeffect se aaya data")

const {hide,setHide}=useContext(DataContext)
  function views(){
    setHide(!hide)
    console.log("kkkk")
  }
 
 
    return(
      <>
      <div style={{position:"relative"}}>
        <Box  sx={{ '& button': { m: 1 } }}>
        <AppBar  style={{    background: "linear-gradient(to bottom, #ff3300 0%, #ffccff 100%"}} position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr:22}}
              style={{backgroundColor:"black"}} 
            >
              <Link to='/'><AiFillCodepenSquare style={{color:"white"}} /></Link>
              {name ? name.userName : ""}
              {console.log(name.userName,"======================")}
{/*             
            {inp ? (input, <FaPencilAlt/> ) : "Untitled"}  
           {input>input.length ? "untitled...." : ""}
           {inp ? <input  type="text" value={input} onChange={inputed} className={styled.input}/> : <FaPencilAlt onClick={inputopen}/>}<br/>
         <br/><div className={styled.name}>
         {profile.map((user)=>( 
              <p>{user.handlerName}</p>
             ))}
          </div>  */}
             
            </IconButton>
            <Typography variant="s" component="div" sx={{ flexGrow:2}}>
            
            </Typography>
           
           <Link to='./sharing'> <CustomButton  name="Live Sharing" 
           startIcon={<CloudQueueIcon/>} 
           styling={{backgroundColor:"FloralWhite" ,color:"black",}}  /></Link>
          
            <CustomButton  name="Save" 
             onClick={onSave}
            startIcon={<CloudQueueIcon/>} 
            styling={{backgroundColor:"FloralWhite" ,color:"black",}}  />
            <CustomButton 
            onClick={opened}
            name="Settings" 
            startIcon={<SettingsIcon />} 
            styling={{backgroundColor:"FloralWhite" ,color:"black"}}  />
            <CustomButton onClick={views}
            name={<ViewListIcon />} 
            styling={{backgroundColor:"FloralWhite" ,color:"black"}}  />
             <h4>{name?name.userName:""}</h4>
            <CustomButton onClick={logOut} name="LogOut"
             styling={{backgroundColor:"FloralWhite" ,color:"black"}}  />
            </Toolbar>
      </AppBar>
      
    </Box>
    {open ? (<Dialog open={open}
      PaperProps={{
        style: {
          borderRadius: "20px",
          background: "aquamarine",
          background: "linear-gradient(to bottom left, #ccffff 3%, #ffffff 100%",
          // background: " linear-gradient(to bottom, #000000 9%, #ffffff 100%",
          marginTop:"6rem"
           },
        sx:{width:"90%" ,height:"31rem"}
      }}>
       < AiFillCloseCircle
         
         style={{
          position:'absolute',
           top: '8px',
           right: '20px',
           fontSize:"50px",
           cursor:"pointer",
           color:"white",

         }}
         onClick={handExit}
       />
          <div className={styled.head}>Pen Settings</div> 
       <div className={styled.up}>
   
      <div className={styled.title}>
       
        <p >HTML</p>
        <p>CSS</p>
        <p>JS</p>
        <p>Privacy<button style={{backgroundColor:"yellow",borderRadius:"4px"}}>PRO</button></p>
        <p>PenDetails</p>
        <p>Privacy<button style={{backgroundColor:"yellow",borderRadius:"4px"}}>PRO</button></p>
        <p>Behaviour</p>
        <p>Editor</p>
        
      </div>
      <div className={styled.right}>
        <div className={styled.card}>
          <h2>HTML Settings</h2>
          <h2>CSS Settings</h2>
          <h2>JS Settings</h2>
          </div>
      </div>
      </div>
      <div className={styled.footpart}>
        <div className={styled.foot1}><p>Upgrade to <button style={{backgroundColor:"yellow",borderRadius:"4px"}}>PRO</button>and Unlock Privacy,Custom Thumbnails,Assets Hosting and more.</p>
       
        </div>
        
      </div>
      
     
    </Dialog>): ("")} 
    </div>
    </>
    )
}

// import { AppBar, Toolbar } from "@mui/material"
// import { styled } from '@mui/material/styles';

// const Container = styled(AppBar)`
//     background: #060606;
//     position: static;
//     border-bottom: 1px solid #2f2f2f;
//     height: 9vh;
// `;

// const Header = () => {
//    

//     return (
//         <Container>
//             <Toolbar>
//                 <img src={logo} alt="logo" style={{ width: 40 }} />
//             </Toolbar>
//         </Container>
//     )
// }

// export default Header;