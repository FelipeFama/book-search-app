import React from "react";
import { Link } from "react-router-dom";
import "./BookList.css";

const Book = (book) => {
  return (
    <div className="book-item flex flex-column flex-sb">
      <div className="book-item-img">
        <img src={book.cover_img} alt="cover" />
      </div>
    </div>
  )
}

export default Book