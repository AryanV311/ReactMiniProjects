import axios from "axios";
import { Children, useEffect, useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [userData, setUserData] = useState("");

  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : null
  );

  const loadUserProfileDetails = async() => {
    try {
        const {data} = await axios.get("http://localhost:5000/api/user/get-profile",{headers:{Authorization:`Bearer ${token}`}})
        if(data.success){
            setUserData(data.userData)
        } else{
            toast.error(data.message)
        }
    } catch (error) {
        toast.error(error.message)
    }
  }

  useEffect(() => {
    if(token){    
        loadUserProfileDetails();
    } else {
        setUserData(null)
    }
  },[token])

  const value = {
    userData,
    setUserData,
    token,
    setToken,
  };

  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};
