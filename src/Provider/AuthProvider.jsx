
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, } from "firebase/auth";
import { useEffect, useState } from "react";
import {  createContext } from "react";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";


export const AuthContext = createContext(null)
const auth = getAuth(app)


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
  const [loading, setLoading] = useState(true)
  const[user, setUser] = useState(null)

  const googleSignIn = ()=> {
    return signInWithPopup(auth, googleProvider)
  }


  const signUp = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const logIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  useEffect(() => {
     const unsubscribe = onAuthStateChanged(auth, loggedUser =>{
      console.log(loggedUser)
      setUser(loggedUser)
      setLoading(false)

     })
     return ()=>{
      unsubscribe();
     }
  },[])

  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }
  

  const authInfo ={
          user,
          signUp,
          logIn,
          logOut,
          googleSignIn,
          loading,
       }

  return (
    <AuthContext.Provider value={authInfo}>
       {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;