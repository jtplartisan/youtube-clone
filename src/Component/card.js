import { useEffect, useState } from "react"
import { Card, Button, ListGroup } from "react-bootstrap"
<<<<<<< HEAD
import { useDispatch } from "react-redux";
import { play } from "../reducer/reducer"
const CardP = (props) => {
  const url = props.video;
  const [urlplay, seturlplay] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(url)
    seturlplay(url);
  }, []);
=======
import { useDispatch,useSelector } from "react-redux";
import { useState } from "react";
import { play } from "../reducer/reducer";

const CardP =(props) =>{
  const [urlplay, setUrlplay] = useState('');
  const dispatch = useDispatch();
>>>>>>> eb90263731b21eeb05edbf8c0f79303f546e9597

    return(
<>

<<<<<<< HEAD
    <Card style={{ width: '18rem', padding: '1rem' }} className="justify-centent-center">
      <Card.Img variant="top" src={props.img} style={{ width: '16rem', height: '13rem' }} />
      <Card.Body>
        <Card.Title className="text-center">{props.title}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <Button onClick={() => dispatch(play(urlplay))}>Play</Button>
      </ListGroup>

    </Card>
  )
=======
        <Card style={{ width: '18rem', padding:'1rem' }} className="justify-centent-center">
  <Card.Img variant="top" src={props.img} style={{ width: '16rem' , height: '13rem'}} />
  <Card.Body>
    <Card.Title className="text-center">{props.title}</Card.Title>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <Button onClick={() => dispatch(play(urlplay))}>Play</Button>
  </ListGroup>
  
</Card>
</>
    )
>>>>>>> eb90263731b21eeb05edbf8c0f79303f546e9597
}

export default CardP;