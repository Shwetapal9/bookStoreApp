import React, { useState, useEffect } from "react";
import APIContext from "./APIContext";
import { URL } from "../APIkey";
import axios from "axios";

const APIContextProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getBooks();
  }, []);

  async function getBooks() {
    try {
      let response = await axios.get(URL);
      setBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <APIContext.Provider value={{ books }}>{children}</APIContext.Provider>
  );
};

export default APIContextProvider;
