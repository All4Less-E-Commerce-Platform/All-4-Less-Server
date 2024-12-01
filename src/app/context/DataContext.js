"use client";

import { fetcher } from "@/utils/axios";
import { createContext, useContext, useEffect, useState } from "react";

// Create a Context
const DataContext = createContext();

// Create a Provider
export function DataProvider({ children }) {
  const [productData, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetcher.get("/home");

        if (res.data && res.data.data.length) {
          setData(res.data.data);
        } else {
          setData([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, [setData]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <DataContext.Provider value={{ productData, setData }}>
      {children}
    </DataContext.Provider>
  );
}

// Custom hook to use the context
export function useData() {
  return useContext(DataContext);
}
