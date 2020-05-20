import React from 'react';
import '../css/champion-list.css'
import champions from '../json/champions.json';

// Components
import ChampionCard from './ChampionCard.js';


function createChampList(){

}

class ChampionList extends React.Component{

  constructor(props){
    super(props);

    function createChampList(){
      
    }

  }

  render(){
    return(
      <div className="champion-list">
        <ChampionCard
          name="Alistar"
          role="Support"
        />
        <ChampionCard
          name="Anivia"
          role="Mid"
        />
        <ChampionCard
          name={champions[0].name}
          role={champions[0].role.primary}
        />
        {this.state}
      </div>
    )
  }

}

export default ChampionList;
