import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import { books } from "./books";
import Book from "./Book";

function BookList() {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

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
/*ReactDom.render(<Form />, document.getElementById("root"));*/
