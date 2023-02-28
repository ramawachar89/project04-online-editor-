import React from 'react'
import Button from '@mui/material/Button';


export default function CustomButton({name,startIcon,styling,onClick}){
    return(
        <Button styling={{backgroundColor:"FloralWhite" ,color:"black"}}  
        variant="contained" 
        size="large" 
       name={name}
       startIcon={startIcon}
       style={styling}
       onClick={onClick}
         >
       {name}
       
        </Button>
    )
}