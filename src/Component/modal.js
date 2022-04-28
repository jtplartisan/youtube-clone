import {   Button,Modal, Row, Col } from 'react-bootstrap';
import React, { useState } from 'react';
import {FaRegShareSquare, FaCopy} from "react-icons/fa";
import ReactTooltip from 'react-tooltip';
import { SimpleShareButtons } from "react-simple-share";

function Example(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  function copyfun(url) {
    const check = navigator.clipboard.writeText(url);
    console.log(url);
    if(check){
        alert("Copied Url");
    }else{
        alert("Something Wen Wrong");
    }
  }
  
  return (
    <>
     
      <FaRegShareSquare  onClick={handleShow} data-tip="Share" />

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
              <Row> 
                  <Col> {props.url} </Col>
                  <Col>
                  <FaCopy data-tip="Copy to Clipboard"  onClick={() => copyfun(props.url)} />
                  <ReactTooltip type="info" place="top" effect="float"/>
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