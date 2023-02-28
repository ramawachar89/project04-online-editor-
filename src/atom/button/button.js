import { style } from '@mui/system'
import React from 'react'
import styled from './button.module.css'


function CustomButtons({placeholder,onClick}){
    return(
        <>
    <button  className={styled.btn} placeholder={placeholder} onClick={onClick} style={{style}}>
     {placeholder}
     {onClick}
     {style}
   </button>        
        </>
    )
}
export default CustomButtons