import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Component/Header";
import UserContext from "./utiles/UserContext";
import { useEffect, useState } from "react";
import appStore from "./utiles/appStore";
import { Provider } from "react-redux";

function App(props) {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "Bunty Ujjainwal1234",
    };
    setUserName(data.name);
  }, []);
  return (
    <div>
      <Provider store={appStore}>
        <UserContext.Provider value={{ loggedUer: userName }}>
          <Header />
          <Outlet />
        </UserContext.Provider>
      </Provider>
    </div>
  );
}

export default App;
