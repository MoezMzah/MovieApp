import React, { useState } from "react";
import { Modal,Button } from 'react-bootstrap';

const AddMovie = ({addmovie}) => {
  const [newTitle, setNewTitle] = useState("");
  const HandleInputTitle = (e) => {
    return setNewTitle(e.target.value);
  };
  const [newDesc, setNewDesc] = useState("");
  const HandleInputdesc = (e) => {
    return setNewDesc(e.target.value);
  };
  const [newRate, setNewRate] = useState(0);
  const HandleInputRate = (e) => {
    return setNewRate(e.target.value);
  };
     
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

return (
  
  <span id='mod'>
    <Button id="buttadd" variant="primary" onClick={handleShow}>
     Add New Movie
    </Button>
    
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title><span id='addmovie'>Add Your Movie </span> </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <label className='label' > Title: </label>
      <input
        type="text"
        placeholder="Title"
        value={newTitle}
        onChange={HandleInputTitle}
      /></Modal.Body>
      <Modal.Body>
 <label className='label' > Synopsis: </label>
      <input
        type="text"
        placeholder="Synopsis"
        value={newDesc}
        onChange={HandleInputdesc}
      />
</Modal.Body>
<Modal.Body>
<label className='label'> Rate :</label>
      <input
        type="number"
        value={newRate}
        onChange={HandleInputRate}
      />
</Modal.Body>

      <Modal.Footer>
        <Button id="buttad"variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button id="buttad"variant="primary" onClick={()=>{addmovie({title:newTitle,description:newDesc,rate:newRate}) ;handleClose()}}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
   </span> 
 

);
};
export default AddMovie;