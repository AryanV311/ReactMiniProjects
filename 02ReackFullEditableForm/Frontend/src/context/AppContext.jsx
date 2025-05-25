import { useState } from "react";
import { createContext } from "react";


export const AppContext =  createContext();

const AppContextProvider = (props) => {
    const [userData, setUserData] = useState("")

    const[token, setToken] = useState(localStorage.getItem("token") ? localStorage.getItem('token'): null)

    
}