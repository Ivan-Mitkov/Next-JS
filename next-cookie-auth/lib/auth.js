import axios from "axios";

//to pass the cookies into backend we need this configuration
axios.defaults.withCredentials = true;

const WINDOW_USER_SCRIPT_VARIABLE = "__USER__";
export const getUserScript = user => {
  //need to declare what the property on the window will be
  //its name must NOT conflict with the other property on the window object
  return `${WINDOW_USER_SCRIPT_VARIABLE}=${JSON.stringify(user)};`;
};

export const loginUser = async (email, password) => {
  const response = await axios.post("/api/login", { email, password });
  //write response data on created window property __USER__
  if (typeof window !== undefined) {
    window[WINDOW_USER_SCRIPT_VARIABLE] = response.data || {};
  }
  // console.log(response.data)
};
export const getUserProfile = async () => {
  const { data } = await axios.get("/api/profile");
  // console.log('getUserProfile data : ',data)
  return data;
};

//get cookie server side
export const getServerSideToken = req => {
  const { signedCookies = {} } = req;
  if (!signedCookies) {
    return {};
  } else if (!signedCookies.token) {
    return {};
  }
  return { user: signedCookies.token };
};
