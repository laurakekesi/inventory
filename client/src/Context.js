import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [allInventory, setAllInventory] = useState(null);
  const [inventoryAction, setInventoryAction] = useState(true)

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
  };


  useEffect(() => {
    fetch("/api/items")
      .then((res) => res.json())
      .then((data) => setAllInventory(data.data.sort(alphabetize)))
      .catch((err) => console.log(err));
  }, [inventoryAction]);

  return (
    <Context.Provider value={{ alphabetize, allInventory, setInventoryAction, inventoryAction }}>
      {children}
    </Context.Provider>
  );
};
