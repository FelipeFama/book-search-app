import React from "react";
import aboutImg from "../../assets/book-shelf.jpg";
import "./About.css";

export const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
        </div>

        <div className="about-content grid">
          <figure className="about-img">
            <img src={aboutImg} alt="library stand" />
          </figure>
          <article className="about-text">
            <h2 className="about-title fs-26 ls-1">About Bookhub</h2>
            <p className="fs-17">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
              sed in illo rem cumque, quaerat fugiat aliquam quis, voluptates
              quas, doloremque laudantium earum libero. Iure maiores delectus
              dolorum rem sequi.
            </p>
            <p className="fs-17">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
              vitae perferendis libero, alias nobis quaerat totam illo maxime,
              iusto dolorem ducimus molestias consequuntur optio! Natus
              asperiores recusandae repellendus explicabo obcaecati.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};
