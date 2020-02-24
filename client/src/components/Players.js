//import liraries
import React, { Component } from 'react';

import PlayersCard from './PlayerCard'

// create a component
class Players extends Component {
 constructor() {
  super()

  this.state = {
    players: []
  }
}
componentDidMount() {
  fetch(`http://localhost:5000/api/players`)
    .then(res => res.json())
    .then(players => this.setState({players: players}))
    .catch(err => console.error(err))
}
 render() {
  return (
   <div>
    {this.state.players.map(player => {
    return (
      <PlayersCard key={player.name} name={player.name} searches={player.searches} country={player.country}/>
    )
    }
    )}
   </div>
  );
 }
}


//make this component available to the app
export default Players;
