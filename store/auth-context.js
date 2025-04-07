import { createContext, useState } from "react";

export const AuthContext = createContext({
    token: '',
    isAuthenticated: false,
    authenticate: () => {},
    logout: () => {},
});

function AuthContextProvider({ children }) {
    const [authToken, setAuthToken] = useState();

    function authenticate(token) {
        setAuthToken(token);
    }

    function logout() {
        // console.log('youve hit logout')
        setAuthToken(null);
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