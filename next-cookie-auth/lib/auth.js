import axios from "axios";
import Router from "next/router";

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

export const getClientSideToken = () => {
  //check if we are in the client
  if (typeof window !== undefined) {
    const user = window[WINDOW_USER_SCRIPT_VARIABLE] || {};
    return { user };
  }
  return { user: {} };
};

export const logoutUser = async () => {
  //check if we are in the client and clear window object
  if (typeof window !== undefined) {
    window[WINDOW_USER_SCRIPT_VARIABLE] = {};
  }
  //send post request to the server in oder to clean cookies
  await axios.post("/api/logout");
  Router.push("/login");
};
//by using higher order function can get context object from getInitialProps()
export const authInitialProps = () => ({ req, res }) => {
  //if we are loading from the server want to execute getServerSideToken()
  const auth = req ? getServerSideToken(req) : getClientSideToken();
  return { auth };
};
