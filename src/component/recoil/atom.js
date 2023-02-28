import { atom } from "recoil";


export const users = atom({
    key: "userInfo",
    default: { isUsers: false },
  });

//   export const codeState = atom({
//     key: 'codeState',
//     default: {
//       html: '',
//       css: '',
//       js: ''
//     }
//   });

export const htmlState = atom({
    key: 'htmlState',
    default: '',
  });
  
  export const cssState = atom({
    key: 'cssState',
    default: '',
  });
  
  export const jsState = atom({
    key: 'jsState',
    default: '',
  });
  