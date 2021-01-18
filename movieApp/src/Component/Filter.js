import React, { useState } from "react";
import {FormControl,Button} from 'react-bootstrap';

const Filter = ({filtrer}) => {
  const [searchInput, setSearchInput] = useState("");
  const HandleInputChange = (e) => {
    return setSearchInput(e.target.value);
  };
return (
  <div id='filt'>
  <FormControl   type="text" placeholder="Search"   value={searchInput}
    onChange={HandleInputChange}className="mr-sm-2" />
  <Button  onClick={()=>filtrer(searchInput)} variant="outline-success">Search</Button>
</div>
  );
};
export default Filter;
