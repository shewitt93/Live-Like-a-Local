import axios from "axios";

const TOKEN_KEY = localStorage.getItem("token");

export const isLogin = () => {
  if (TOKEN_KEY !== "undefined" && TOKEN_KEY !== null) {
    return true;
  }
  return false;
};

const fbLogin = async (accesstoken) => {
  let res = await axios.post(
    "http://localhost:8000/models/rest-auth/facebook/",
    {
      access_token: accesstoken,
    }
  );
  console.log(res);
  return await res.status;
};

export default fbLogin;
