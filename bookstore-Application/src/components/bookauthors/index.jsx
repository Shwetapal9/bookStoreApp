import React from "react";
import "./styles.css";
import { Link, useParams } from "react-router-dom";
const BookAuthors = ({ author }) => {
  let { authorname } = useParams;
  return (
    <>
      <div className="author-list">
        <Link to={"/authorname/" + author.authors}>
          <p>
            {author.id}-{author.authors}
          </p>
        </Link>
      </div>
    </>
  );
};

export default BookAuthors;
