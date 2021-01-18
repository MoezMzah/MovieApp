import React from "react";

const StarRating = ({ count , HandleInputRate}) => {  
 let star = [];
 
  for (let i = 1; i <=5; i++) {
    if (i <= count) {
      
      star.push(<span id='star' style={{color:'yellow'}} onClick={() => HandleInputRate(i)}>★</span>);
    } else {
      star.push(<span id='star' onClick={() => HandleInputRate(i)}> ☆</span>);
    }
  }
 
  return star;
  
};

export default StarRating;
