import React, { useContext } from "react";
import { AuthContex } from "./UseContex/AuthProviders";

const Home = () => {
    const user = useContext(AuthContex)
  return (
    <div>
    <h1>this {user && <span>{user.Name}</span>} </h1>
    </div>
  );
};

export default Home;
