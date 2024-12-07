import {useState, createContext, useContext} from "react";
import facade from "../apiFacade";

const AuthContext = createContext(null);

export function AuthProvider({children}) {
    const token = facade.getToken();
    const userFromToken = token ? facade.readJwtToken(token) : {username: "", roles: []};
    const [user, setUser] = useState(userFromToken); 
    const [loggedIn, setLoggedIn] = useState(() => !!token); // !! converts to boolean

    const login = (user, password) => {
        try{
            facade.login(user, password, setUser);
            setLoggedIn(true);
        } catch (error) {
            console.log('login failed. Error: ', error);
            throw error;
        }
    }

    const logout = () => {
        facade.logout();
        setUser({username: "", roles: []});
        setLoggedIn(false);
    }

    return (<>
    <AuthContext.Provider value={{user, setUser, login, logout,  loggedIn, setLoggedIn }}>
        {children}
    </AuthContext.Provider>
    </>);
    
}

export function useAuth() {
    const {user, login, logout, loggedIn } = useContext(AuthContext); // the value of the AuthContext.Provider is {user}
    if (user === undefined) {
        throw new Error('useAuth must be used within a AuthProvider');
    }

    return {user, login, logout, loggedIn }; // {user: {username: "", roles: []}}
}