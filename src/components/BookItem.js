import React from "react";
import Book from "./Book";

const BookItem = (props) => {
  const { BooksArray } = props;

  return (
    <div className="main-container">
      <div style={{width:"500px", height:"500px"}}>
        {BooksArray.map((bookinfo, index) => {
            return (
            <div>
                {index % 2  === 0 && <Book bookinfo={bookinfo} /> }
            </div>
            );
        })}
      </div>
      <div style={{width:"500px", height:"500px"}}>
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
