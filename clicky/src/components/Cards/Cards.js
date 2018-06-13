
import React, { Component } from 'react';
import cards from './info.json';
import './cards.css';




const GameCards = (props) => (


<div className="card zoom hoverable" style={{ margin: '10px'}}>
  <img className="card-img-top" src={props.image} style={{ width: '200px', height:'200px'}} alt="Card image cap" onClick={() => props.handleClick(props.id, props.clicked)}
 />

</div>

  );










export default GameCards;