import { createContext, useState } from "react";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = () => {
        return
    };
    const loginUser = () => {
        return
    };
    const loginWithGoogle = () => {
        return
    };
    const logOutUser = () => {
        return
    };
    const updateProfile =  () => {

    }
    const authInfo ={
        createUser,
        loginUser,
        loginWithGoogle,
        logOutUser,
        updateProfile,
        user,
        loading
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;