import { Card, ListGroupItem, ListGroup } from "react-bootstrap"

const CardP =(props) =>{

    return(

        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.img} />
  <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Cras justo odio</ListGroupItem>
   
  </ListGroup>
  
</Card>
    )
}

export default CardP;