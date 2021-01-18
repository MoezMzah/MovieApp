import React, {useState} from 'react';
import StarRating from './starRating';

const Rate = ({filterByRate}) => {
  const [searchRate, setSearchRate] = useState(0);
  const HandleInputRate = (value) => {setSearchRate(value)
    filterByRate(value)}

  return (
   <div id='cc'>
   <div>
     <StarRating  count={searchRate} HandleInputRate={HandleInputRate} />
   </div>

</div>
);}
   

export default Rate;