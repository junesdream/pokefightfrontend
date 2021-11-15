import React from 'react'
import { Link } from 'react-router-dom'
import PokemonCard from '../components/PokemonCard'

import './Pokemon.css'

const Pokemon = ({ pokemonData }) => {
  return (
    <div className='pokemon_container'>
      {pokemonData &&
        pokemonData.slice(0, 30).map((pokemon) => (
          <Link key={pokemon.id} to={`/pokemon/${pokemon.id}`}>
            <PokemonCard className="pokemon_card" pokemon={pokemon} />
          </Link>
        ))}
    </div>
  )
}

export default Pokemon
