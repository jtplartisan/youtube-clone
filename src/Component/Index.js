import React from "react";
import Search from "./search";
import { Row,Col, Container } from "react-bootstrap";
import youtube from './youtube.png'
import Geners from "./geners";
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
</Container>

    </>
)
}
export default Index;