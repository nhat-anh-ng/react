import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const title = "Dashboard";
const subtitle = "Dribble";
const img =
  "https://images.unsplash.com/photo-1565103446317-476a2b789651?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=654&q=80";

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <img src={img} />
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
