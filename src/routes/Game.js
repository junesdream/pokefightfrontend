import React, { useState } from 'react'
import './Game.css'
import PokemonCard from '../components/PokemonCard'

const Game = ({ pokemonData }) => {
  const [selectedPokemons, setSelectedPokemons] = useState([])
  const [winner, setWinner] = useState()

  const handleClick = (pokemon) => {
    console.log(pokemon)
    if (selectedPokemons.length === 0) {
      setSelectedPokemons([pokemon.name.english])
    } else if (selectedPokemons.length === 1) {
      setSelectedPokemons([...selectedPokemons, pokemon.name.english])
    } else {
      setSelectedPokemons([])
    }
  }

  const handleStart = () => {
    const random = Math.floor(Math.random() * 2)
    setWinner(selectedPokemons[random])
  }

  return (
    <div>
      <h1>Game</h1>
      {winner && (
        <div>
          <h2>And the winner is: {winner}</h2>
        </div>
      )}
      <div>
        Bitte wähle zwei Pokemon aus:
        <div>
          Spieler 1: {selectedPokemons[0]}
          Spieler 2: {selectedPokemons[1]}
        </div>
      </div>
      {selectedPokemons.length === 2 && (
        <div>
          <p>Starte das Spiel!</p>
          <button onClick={handleStart}>START</button>
        </div>
      )}
      <div className='card_container'>
        {pokemonData.slice(0, 2).map((pokemon, index) => (
          <div
            className='play_card_container'
            key={index}
            onClick={() => handleClick(pokemon)}>
            <PokemonCard pokemon={pokemon} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Game
