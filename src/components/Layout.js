import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import Navigation from './Navigation'
import Footer from './Footer'

import './Layout.css'

function Layout() {
  const [pokemonData, setPokemonData] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/pokemon')
      .then((res) => res.json())
      .then((data) => setPokemonData(data))
      .catch((err) => console.log(err))
  }, [])

  console.log(pokemonData)
  return (
    <div className='layout_container'>
      <div id='navigation_container'>
        <Navigation />
      </div>
      <div id='outlet_container'>
        <Outlet pokemonData={pokemonData} />
      </div>
      <div id='footer_container'>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
