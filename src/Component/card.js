import { useEffect, useState } from "react"
import { Card, Button, ListGroup } from "react-bootstrap"
import { useDispatch } from "react-redux";
import { Container,Row,Col } from "react-bootstrap";
import {BsHandThumbsDown,BsHandThumbsUp,BsFillPlayCircleFill} from "react-icons/bs";
import axios from "axios";
import { play } from "../reducer/reducer"
import Example from "./modal";
import ReactTooltip from "react-tooltip";


const CardP = (props) => {
  const url = props.video;
  const [urlplay, seturlplay] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    seturlplay(url);
  }, []);

 

  function like(id,like) {
   if(like){ 
    var add = like +1;
   }else{
    var add = 1;
   }
    console.log(add)
    axios.patch(`http://localhost:5000/video/${id}`, {
      like:add
    }).then((res) => {
      props.setRefresh(oldKey => oldKey +1)
      alert('Liked')

    }).catch((err) => {
      console.log(err)
    })
  }

  function unlike(id,unlike) {
    if(unlike){
      var add = unlike +1;
    }else{
     var add = 1;
  }
     console.log(add)
     axios.patch(`http://localhost:5000/video/${id}`, {
       unlike:add
     }).then((res) => {
       props.setRefresh(oldKey => oldKey +1)
       alert('Unliked')
 
     }).catch((err) => {
       console.log(err)
     })
   }
   function view(id,view){
    if(view){
      var addview=view+1;
    }
    else{
      var addview=1;
    }
    console.log(addview)
    axios.patch(`http://localhost:5000/video/${id}`, {
      view:addview
    }).then((res) => {
      props.setRefresh(oldKey => oldKey +1)
      alert('Thank You for Viewing')

    }).catch((err) => {
      console.log(err)
    })
    
  }


  
  return (
    
    <>    <Card style={{ padding: '0.5rem' }} className="justify-centent-center">
       <iframe height="230" src={props.video} title="YouTube video player" frameBorder="0" controls="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <Card.Body>
        <Row>
          <Col sm={6} className='py-2'>  <Card.Title className="">{props.title}</Card.Title></Col>
          <Col sm={6} className='d-flex justify-content-end play py-2'>
             <BsFillPlayCircleFill onClick={() =>{dispatch(play(url)) ; view(props.id,props.view)}  }/></Col>
        </Row>
        
        <Row className=" title px-2">
          <Col sm={6} className='py-2'><h6>Views: {props.view}</h6></Col>
          <Col sm={6} className='d-flex justify-content-end py-2 icons'>
            <BsHandThumbsUp data-tip="Like" onClick={() => like(props.id,props.like)}/>
            <BsHandThumbsDown data-tip="Unlike" onClick={() => unlike(props.id,props.unlike)}/>
            <ReactTooltip type="info"  place="top" effect="solid"/>
            <Example url={props.video}/>
      

          </Col>
        </Row>
         
       
      </Card.Body>


    </Card>
    
    </>

  )
}

export default CardP;