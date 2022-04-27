import { Card, Button, ListGroup } from "react-bootstrap"
import { useDispatch,useSelector } from "react-redux";
import { useState } from "react";
import { play } from "../reducer/reducer";

const CardP =(props) =>{
  const [urlplay, setUrlplay] = useState('');
  const dispatch = useDispatch();

    return(

        <Card style={{ width: '18rem', padding:'1rem' }} className="justify-centent-center">
  <Card.Img variant="top" src={props.img} style={{ width: '16rem' , height: '13rem'}} />
  <Card.Body>
    <Card.Title className="text-center">{props.title}</Card.Title>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <Button onClick={() => dispatch(play(urlplay))}>Play</Button>
  </ListGroup>
  
</Card>
    )
}

export default CardP;