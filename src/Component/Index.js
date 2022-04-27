import React from "react";
import Search from "./search";
import { Row,Col, Container } from "react-bootstrap";
import youtube from './youtube.png'
import Geners from "./geners";
import Player from "./player";
const Index=()=>{
return(
    <>
    <Container fluid>
  <Row className="header">
    <Col sm={2} className=''><img src={youtube} className='logo' /></Col>
    <Col sm={10} className='py-3'>    <Search /></Col>
  </Row>
  <Row>
      <Geners />
  </Row>
  <Container>
  <Row className="d-flex justify-content-center">
      <Player />
  </Row>
  </Container>
  
</Container>

    </>
)
}
export default Index;