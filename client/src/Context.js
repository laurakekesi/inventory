import { createContext } from "react";

export const Context = createContext();

export const ContextProvider = ({children}) => {

const alphabetize = (a, b) => {
    const nameA = a.itemName.toUpperCase();
    const nameB = b.itemName.toUpperCase();
    // sort in an ascending order
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // names must be equal
    return 0;
}
    return (
        <Context.Provider value = {{alphabetize}}>
            {children}
        </Context.Provider>
        );
};

