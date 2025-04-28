import { createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../SERVICES/firebase";

export const Usercontext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

   

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); 
  }, []);

  return (
    <Usercontext.Provider value={{ user, setUser}}>
      {children}
    </Usercontext.Provider>
  );
};
