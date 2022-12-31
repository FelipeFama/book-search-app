import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <Navbar />
      <article className="header-content flex flex-c text-center text-white">
        <h2 className="header-title text-capitalize">
          find your book of choice
        </h2>
        <br />
        <p className="header-text fs-18 w-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eos
          facilis quisquam eveniet! Repellat facere sed tenetur nulla debitis
          laudantium, itaque esse optio natus magnam, eum qui ullam fugiat unde?
        </p>
        <SearchForm />
      </article>
    </header>
  );
};

export default Header;
