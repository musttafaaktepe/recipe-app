import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { MainContext } from "../../context/context";
import { useContext } from "react";
import Header from "../../components/header/Header";
import SearchForm from "../../components/header/SearchForm";

const Home = () => {
  const {
    data: { userName, user },
  } = useContext(MainContext);

  return (
    <div>
      <Navbar />
      <Header />
      <SearchForm />
      {/* {alert(`Welcome ${userName}`)} */}
    </div>
  );
};

export default Home;
