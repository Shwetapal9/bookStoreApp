import React, { useContext } from "react";
import Books from "../Books";
import APIContext from "../../context/APIContext";
import { useParams } from "react-router-dom";

const Booklists = () => {
  const { books } = useContext(APIContext);

  return (
    <>
      <div className="booklist">
        {books.map((book) => {
          return <Books key={book.id} book={book} />;
        })}
      </div>
    </>
  );
};

export default Booklists;
