import React from "react";
import BookItem from "./BookItem";

const BooksList = (props) => {
  const BooksArray = [
    {
      bookId: 1,
      bookName: "The Psychology of Money",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/41r6F2LRf8L._SX323_BO1,204,203,200_.jpg",
      author: "Morgan Housel",
      type: "Paperback",
      cost: "₹269.00",
      sellings: "23,3331",
    },
    {
      bookId: 2,
      bookName: "DO EPIC SHIT",
      image:
        "https://images-eu.ssl-images-amazon.com/images/I/41+grDTP2FL._AC_UL604_SR604,400_.jpg",
      author: "Ankur Warikoo",
      type: "Hardcover",
      cost: "₹368.00",
      sellings: "761",
    },
    {
      bookId: 3,
      bookName: "Atomic Habits: The life-changing million",
      image:
        "https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL604_SR604,400_.jpg",
      author: "James Clear",
      type: "Paperback",
      cost: "₹482.00",
      sellings: "29,134",
    },
    {
      bookId: 4,
      bookName: "Héctor García",
      image:
        "https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL604_SR604,400_.jpg",
      author: "Héctor García",
      type: "Hardcover",
      cost: "₹313.00",
      sellings: "27,684",
    },
    {
      bookId: 5,
      bookName: "Word Power Made Easy",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51b9zA8HjXL._SX324_BO1,204,203,200_.jpg",
      author: "Norman Lewis",
      type: "Paperback",
      cost: "₹92.00",
      sellings: "33,448",
    },
    // {
    //     bookId : 6,
    //     bookName :"",
    //     image : "",
    //     author : "",
    //     type : "",
    //     cost : "",
    //     sellings : ""
    // },
    // {
    //     bookId : 7,
    //     bookName :"",
    //     image : "",
    //     author : "",
    //     type : "",
    //     cost : "",
    //     sellings : ""
    // },
    // {
    //     bookId : 8,
    //     bookName :"",
    //     image : "",
    //     author : "",
    //     type : "",
    //     cost : "",
    //     sellings : ""
    // },
    // {
    //     bookId : 9,
    //     bookName :"",
    //     image : "",
    //     author : "",
    //     type : "",
    //     cost : "",
    //     sellings : ""
    // },
    // {
    //     bookId : 10,
    //     bookName :"",
    //     image : "",
    //     author : "",
    //     type : "",
    //     cost : "",
    //     sellings : ""
    // },
    // {
    //     bookId : 11,
    //     bookName :"",
    //     image : "",
    //     author : "",
    //     type : "",
    //     cost : "",
    //     sellings : ""
    // },
    // {
    //     bookId : 12,
    //     bookName :"",
    //     image : "",
    //     author : "",
    //     type : "",
    //     cost : "",
    //     sellings : ""
    // },
    // {
    //     bookId : 13,
    //     bookName :"",
    //     image : "",
    //     author : "",
    //     type : "",
    //     cost : "",
    //     sellings : ""
    // },
    // {
    //     bookId : 14,
    //     bookName :"",
    //     image : "",
    //     author : "",
    //     type : "",
    //     cost : "",
    //     sellings : ""
    // },
    // {
    //     bookId : 15,
    //     bookName :"",
    //     image : "",
    //     author : "",
    //     type : "",
    //     cost : "",
    //     sellings : ""
    // },
    // {
    //     bookId : 16,
    //     bookName :"",
    //     image : "",
    //     author : "",
    //     type : "",
    //     cost : "",
    //     sellings : ""
    // },
  ];
  return (
    <div>
      <div className="header-text">
        <h1>Amazon Bestsellers</h1>
        <h4>Our most popular products based on sales. Updated hourly.</h4>
      </div>
      <div>
        <BookItem BooksArray={BooksArray} />
      </div>
    </div>
  );
};

export default BooksList;
