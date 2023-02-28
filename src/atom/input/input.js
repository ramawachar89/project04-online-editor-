import React from 'react'


function CustomInput({placeholder,type,onChange,style}){
    return(
        <input placeholder={placeholder} type={type} onChange={(e)=>onChange(e.target.value)} style={style}/>
    )
}
export default CustomInput