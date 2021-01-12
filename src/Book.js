import React from "react";

const Book = ({ img, title, author }) => {
  const clickHandler = () => {
    alert("hello");
  };
  return (
    <article className="book">
      <img src={img} />
      <h1>{title}</h1>
      <p>{author}</p>
      <button type="button" onClick={clickHandler}>
        reference example
      </button>
    </article>
  );
};

export default Book;
