import { createContext, useState } from 'react';


export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
    
    const [html, setHtml] = useState('');
    const [js, setJs] = useState('');
    const [css, setCss] = useState('');
    const[hide,setHide] = useState(false)

    return (
        <DataContext.Provider value={{
            html,
            setHtml,
            css,
            setCss,
            js,
            setJs,
            hide,
            setHide
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;