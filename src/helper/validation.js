export const isuserName=(name)=>{
    const regname=/^[A-Za-z][A-Za-z0-9_]{7,29}$/;
    if(regname.test(name)){
        return ""
    }else if(!regname.test(name)){
        return "Invalid Username"
    }
}
export const isuserEmail=(email)=>{
 const regemail=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*(\.\w{2,3})+$/;
 if(regemail.test(email)){
   return ""
 }else if(!regemail.test(email)){
    return "Invalid Email"
 }
}
export const isuserPassword=(password)=>{
    const regepassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,20}$/;
    if(regepassword.test(password)){
        return ""
    }else if(!regepassword.test(password)){
        return "Invalid Password"
    }
}
