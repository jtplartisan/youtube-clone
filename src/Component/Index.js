import React from "react";
import Search from "./search";
import { Row,Col, Container } from "react-bootstrap";
import youtube from './youtube.png'
import Geners from "./geners";
import Player from "./player";
import CardP from "./card";
import { useEffect, useState } from "react";
import axios from "axios";
const Index=()=>{


  const [video, setVideo] = useState([])

  useEffect(() => {
    var url = "http://localhost:5000/video";
    axios.get(url).then(res => {
      const video = res.data;
      setVideo(video);
    })
  }, []);
  console.log(video)



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
  <Container>
        <Row>
          
            {video.map((item, index) => {
              return (
                <Col sm={3}>
                <CardP img={item.imgurl} title={item.title} video={item.url} />
                </Col>
              )
            })}
        
        </Row>
      </Container>
</Container>

    </>
)
}
export default Index;