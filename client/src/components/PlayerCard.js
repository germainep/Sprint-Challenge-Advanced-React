//import liraries
import React, { useState, useEffect } from 'react';

// create a component
const PlayerCard = (props) => {
 return (
  <div>
    <h1>{props.name}</h1>
    <p>{props.searches}</p>
    <p>{props.country}</p>
  </div>
 );
};


//make this component available to the app
export default PlayerCard;
