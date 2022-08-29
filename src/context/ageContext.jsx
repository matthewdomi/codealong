import { createContext } from "react"; 




export const AgeContext = createContext({
    age:"0",
});

export const AgeContextProvider = ({children}) => {
    return(
        <AgeContextProvider value={{age : "0"}}>
           {children}
        </AgeContextProvider>

    );
}


