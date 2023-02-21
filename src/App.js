import React from "react";
import HomePage from "./components/HomePage";
import Logout from "./components/Logout";
import Login from "./components/Login";
const App = () => {
  return (
    <div>
      {localStorage.getItem("user") ? <Logout /> : <Login />}
      <HomePage />
    </div>
  );
};

export default App;