

//  import Code from '../code/code';
// import Result from '../result/result';
// import Header from '../header/header';

// const Homes = () => {
//     return (
//         <>
//             <Header />
//             <Code />
//             <Result />
//         </>
//     )
// }


// export default Homes;

//OR 

import React, { useEffect, useState, createContext } from 'react'
import Header from '../header/header'
import style from '../home/home.module.css'
import Editor from '../editor/Editor'
import { useContext } from 'react'
import { saveAs } from 'file-saver';
import { useRecoilState } from 'recoil'
import { htmlState } from '../recoil/atom'
import { cssState } from '../recoil/atom'
import { jsState } from '../recoil/atom'



export function saveCode(html, css, js) {
  // Save HTML code to file
  const htmlBlob = new Blob([html], { type: 'text/html;charset=utf-8' });
  saveAs(htmlBlob, 'mycode.html');

  // Save CSS code to file
  const cssBlob = new Blob([css], { type: 'text/css;charset=utf-8' });
  saveAs(cssBlob, 'mycode.css');

  // Save JS code to file
  const jsBlob = new Blob([js], { type: 'text/javascript;charset=utf-8' });
  saveAs(jsBlob, 'mycode.js');
}

export default function Homes() {

  const [html, setHtml] = useRecoilState(htmlState);
  const [css, setCss] = useRecoilState(cssState);
  const [js, setJs] = useRecoilState(jsState);
  const [srcDoc, setSrcDoc] = useState("")    //useeffect,usestate({}) 
  const [data, setData] = useState(null)
  console.log(data, "file save krne ke bad")

  console.log("data me value aa rahi hai")
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
    <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
    </html>
`)
      return () => clearTimeout(timeout)
    }, 1500)
  }, [html, css, js])
  //   const {html,setHtml,css,setCss,js,setJs}=useContext(DataContext)

  console.log(js, css, html, "value aa rahi hai")

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
  function saveCode() {
    // Save HTML code to file
    const htmlBlob = new Blob([html], { type: 'text/tag/html;charset=utf-8' });
    saveAs(htmlBlob, 'mycode.html');
    setData(htmlBlob)
    // Save CSS code to file
    const cssBlob = new Blob([css], { type: 'text/css;charset=utf-8' });
    saveAs(cssBlob, 'mycode.css');

    // Save JS code to file
    const jsBlob = new Blob([js], { type: 'text/javascript;charset=utf-8' });
    saveAs(jsBlob, 'mycode.js');
  }







  return (
    <>

      <Header onSave={saveCode} />
    
      <div className={style.editor} style={{ marginTop: "2px" }}>
        <Editor
          heading="HTML"
          icons="/"
          color="red"
          language="xml"
          value={html}
          onChange={setHtml}
          style={{ margin: "0" }}
        />
        {console.log(Editor, "LLll")}
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
          language="jsx"
          value={js}
          onChange={setJs}
        />

      </div>
      <div style={{ backgroundColor: "white", height: "100vh" }}>
        <iframe
          srcDoc={srcDoc}
          title="output"
          height="100%"
          width="100%"


        />
        {console.log(srcDoc)}

      </div>

    </>
  )
}
