import {   Button,Modal } from 'react-bootstrap';
import React, { useState } from 'react';
import {FaRegShareSquare} from "react-icons/fa";
import { SimpleShareButtons } from "react-simple-share";

function Example(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [copySuccess, setCopySuccess] = useState('');
  function copy(e) {
    props.url.current.select();
    document.execCommand('copy');
    // This is just personal preference.
    // I prefer to not show the the whole text area selected.
    e.target.focus();
    setCopySuccess('Copied!');
  };
  
  return (
    <>
     
      <FaRegShareSquare  onClick={handleShow} />

      <Modal show={show} onHide={handleClose} >
      <Modal.Header closeButton >
            <Modal.Title><i>Thank You For Sharing</i></Modal.Title>
          </Modal.Header>
          <Modal.Body className='text-center'>

          <SimpleShareButtons
          url={props.url}
         
          size="40px"
          title="share when you click"
       
      whitelist={["Facebook", "Twitter", "LinkedIn", "Google+"]}
    />

          </Modal.Body>
          <Modal.Body>
              {props.url}
              <Button onClick={copy}></Button>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            {copySuccess}
          </Modal.Footer>
      </Modal>
    </>
  );
}




export default Example;