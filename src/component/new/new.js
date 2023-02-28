
import React,{useEffect, useState} from 'react'
import Header from '../header/header'
import style from './new.module.css'
import Editor from '../editor/Editor'
import {useContext} from 'react'
import { saveAs } from 'file-saver';
import { useRecoilState } from 'recoil'
import { htmlState } from '../recoil/atom'
import { cssState } from '../recoil/atom'
import { jsState } from '../recoil/atom'

import Login from '../../pages/login/login'
import MyComponent from '../getData/getdata'
export default function New() {
    
  const [html, setHtml] = useRecoilState(htmlState);
  const [css, setCss] = useRecoilState(cssState);
  const [js, setJs] = useRecoilState(jsState);
  const[srcDoc,setSrcDoc]=useState("")    //useeffect,usestate({}) 
 

console.log("data me value aa rahi hai")
useEffect(()=>{

})

function saveCode(){
    localStorage.setItem("codes",JSON.stringify() || [])
    
}
  

  useEffect(()=>{
  const timeout=setTimeout(()=>{
    setSrcDoc(`
    <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
    </html>
`)
return ()=> clearTimeout(timeout)
  },2500)
  },[html,css,js])
//   const {html,setHtml,css,setCss,js,setJs}=useContext(DataContext)
  
console.log(js,css,html,"value aa rahi hai")

// function saveCode() {
//     const code = `
//   <html>
//   <head>
//     <meta charset="UTF-8">
//     <title>My Code</title>
//   </head>
//   <body>
//     ${html}
//     <style>
//       ${css}
//     </style>
//     <script>
//       ${js}
//     </script>
//   </body>
//   </html>`;
  
//     const blob = new Blob([code], { type: 'text/html;charset=utf-8' });
//    saveAs(blob)
    
//   }




  

    return (
        <>
      
            <div className={style.mains}>
            <div className={style.editor} style={{ marginTop: "2px" }}>
                <Editor
                    heading="HTML"
                    icons="/"
                    color="red" 
                    language="xml"
                    value={html}
                    onChange={setHtml}
                
                    />
                {console.log(Editor,"LLll")}
                <Editor
                 heading="CSS"
                  icons="*" 
                  color="skyblue"
                  language="css" 
                  value={css}
                  onChange={setCss}
                  
                  />

                <Editor
                 heading="JS" 
                 icons="()" 
                 color="yellow" 
                 language="javascript"
                 value={js}
                 onChange={setJs}
                 />
               
            </div>
         <div className={style.output} style={{backgroundColor:"white",height:"100vh"}}>
            <iframe
            srcDoc={srcDoc }
            title="output"
             height="100%"
             width="100%"
            
             
            />
           {console.log(srcDoc)}
          </div>
         </div>
       
        </>
    )
}