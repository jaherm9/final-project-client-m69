import { AuthContext } from "../Context/AuthProvider/AuthProvider";
import React, { useContext } from "react";

const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};
export default useAuth;
