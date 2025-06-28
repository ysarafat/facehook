import { useContext, useDebugValue } from "react";
import { AuthContext } from "../context";

export const useAuth = () => {
  const { auth } = useContext(AuthContext);

  // Use useDebugValue to provide a label for the auth state in React DevTools
  useDebugValue(auth, (auth) =>
    auth?.user ? "Authenticated" : "Not Authenticated"
  );

  return useContext(AuthContext);
};
