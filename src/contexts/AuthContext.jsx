import { createContext, useEffect, useState } from "react";
import axios from "../config/axios";
import { addAccessToken, getAccessToken } from "../utils/local-storage";

const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  // authUser === null means user not logged in
  // authUser: { id, name, email, ... } user is already logged in
  const [authUser, setAuthUser] = useState(null);

  // useEffect option 1 (with async/await)
  // useEffect to fetch authenticated user info when the component mounts
  // useEffect(() => {
  //   // Without axios interceptor, we need to manually add Authorization header
  //   // axios.get("/auth/me", {
  //   //   headers: { Authorization: `Bearer ${getAccessToken()}` },
  //   // });

  //   // With axios interceptor and with token in local storage,
  //   // the Authorization header is automatically added
  //   // Do not make effect fn async directly, so define an inner async fn (wrapper async fn inside effect fn of useEffect)

  //   const fetchAuthUser = async () => {
  //     try {
  //       if (getAccessToken()) {
  //         const { data } = await axios.get("/auth/me");
  //         setAuthUser(data.user);
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchAuthUser();
  // }, []);

  // useEffect option 2 (with .then/.catch)
  useEffect(() => {
    if (getAccessToken()) {
      axios.get("/auth/me").then((res) => {
        setAuthUser(res.data.user);
      });
      // .finally(() => {
      //   setInitialLoading(false);
      // });
    }
    // else {
    //   setInitialLoading(false);
    // }
  }, []);

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
