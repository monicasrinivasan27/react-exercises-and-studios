import React from "react";
import classes from './BookList.module.css';
export default function BookList() {
   let pageTitle = "Book List";
   let book1 = "https://upload.wikimedia.org/wikipedia/en/thumb/1/1a/Beach_Read.jpg/220px-Beach_Read.jpg";
   let book2 = "https://m.media-amazon.com/images/I/71xwLnUwd5L._SY466_.jpg";
   let book3 = "https://d3i5mgdwi2ze58.cloudfront.net/bpjgg68n8b67g53xfzf9vvrtveqo";

   return (
      <div>
         <h3 className={classes.bookHeading}>{pageTitle}</h3>
         <ul>
         <li className={classes.bookCenter}><img src={book1} alt="Beach Read by Emily Henry"  width="250" height="250" /></li>
         <li className={classes.bookCenter}> <img src={book2} alt="Gulliver`s Travels by Jonathan Swift"  width="250" height="250" /></li>
         <li className={classes.bookCenter}><img src={book3} alt="Alice's Adventures in Wonderland by Lewis Carroll"  width="250" height="250" /></li>
         </ul>
      </div>      
   );
}

