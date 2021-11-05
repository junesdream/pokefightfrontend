import PokemonCard from '../components/PokemonCard'

import './Pokemon.css'

const Pokemon = ({ pokemonData }) => {

  console.log(pokemonData)
  
  return (
    <div className='pokemon_container'>
      <PokemonCard />
    </div>
  )
}

export default Pokemon
