import React, { useContext } from "react";
import Navbar from "../components/navbar";
import BookAuthors from "../components/bookauthors";
import APIContext from "../context/APIContext";

const AuthorPage = () => {
  const { books } = useContext(APIContext);

  return (
    <>
      <Navbar />
      <h1>Authors Associated with BookShop</h1>
      {books.map((author) => {
        return <BookAuthors key={author.id} author={author} />;
      })}
    </>
  );
};

export default AuthorPage;
