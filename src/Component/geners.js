import React from "react";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import CardP from "./card";
import { useEffect, useState } from "react";
import axios from "axios";
const Geners = () => {


 

  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>

          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     
    </>
  )
}
export default Geners;