import React, { useState } from 'react'
import './Game.css'
import PokemonCard from '../components/PokemonCard'

const Game = ({ pokemonData }) => {
  const [selectedPokemons, setSelectedPokemons] = useState([])
  const [winner, setWinner] = useState()

  return (
		<div>
			<div>
				<h1>Game</h1>
				Spieler1: {selectedPokemons[0]}
				Spieler1: {selectedPokemons[1]}
			</div>
			<div className="card_container">
				<PokemonCard pokemon={pokemonData[2]} />

				<PokemonCard pokemon={pokemonData[4]} />
				<PokemonCard pokemon={pokemonData[8]} />
				<PokemonCard pokemon={pokemonData[0]} />
			</div>
			<div className="btn_box">
				<button className="game_btn">START</button>
			</div>
		</div>
  );
}

export default Game
