import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const books = [
  {
    title: "Algorithms to live by",
    author: "B.Christian & T.Griffiths",
    img: "https://images-na.ssl-images-amazon.com/images/I/617fYIbPTSL.jpg",
  },

  {
    title: "Foundation Trilogy",
    author: "Isaac Asimov",
    img: "https://images-na.ssl-images-amazon.com/images/I/81iwb+Zk5uL.jpg",
  },

  {
    title: "Strenghtsfinder2.0",
    author: "Tom Rath",
    img: "https://images-na.ssl-images-amazon.com/images/I/41dy60BGoBL.jpg",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} />
      <h1>{title}</h1>
      <p>{author}</p>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
