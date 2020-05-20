import React from 'react';
import logo from './logo.svg';
import './css/App.css';

// Components
import ChampionList from './comp/ChampionList.js';
import Header1 from './comp/Header1.js'

function App() {
  return (

  <>
    <Header1 />

    <div className='Content'>
      <ChampionList/>
    </div>
  </>
  )
}

export default App;
