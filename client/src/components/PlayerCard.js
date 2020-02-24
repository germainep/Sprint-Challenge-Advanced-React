//import liraries
import React, { useState, useEffect } from 'react';
import './playercard.css'

// create a component
const PlayerCard = (props) => {
 return (
  <div className="card">
    <h1>Name: {props.name}</h1>
    <p>Searches: {props.searches}</p>
    <p>Country: {props.country}</p>
  </div>
 );
};


//make this component available to the app
export default PlayerCard;
