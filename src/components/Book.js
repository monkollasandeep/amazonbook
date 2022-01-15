import React from "react";
import star from "../assets/star.png";

const Book = (props) => {
  const { bookinfo } = props;
  return (
    <div>
      <img
        src={bookinfo.image}
        alt={`${bookinfo.bookName}`}
        width="500"
        height="600"
      />
      <p>{bookinfo.bookName}</p>
      <p>{`> ${bookinfo.author}`}</p>
      <div>
        <img src={star} alt={`${bookinfo.bookName}`} />
        <span>{bookinfo.sellings}</span>
      </div>
      <p>{bookinfo.type}</p>
      <p>{`$ ${bookinfo.cost}`}</p>
    </div>
  );
};

export default Book;
