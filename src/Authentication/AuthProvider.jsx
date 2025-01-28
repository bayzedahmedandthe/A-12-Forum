import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase.config";
import useAxiospublic from "../Hooks/useAxiospublic";


export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const axiosPublic = useAxiospublic();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    };
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    };
    const loginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    };
    const logOutUser = () => {
        setLoading(true);
        return signOut(auth);
    };
    const updateUserProfile =  (name, photo) => {
        console.log({name, photo});
        setLoading(true);
        
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    };
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            if(currentUser){
                const userInfo = {email: currentUser?.email}
                axiosPublic.post("/jwt", userInfo)
                .then(res => {
                    if(res.data.token){
                        localStorage.setItem("access-token", res.data.token)
                    }
                })
            }
            else{
                localStorage.removeItem("access-token")
            }
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [axiosPublic]);
    const authInfo ={
        createUser,
        loginUser,
        loginWithGoogle,
        logOutUser,
        updateUserProfile,
        user,
        setUser,
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