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

  }

  createChampionCards = () => {

  }

  render(){
    return(
      <div className="champion-list">
        {
          champions.map(champion => (
            <ChampionCard
              name={champion.name}
              role1={champion.role.primary}
              role2={champion.role.secondary}
            />
          ))
        }
      </div>
    )
  }

}

export default ChampionList;
