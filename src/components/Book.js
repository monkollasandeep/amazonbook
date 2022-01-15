import React from "react";
import star from "../assets/star.png";

const Book = (props) => {
  const { bookinfo } = props;
  return (
    <div className="book-card">
      <div class="zg-bdg-body">
        <span class="zg-bdg-text">{`#${bookinfo.bookId}`}</span>
      </div>
      <img
        src={bookinfo.image}
        alt={`${bookinfo.bookName}`}
        width="302px"
        height="200px"
      />
      <p style={{color:"#007185"}}>{bookinfo.bookName}</p>
      <p style={{color:"#007185"}}>{`> ${bookinfo.author}`}</p>
      <div className="star-card">
        <img src={star} alt={`${bookinfo.bookName}`} />
        <span style={{color:"#007185", paddingLeft:"2px"}}>{bookinfo.sellings}</span>
      </div>
      <p style={{color:"#565959"}}>{bookinfo.type}</p>
      <p style={{color:"#B12704"}}>{`$ ${bookinfo.cost}`}</p>
    </div>
  );
};

export default Book;
