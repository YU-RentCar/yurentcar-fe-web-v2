import { useState } from "react";
import { Cookies } from "react-cookie";

export const useCookie = function () {
  const [cookies, setCookies] = useState(new Cookies());

  // controller
  const cookie = {};

  // getCookie
  cookie.getCookie = (name) => {
    return cookies.get(name);
  };

  return cookie;
};
