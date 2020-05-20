import React from 'react';
import '../css/champion-card.css'


class ChampionCard extends React.Component{

  constructor(props){
    super(props);
  }

  render() {
    return(
      <div className="champion-card" style={{backgroundImage: "url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + this.props.name + "_0.jpg)", fontSize: "2em"}} onClick={() => alert(this.props.name + ' was clicked')}>
        <p className="champion-name">{this.props.name}</p>
        <p className="champion-role">{this.props.role}</p>
      </div>
    );
  }
}


export default ChampionCard;
