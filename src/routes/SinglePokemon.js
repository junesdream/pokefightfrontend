import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PokemonCard from '../components/PokemonCard'

const SinglePokemon = () => {
  const [singlePokemon, setSinglePokemon] = useState()
  const { id } = useParams()

  useEffect(() => {
    fetch(`http://localhost:8080/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => setSinglePokemon(data))
  }, [id])

  return (
    <div>
      {singlePokemon && (
        <div>
          <h1>{singlePokemon.name.english}</h1>
          <h2>Names</h2>
          {Object.entries(singlePokemon.name).map(([key, value]) => (
            <li>
              {key}: {value}
            </li>
          ))}
          <h2>Base</h2>
          {Object.entries(singlePokemon.base).map(([key, value]) => (
            <li>
              {key}: {value}
            </li>
          ))}
        </div>
      )}
      <PokemonCard pokemon={singlePokemon} />
    </div>
  )
}

export default SinglePokemon
