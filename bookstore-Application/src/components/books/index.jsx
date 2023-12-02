import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { addItem } from "../../utils/cartSlice";
import { useDispatch } from "react-redux";
const Books = ({ book }) => {
  const dispatch = useDispatch();
  const addBook = (book) => {
    dispatch(addItem(book));
  };
  return (
    <>
      <div className="book">
        <div className="book-title">
          <h2>{book?.title}</h2>
        </div>
        <div className="book-cover">
          <img src={book?.image_url} alt="#" />
          <div className="book-info">
            <Link to={"/bookdetails/" + book?.id}>
              <button className="detail">Details</button>
            </Link>
            <span>Rating: {book?.rating}</span>
            <button
              onClick={() => {
                addBook(book);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Books;
