import React from "react";
import BookItem from "./BookItem";

const BooksList = (props) => {
  const BooksArray = [
    {
        bookId : 1,
        bookName :"The Comfortable Kitchen",
        image : "https://images-na.ssl-images-amazon.com/images/I/81InHUJdr6S._AC_UL604_SR604,400_.jpg",
        author : "Alex Snodgrass",
        type : "Hardcover",
        cost : "20.89",
        sellings : "220"
    },
    {
        bookId : 2,
        bookName :"Things I Should Have Said",
        image : "https://images-na.ssl-images-amazon.com/images/I/61cDne1FlfL._AC_UL604_SR604,400_.jpg",
        author : "Jamie Lynn Spears",
        type : "Hardcover",
        cost : "21.99",
        sellings : "232"
    },
    {
        bookId : 3,
        bookName :"Wings of Fire: The Brightest Night",
        image : "https://images-na.ssl-images-amazon.com/images/I/71MOASQp1qL._AC_UL604_SR604,400_.jpg",
        author : "Donald Miller",
        type : "Paperback",
        cost : "7.78",
        sellings : "504"
    },
    {
        bookId : 4,
        bookName :"Chasing History: A Kid in the Newsroom",
        image : "https://images-na.ssl-images-amazon.com/images/I/71kHJTORGZL._AC_UL604_SR604,400_.jpg",
        author : "Carl Bernstein",
        type : "Hardcover",
        cost : "24.49",
        sellings : "451"
    },
    {
        bookId : 5,
        bookName :"To Paradise: A Novel",
        image : "https://images-na.ssl-images-amazon.com/images/I/717ig4nCDZL._AC_UL604_SR604,400_.jpg",
        author : "Hanya Yanagihara",
        type : "Hardcover",
        cost : "20.91",
        sellings : "232"
    },
    {
        bookId : 6,
        bookName :"Political Prisoner: Persecuted, Prosecuted, but Not Silenced",
        image : "https://images-na.ssl-images-amazon.com/images/I/71Wzp+LbdXL._AC_UL604_SR604,400_.jpg",
        author : "Paul Manafort",
        type : "Hardcover",
        cost : "32.50",
        sellings : "231"
    },
    {
      bookId: 7,
      bookName: "The Psychology of Money",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/41r6F2LRf8L._SX323_BO1,204,203,200_.jpg",
      author: "Morgan Housel",
      type: "Paperback",
      cost: "₹269.00",
      sellings: "23,3331",
    },
    {
      bookId: 8,
      bookName: "DO EPIC SHIT",
      image:
        "https://images-eu.ssl-images-amazon.com/images/I/41+grDTP2FL._AC_UL604_SR604,400_.jpg",
      author: "Ankur Warikoo",
      type: "Hardcover",
      cost: "₹368.00",
      sellings: "761",
    },
    {
      bookId: 9,
      bookName: "Atomic Habits: The life-changing million",
      image:
        "https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL604_SR604,400_.jpg",
      author: "James Clear",
      type: "Paperback",
      cost: "₹482.00",
      sellings: "29,134",
    },
    {
      bookId: 10,
      bookName: "Héctor García",
      image:
        "https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL604_SR604,400_.jpg",
      author: "Héctor García",
      type: "Hardcover",
      cost: "₹313.00",
      sellings: "27,684",
    },
    {
      bookId: 11,
      bookName: "Word Power Made Easy",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51b9zA8HjXL._SX324_BO1,204,203,200_.jpg",
      author: "Norman Lewis",
      type: "Paperback",
      cost: "₹92.00",
      sellings: "33,448",
    },
    {
        bookId : 12,
        bookName :"The Great Reset: Joe Biden and the Rise of",
        image : "https://images-na.ssl-images-amazon.com/images/I/71U4dD5TBPL._AC_UL604_SR604,400_.jpg",
        author : "Glenn Beck",
        type : "Hardcover",
        cost : "19.10",
        sellings : "102"
    },
    {
        bookId : 13,
        bookName :"The Maid: A Novel",
        image : "https://images-na.ssl-images-amazon.com/images/I/71CU3FjMFwL._AC_UL604_SR604,400_.jpg",
        author : "Nita Prose",
        type : "Hardcover",
        cost : "$17.93",
        sellings : "907"
    },
    {
        bookId : 14,
        bookName :"Reminders of Him: A Novel",
        image : "https://images-na.ssl-images-amazon.com/images/I/617uZq23IPL._AC_UL604_SR604,400_.jpg",
        author : "Colleen Hoover",
        type : "Paperback",
        cost : "11.95",
        sellings : "12"
    },
    {
        bookId : 15,
        bookName :"A Little Closer to Home: How I Found",
        image : "https://images-na.ssl-images-amazon.com/images/I/61bK4nvHvVL._AC_UL604_SR604,400_.jpg",
        author : "Ginger Zee",
        type : "Hardcover",
        cost : "17.53",
        sellings : "26"
    },
    {
        bookId : 16,
        bookName :"Red-Handed: How American Elites Get Rich Helping China Win",
        image : "https://images-na.ssl-images-amazon.com/images/I/81SmH2JFABL._AC_UL604_SR604,400_.jpg",
        author : "Peter Schweizer",
        type : "Hardcover",
        cost : "20.99",
        sellings : "34"
    },
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
