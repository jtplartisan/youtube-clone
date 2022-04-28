import {   Button,Modal, Row, Col } from 'react-bootstrap';
import React, { useState } from 'react';
import {FaRegShareSquare, FaCopy} from "react-icons/fa";
import { SimpleShareButtons } from "react-simple-share";

function Example(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  function copyfun(url) {
    const check = navigator.clipboard.writeText(url);
    console.log(url);
    if(check){
        alert("Link Copy");
    }else{
        alert("Link Not  Copy");
    }
  }
  
  return (
    <>
     
      <FaRegShareSquare  onClick={handleShow} />

      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
            <Modal.Title>Share Everywhere</Modal.Title>
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
              <Row> 
                  <Col> {props.url} </Col>
                  <Col>
                  <FaCopy  onClick={() => copyfun(props.url)} />
                  </Col>
              </Row>
             
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
      </Modal>
    </>
  );
}




export default Example;