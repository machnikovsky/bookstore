import axios from "axios";
import authHeader from "./AuthHeader";

const API_URL = "http://localhost:8080/auth/";

const register = (username,
                  email,
                  password,
                  firstName,
                  lastName,
                  phoneNumber,
                  gender

) => {
  return axios.post(API_URL + "register", {
    username,
    email,
    password,
    firstName,
    lastName,
    phoneNumber,
    gender
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "authenticate", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.jwt) {
        localStorage.setItem("JwtToken", JSON.stringify(response.data));
      }
      return response.data;
    })
    .catch((e) => {
      console.log('[Auth.js, Login] Got error: ', e.response.data);
    });
};

const logout = () => {
  localStorage.removeItem("JwtToken");
};

const getCurrentUser = () => {
  return axios.get(API_URL + 'username', { headers: authHeader() })
  .then(res => {
    return res.data;
  })
  .catch(err => {
    console.log("Error getting username: ", err.message)
  })
  ;
};

const Auth = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default Auth;