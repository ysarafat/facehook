import { useReducer } from "react";
import { ProfileContext } from "../context";
import { initialState, profileReducer } from "../reucers/ProfileReducers";

export default function ProfileProvider({ children }) {
  const [state, dispatch] = useReducer(profileReducer, initialState);

  return (
    <ProfileContext.Provider value={{ state, dispatch }}>
      {children}
    </ProfileContext.Provider>
  );
}
