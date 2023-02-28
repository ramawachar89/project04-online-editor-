// import React,{useEffect, useState} from 'react'
// import Header from '../header/header'
// import style from './home.module.css'
// import Editor from '../Editor/Editor'
// import {useContext} from 'react'
// import { DataContext } from '../data/context'
// import Results from '../result/results'
// import Register from '../register/register'
// import Login from '../login/login'

// export default function Home() {
    
//   const[html,setHtml] = useState("") 
//   const[js,setJs] = useState("")
//   const[css,setCss]=useState("")
//   const[srcDoc,setSrcDoc]=useState("")
//    const[data,setData]=useState()


  

//   useEffect(()=>{
//     setSrcDoc(`
//         <html>
//             <body>${html}</body>
//             <style>${css}</style>
//             <script>${js}</script>
//         </html>
//     `)
//   },[html,css,js])
// //   const {html,setHtml,css,setCss,js,setJs}=useContext(DataContext)
//   // function handleHtml(e){
//   //   sethtml(e.target.value)
//   // }


// //   function htmlchange(e){
// //     setHtml(e.target.value)
    
// //   }
// //   console.log(html)
// //   function csschange(e){
// //     setCss(e.target.value)
// //   }
// //   function jschange(e){
// //     setjs(e.target.value)
// //   }
// console.log(js,css,html,"value aa rahi hai")

//     return (
//         <>
//             <Header />
//             <div className={style.editor} style={{ marginTop: "2px" }}>
//                 <Editor
//                     heading="HTML"
//                     icons="/"
//                     color="red" 
//                     language="xml"
//                     value={html}
//                     onChange={setHtml}
//                     style={{margin:"0"}}
//                     />
//                 {console.log(Editor,"LLll")}
//                 <Editor
//                  heading="CSS"
//                   icons="*" 
//                   color="skyblue"
//                   language="css" 
//                   value={css}
//                   onChange={setCss}
//                   />

//                 <Editor
//                  heading="JS" 
//                  icons="()" 
//                  color="yellow" 
//                  language="javascript"
//                  value={js}
//                  onChange={setJs}
//                  />
               
//             </div>
//          <div>
//             <iframe
//             srcDoc={srcDoc }
//             title="output"
//              height="100%"
//              width="100%"
//              color='white'
//             />
//            {console.log(srcDoc)}
           
//          </div>
       
//         </>
//     )
// }