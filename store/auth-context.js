import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const AuthContext = createContext({
    token:'',
    isAuthenticated:false,
    authenticate:()=>{},
    logout:()=>{}
});


export default function AuthContextProvider({children}){
    const [authToken,setAuthToken] = useState();

    
    async function authenticate(token){
        setAuthToken(token);
        await AsyncStorage.setItem("token",token);
    }
    function logout(){
        setAuthToken(null);
        AsyncStorage.removeItem("token");
    }
    const value={
        token:authToken,
        isAuthenticated:!!authToken,
        authenticate:authenticate,
        logout:logout
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}