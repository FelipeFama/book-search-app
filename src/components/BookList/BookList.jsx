import React from "react";
import { useGlobalContext } from "../../context";
import { Book } from "./Book";
import Loading from "../Loader/Loader";
import coverImg from "../../assets/cover_not_found.jpg";
import "./BookList.css";

export const BookList = () => {
  const { books, loading, resultTitle } = useGlobalContext();
  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      id: singleBook.id.replace("/works/", ""),
      cover_img: singleBook.cover_id
        ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg`
        : coverImg,
    };
  });

  if (loading) return <Loading />;

  return (
    <section className="booklist">
      <div className="container">
        <article className="section-title">
          <h2>{resultTitle}</h2>
        </article>
        <div className="booklist-content grid">
          {booksWithCovers.slice(0, 30).map((item, index) => {
            return <Book key={index} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};
