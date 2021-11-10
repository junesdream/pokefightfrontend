import React from 'react'
import { Link } from 'react-router-dom'
import { FaFortAwesome } from 'react-icons/fa'

import './Navigation.css'

const Navigation = () => {
  return (
    <div className='navigation_container'>
      <nav className='main-nav'>
        <div className='logo-box'>
          {/* 
          Das Logo lag hier halbfertig drin... Möchtest du damit was machen?
          <img src='https://i2.wp.com/hipfonts.com/wp-content/uploads/2020/07/pokemon-logo-1.png?resize=730%2C548&quality=99&ssl=1' /> */}
          <FaFortAwesome className='logo-icon' />
          <span className='logo-text-1'>poke</span>
          <span className='logo-text-2'>fight</span>
        </div>
        <ul>
          <li>
            <Link to='/'>HOME</Link>
          </li>
          <li>
            <Link to='/pokemon'>POKEMON</Link>
          </li>
          <li>
            <Link to='/game'>PLAY</Link>
          </li>
          <li>
            <Link to='/leaderboard'>RANGLISTE</Link>
          </li>
          <li>
            <Link to='/'>LOGIN/REG</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
