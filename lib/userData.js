import React, { useReducer, useContext } from "react";

const UserStateContext = React.createContext();
const UserDispatchContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return action.payload;
    case "LOGOUT":
      return action.payload;
    case "UPDATE":
      return action.payload;
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <UserDispatchContext.Provider value={dispatch}>
      <UserStateContext.Provider value={state}>
        {children}
      </UserStateContext.Provider>
    </UserDispatchContext.Provider>
  );
};

export const useData = () => useContext(UserStateContext);
export const useDispatchUser = () => useContext(UserDispatchContext);
