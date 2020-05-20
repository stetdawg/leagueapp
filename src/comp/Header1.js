import React from 'react';
import '../css/header.css';
import logo from '../assets/logo.png'
import ChampionSkills from './ChampionSkills.js';



const Header1 = () => {

    return(
    <div id='header'>
    <nav>            
        <img src={logo} alt='Logo'/>
        <ul>
            <li> <a href={ChampionSkills.js}>Champion Skills</a>  </li> 
            <li> <a href=" "></a> Tier List</li>
            <li> <a href=" "></a> Stats</li>
            <li> <a href=""></a> My Account</li>
        </ul>
    </nav>

    </div>
    );

}


export default Header1;