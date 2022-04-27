import { useEffect, useState } from "react"
import { Card, Button, ListGroup } from "react-bootstrap"
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

  return (

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
}

export default CardP;