import React from 'react'
import { Link } from 'react-router-dom'
import PokemonCard from '../components/PokemonCard'

import './Pokemon.css'

const Pokemon = ({ pokemonData }) => {
  return (
    <>
      {pokemonData &&
        pokemonData.slice(0, 30).map((pokemon) => (
          <Link key={pokemon.id} to={`/pokemon/${pokemon.id}`}>
            <PokemonCard id={pokemon.id} />
          </Link>
        ))}
    </>
  )
}

export default Pokemon
