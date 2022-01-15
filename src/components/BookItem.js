import React from "react";
import Book from "./Book";

const BookItem = (props) => {
  const { BooksArray } = props;

  return (
    <div className="main-container">
      <div>
        {BooksArray.map((bookinfo, index) => {
        return (
          <div>
               {index % 2  === 0 && <Book bookinfo={bookinfo} /> }
          </div>
        );
      })}
        </div>
      <div>
      {BooksArray.map((bookinfo, index) => {
        return (
          <div>
               {index % 2  !== 0 && <Book bookinfo={bookinfo} /> }
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default BookItem;
