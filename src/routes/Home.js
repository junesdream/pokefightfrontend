import React from 'react'
import PokemonCard from '../components/PokemonCard'
import './Home.css'

const Home = ({ pokemonData }) => {
  return (
    <div className='home_container'>
      <PokemonCard
        pokemon={pokemonData[Math.floor(Math.random() * pokemonData.length)]}
      />
      <PokemonCard
        pokemon={pokemonData[Math.floor(Math.random() * pokemonData.length)]}
      />
      <PokemonCard
        pokemon={pokemonData[Math.floor(Math.random() * pokemonData.length)]}
      />
    </div>
  )
}

export default Home
