import React from "react";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import CardP from "./card";
import { useEffect, useState } from "react";
import axios from "axios";
const Geners = () => {


  const [video, setVideo] = useState([])

  useEffect(() => {
    var url = "http://localhost:5000/video";
    axios.get(url).then(res => {
      const video = res.data;
      setVideo(video);
    })
  }, []);
  console.log(video)


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
      <Container>
        <Row>
          <Col >
            {video.map((item, index) => {
              return (
                <CardP img={item.imgurl} title={item.title} />
              )
            })}
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default Geners;