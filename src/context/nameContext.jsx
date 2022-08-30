import {createContext} from "react";




//Create your context(store)
export const NameContext = createContext({
    name: "Name not provided",

});



//Wrap the topmost component with the context provider
export const NameContextProvider = ({children}) => {
    return(
        <NameContext.Provider  value={{ name: "John Doe"}}>
            {children}
        </NameContext.Provider>

    );
}

export const useNameContext = () => {
    useNameContext(NameContext)
};
