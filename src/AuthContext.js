import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { BASE_URL } from "./config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [userInfo, setUserInfo] = useState({});
    const [failLog, setFailLog] = useState(false);

    const login = (Res) => {

        axios.post(`${BASE_URL}/login`, Res)
        .then(res => {
            let userInfo = res.data;
            console.log('then',userInfo);
            setUserInfo(userInfo);
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            setFailLog(false)
        })
        .catch(e => {
            console.log(`Login error : ${e}`);
            setFailLog(true);
        })
    };

return (
    <AuthContext.Provider
        value={{
            userInfo,
            failLog,
            login
        }}>
        {children}
    </AuthContext.Provider>
)
}