"use client"
import { createContext, useState, useContext } from "react";

const AppContext = createContext(null);
 
export function Appwrapper ({
    children,
  }: {
    children: React.ReactNode
  }) {
{
    const [state,setState]=useState([])
    return (
        <AppContext.Provider value={state}>
            {children}
        </AppContext.Provider>
    )
}
  }
 

export function useAppContext () {
    return useContext(AppContext)
}