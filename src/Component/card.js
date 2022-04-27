import { Card, Button, ListGroup } from "react-bootstrap"

const CardP =(props) =>{

    return(

        <Card style={{ width: '18rem', padding:'1rem' }} className="justify-centent-center">
  <Card.Img variant="top" src={props.img} style={{ width: '16rem' , height: '13rem'}} />
  <Card.Body>
    <Card.Title className="text-center">{props.title}</Card.Title>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <Button >Play</Button>
  </ListGroup>
  
</Card>
    )
}

export default CardP;