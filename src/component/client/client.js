import React from "react";
import Avatar  from "react-avatar"
import  './client.css'
function Client({username}){
    return(
        <div className="client">   
            <Avatar size={50} round="14px" name={username}/>   
           <span className="userName">{username}</span> 
        </div>
    )
}
export default Client;