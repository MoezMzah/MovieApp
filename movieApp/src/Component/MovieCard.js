import React from 'react';
import {Card} from 'react-bootstrap';

import StarRating from './starRating';

function MovieCard({movieliste}){

    return(
      <div id='card'class="row">
      <div id='cardd'class="col-sm-6">

 
<Card style={{ width: '18rem', height:'36rem' }}>
  <Card.Img variant="top" className='taille' src={movieliste.image} />
  <Card.Body>
    <Card.Title className='titre'>{movieliste.title}</Card.Title>
    <Card.Text className='text'>
    {movieliste.description} <br /> <br />
    <span>  <StarRating count={movieliste.rate} 
   /> </span><br /> <br />
           <a  src={movieliste.trailer}  id='posturl'>  </a>
    </Card.Text>
  </Card.Body>
</Card>
</div> 
</div>
    )}
    
    export default MovieCard;