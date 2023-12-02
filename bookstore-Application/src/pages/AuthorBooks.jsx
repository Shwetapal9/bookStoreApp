import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import APIContext from "../context/APIContext";
import Navbar from "../components/navbar";

const AuthorBooks = () => {
  const { books: booklists } = useContext(APIContext);
  const { authorname } = useParams();
  return (
    <>
      <Navbar />
      <h1>List of Books Written by {authorname}</h1>
      <div className="author-booklists">
        {booklists.map((book) => {
          if (authorname === book.authors) {
            return <p key={book.id}>{book.title}</p>;
          }
        })}
      </div>
    </>
  );
};

export default AuthorBooks;
