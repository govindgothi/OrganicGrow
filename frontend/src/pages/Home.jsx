import React from "react";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Categories } from "../components/Header/Categories.jsx";
import Contact from "../components/Header/Contact.jsx";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Categories></Categories>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export { Home };
