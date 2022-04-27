import { Card, Button, ListGroup } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { play } from "../reducer/reducer";
import { Container, Row, Col } from "react-bootstrap";
import { BsHandThumbsDown, BsHandThumbsUp } from "react-icons/bs";
import { FaRegShareSquare } from "react-icons/fa";
import axios from "axios";

const CardP = (props) => {
  const [urlplay, setUrlplay] = useState('');
  const dispatch = useDispatch();
  const [Like, setlike] = useState(0);
  function like(id) {
    axios.patch(`http://localhost:5000/video/${id}`, {
      like: '1'
    }).then((res) => {

      setlike((prevValue) => prevValue + 1)
      alert('Liked')

    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <>

      <Card style={{ width: '18rem', padding: '1rem' }} className="justify-centent-center">
        <Card.Img variant="top" src={props.img} style={{ width: '16rem', height: '13rem' }} />
        <Card.Body>
          <Card.Title className="text-center">{props.title}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <Button onClick={() => dispatch(play(urlplay))}>Play</Button>
        </ListGroup>

      </Card>
      <Container>
        <Row className=" title px-3">
          <Col sm={8}><h4>Title</h4></Col>
          <Col sm={4} className='d-flex justify-content-center py-2 icons'>
            <BsHandThumbsUp onClick={() => like(props.id)} />
            <BsHandThumbsDown />
            <FaRegShareSquare />


          </Col>
        </Row>

      </Container>
    </>
  )
}

export default CardP;