import { NavLink } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
  return (
    <div className='navigation_container'>
      <li>
        <NavLink
          to='/'
          style={({ isActive }) => {
            return {
              color: isActive ? 'red' : '',
            }
          }}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/pokemon'
          style={({ isActive }) => {
            return {
              color: isActive ? 'red' : '',
            }
          }}>
          Pokemon
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/game'
          style={({ isActive }) => {
            return {
              color: isActive ? 'red' : '',
            }
          }}>
          Game
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/leaderboard'
          style={({ isActive }) => {
            return {
              color: isActive ? 'red' : '',
            }
          }}>
          Leaderboard
        </NavLink>
      </li>
      <li>
        <NavLink to='/'>Login</NavLink>
      </li>
    </div>
  )
}

export default Navigation
