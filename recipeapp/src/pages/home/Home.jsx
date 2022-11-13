import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { MainContext } from "../../context/context";
import { useContext } from "react";

const Home = () => {
  const {
    data: { userName, user },
  } = useContext(MainContext);
 
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default Home;
