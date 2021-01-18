import React from 'react'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
  
  
  
export default function MovieDetail({match}) {
  console.log({match})
    return (
        <div>
      <h1>  {match.params.Title}  </h1>  
       <div>   {match.params.Description}</div>
         <iframe  src= {"https://www.youtube.com/embed/"+match.params.Trailer} width="560" height="315" > </iframe>
        
        <div>
       <Link to="/">
           Go Back
       </Link>
</div>
        </div>
    )
}
