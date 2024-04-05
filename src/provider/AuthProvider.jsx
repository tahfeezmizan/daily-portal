import { useContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = useContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const authInfo = {
        user,
    }

    const crateUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;