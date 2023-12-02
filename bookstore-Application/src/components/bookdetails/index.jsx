import React, { useEffect, useState } from "react";
import "./styles.css";
import Navbar from "../navbar";
import axios from "axios";
import { URL } from "../../APIkey";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { bookId } = useParams();
  const [bookinfo, setBookInfo] = useState([]);

  useEffect(() => {
    getBookDetails();
  }, []);

  async function getBookDetails() {
    try {
      let response = await axios.get(URL + "&id=" + bookId);
      setBookInfo(response.data[0]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Navbar />
      <div className="book-details">
        <h1>Title: {bookinfo?.title}</h1>
        <h2>Author: {bookinfo?.authors}</h2>
        <h2>Genre: {bookinfo?.genres}</h2>
        <p>{bookinfo?.description}</p>
        <img className="bookdetails-cover" src={bookinfo?.image_url} alt="" />
      </div>
    </>
  );
};

export default BookDetails;
