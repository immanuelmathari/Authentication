import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({
    token: '',
    isAuthenticated: false,
    authenticate: () => {},
    logout: () => {},
});

function AuthContextProvider({ children }) {
    const [authToken, setAuthToken] = useState();

    // useEffect(() => {
    //     AsyncStorage.getItem('token');
    // }, []);
    // useEffect(() => {
    //     async function fetchToken() {
    //         const storedToken = await AsyncStorage.getItem('token');

    //         if(storedToken) {
    //             setAuthToken(storedToken);
    //         }
    //     }
    //     fetchToken();
    // }, []);

    function authenticate(token) {
        setAuthToken(token);
        AsyncStorage.setItem('token', token);
    }

    function logout() {
        // console.log('youve hit logout')
        setAuthToken(null);
        AsyncStorage.removeItem('token');
    }

    const value = {
        token: authToken,
        isAuthenticated: !!authToken, // converts from truthy to falsy depending on if it authToken is set
        authenticate: authenticate,
        logout: logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContextProvider;