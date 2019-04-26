import React from "react";
import "./style.css";


function ImageCard(props) {
  return (

    // <div className="card">
    //   <div className="img-container">
    //     <img alt={props.id} src={props.image} />
    //   </div>
    // </div>
    <div onClick = {props.clickImage} className="col-md-3">
    <img src={props.image} style={{width: 100, height:150}} className="img-responsive" alt="greysanatomy"/>
    </div>
  )
}

export default ImageCard;