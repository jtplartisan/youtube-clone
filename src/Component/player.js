import React from "react";
import { Row,Col,Container } from "react-bootstrap";
import {BsHandThumbsDown,BsHandThumbsUp} from "react-icons/bs";
import {FaRegShareSquare} from "react-icons/fa";
import { useSelector } from "react-redux";
import { getSelectedVideo } from "../reducer/reducer";

const Player = () => {
  const play = useSelector(getSelectedVideo); // from reducer
  return (
    <>
      <iframe width="560" height="315" src={play} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
     
</>
    )
}
export default Player;