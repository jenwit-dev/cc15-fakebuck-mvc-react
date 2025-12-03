import { createContext, useState } from "react";
import axios from "../config/axios";
import { addAccessToken } from "../utils/local-storage";

const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState({});

  // credential = { username, password }
  const login = async (credential) => {
    // console.log(credential);
    try {
      const { data } = await axios.post("/auth/login", credential);
      addAccessToken(data.accessToken);
      setAuthUser(data.user);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthContext.Provider value={{ login, authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext };
