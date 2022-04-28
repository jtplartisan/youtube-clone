import React from "react";
import Search from "./search";
import { Row, Col, Container } from "react-bootstrap";
import youtube from './youtube.png'
import Geners from "./geners";
import Player from "./player";
import CardP from "./card";
import { useEffect, useState } from "react";
import axios from "axios";
const Index = () => {


  const [video, setVideo] = useState([])
  const [filter, setFilter] = useState(video);
  const [refreshKey, setRefreshKey] = useState(0);
  useEffect(() => {
    var url = "http://localhost:5000/video";
    function fetchemp(){  axios.get(url).then(res => {
      const video = res.data;
      setVideo(video);
      setFilter(video);
    })}
    fetchemp();
    }, [refreshKey]); 

  console.log(video)
  console.log(filter)



  return (
    <>
      <Container fluid>
        <Row className="header">
          <Col sm={2} className=''><img src={youtube} className='logo' /></Col>
          <Col sm={10} className='py-3'>    <Search video={video} setfilter={setFilter} /> </Col>
        </Row>
        <Row>
          <Geners video={video} setfilter={setFilter} />
        </Row>
        <Container>
          <Row className="d-flex justify-content-center">
            <Player />
          </Row>
        </Container>
        <Container>
          <Row className="pt-5">

            {filter.map((item, index) => {
              return (
                <Col sm={4}>
                  <CardP img={item.imgurl} title={item.title} video={item.url} id={item.id} like={item.like} unlike={item.unlike} setRefresh={setRefreshKey} />
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