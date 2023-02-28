
import  Homes  from './component/homes/homes';
import DataProvider from './component/context/DataProvider';
import {BrowserRouter , Routes,Route} from "react-router-dom"
import Main from './component/main/main';
import Editor from './component/editor/Editor';
import Register from './pages/register/register';
import New from './component/new/new';
import Share from './component/liveshare/share';
function App() {
  return (
    
   
    <DataProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path='/editor' element={<Homes/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
         <Route path='/editor/sharing' element={<Share/>}></Route>
      </Routes>
      </BrowserRouter>    
     
    </DataProvider>
  );
}

export default App;











// import logo from './logo.svg';
// import './App.css';
// import Header from './component/header/header';
// import Home from './component/home/home';

// import Share from './component/liveshare/share';
// import { Toaster } from 'react-hot-toast';
// import {BrowserRouter , Routes,Route} from "react-router-dom"
// import EditorPage from "./component/editorpage/EditorPage"
// import Main from './component/main/main';

// import DataProvider from './component/context/DataProvider';

// function App() {
//   return (
//       <>
//           <div>
//               <Toaster
//                   position="top-right"
//                   toastOptions={{
//                       success: {
//                           theme: {
//                               primary: '#4aed88',
//                           },
//                       },
//                   }}
//               ></Toaster>
//           </div>
//           <BrowserRouter>
//               <Routes>
//                   <Route path="/" element={<Share />}></Route>
//                   <Route
//                       path="/editor/:roomId"
//                       element={<EditorPage />}
//                   ></Route>
//               </Routes>
//           </BrowserRouter>
//       </>
//   );
// }

// export default App;
