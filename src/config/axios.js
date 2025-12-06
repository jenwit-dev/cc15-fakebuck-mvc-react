import axios from "axios";
import { BACKEND_URL } from "./env";
import { getAccessToken, removeAccessToken } from "../utils/local-storage";

axios.defaults.baseURL = BACKEND_URL;

axios.interceptors.request.use((config) => {
  const token = getAccessToken();

  // If token exists (string), add Authorization header
  // If token does not exist (null) like Bearer null of P Earth, do nothing
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    // If response status is 401 (Unauthorized), remove token and redirect to login page
    // console.dir(error);
    if (error.response.status === 401) {
      removeAccessToken();
      window.location.href = "/login";
    }
    // the calling function means the function that called axios (e.g., fetchAuthUser() in AuthContextProvider)
    // Return any other error to the calling function
    // Promise.reject() will trigger the catch block
    // Promise.resolve() will trigger the then block
    // Promise.reject() is used here to propagate the error (passing the error to the next catch block of the promise chain (pass the error object to the catch block of fetchAuthUser()) )
    // so that the calling function can handle it
    // Promise.reject() creates a promise that is rejected with a given reason
    // Promise.resolve() creates a promise that is resolved with a given value
    // Here, we want to propagate the error, so we use Promise.reject()
    // Promise.reject(error) means the promise is rejected with the error object
    // Propagating the error means passing the error to the next catch block in the promise chain
    // In short, if error is 401 like TokenExpiredError or JsonWebTokenError such as invalid token or jwt malformed , we handle it here (remove token and redirect to login page)
    // For other errors, we propagate (pass) the error to the calling function to handle the error as usual
    // fetchAuthUser in AuthContextProvider is to verify token whether the user is already logged in or not
    return Promise.reject(error);
  }
);

export default axios;
