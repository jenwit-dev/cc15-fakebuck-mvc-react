const ACCESS_TOKEN = "ACCESS_TOKEN";

const addAccessToken = (token) => localStorage.setItem(ACCESS_TOKEN, token);

const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);

const removeAccessToken = () => localStorage.removeItem(ACCESS_TOKEN);

export { addAccessToken, getAccessToken, removeAccessToken };
