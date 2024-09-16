import React, { createContext, useState, useEffect } from "react";
import fakedata from "../fakeData.json";

export const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(fakedata);
  }, []);

  return <ItemsContext.Provider value={{ items, setItems }}>{children}</ItemsContext.Provider>;
};
