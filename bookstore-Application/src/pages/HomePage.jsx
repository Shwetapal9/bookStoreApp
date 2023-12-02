import React, { useContext } from "react";
import Navbar from "../components/navbar";
import cover from "../assets/cover.jpg";
import { Link } from "react-router-dom";
import APIContext from "../context/APIContext";

const Home = () => {
  const { books: featuredBooks } = useContext(APIContext);

  return (
    <>
      <Navbar />
      <div className="home">
        <h1>WELCOME TO BOOKSHOP</h1>
        <span>Find Book of Your Choice</span>
      </div>
      <div className="cover">
        <img src={cover} alt="cover" />
      </div>
      <div className="home-featured">
        <h2>Featured Books</h2>
        {featuredBooks.map((featuredBook) => {
          if (featuredBook.rating >= 4) {
            return (
              <Link
                to={"/bookdetails/" + featuredBook.id}
                key={featuredBook.id}
              >
                <div className="featured-books">
                  <div className="featured-book">
                    <img src={featuredBook.image_url} alt="#" />
                  </div>
                  <div className="featured-book-details">
                    <div className="featured-book-title">
                      <p>{featuredBook.title}</p>
                    </div>
                    <div className="featured-book-description">
                      <p>{featuredBook.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          }
        })}
      </div>
    </>
  );
};

export default Home;
