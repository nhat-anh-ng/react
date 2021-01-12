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

const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} />
      <h1>{title}</h1>
      <p>{author}</p>
    </article>
  );
};

function Form() {
  return (
    <section className="form">
      <header>
        <h1> Formulaire De réservation</h1>
      </header>
      <div>
        <input type="text" name="name" id="name" placeholder="Prénom"></input>
      </div>
      <div>
        <input type="text" name="name" id="name" placeholder="Nom"></input>
      </div>
      <div>
        <input type="text" name="name" id="name" placeholder="Age"></input>
      </div>
      <div>
        <input type="radio" name="name" id="name" placeholder="Age"></input>
        <label>Homme</label>
      </div>
      <div>
        <input type="radio" name="name" id="name" placeholder="Age"></input>
        <label>Femme</label>
      </div>
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
ReactDom.render(<Form />, document.getElementById("root"));
