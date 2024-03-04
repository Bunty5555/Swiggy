import { createContext } from "react";

const UserContext = createContext({
  loggedUer: "Default user",
});

export default UserContext;
