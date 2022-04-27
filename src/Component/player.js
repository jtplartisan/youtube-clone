import React from "react";
import { Row,Col,Container } from "react-bootstrap";
import {BsHandThumbsDown,BsHandThumbsUp} from "react-icons/bs";
import {FaRegShareSquare} from "react-icons/fa";
import { useSelector } from "react-redux";
import { getSelectedVideo } from "../reducer/reducer";

const Player = () => {
  const play = useSelector(getSelectedVideo); // from reducer
  return (
    <>
      <iframe width="560" height="315" src={play} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <Container>
        <Row className=" title px-3">
          <Col sm={8}><h4>Title</h4></Col>
          <Col sm={4} className='d-flex justify-content-center py-2 icons'>
            <BsHandThumbsUp />
            <BsHandThumbsDown />
            <FaRegShareSquare />


          </Col>
        </Row>

</Container>
</>
    )
}
export default Player;