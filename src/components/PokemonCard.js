import './PokemonCard.css'

const PokemonCard = () => {
  const pokemon = {
    id: 1,
    image: 'https://img.pokemondb.net/artwork/large/bulbasaur.jpg',
    name: {
      english: 'Bulbasaur',
      japanese: 'フシギダネ',
      chinese: '妙蛙种子',
      french: 'Bulbizarre',
    },
    type: ['Grass', 'Poison'],
    base: {
      HP: 45,
      Attack: 49,
      Defense: 49,
      SpAttack: 65,
      SpDefense: 65,
      Speed: 45,
    },
  };

  const playMore = () => {
     alert("Great Pokemon!");
  };

  return (
		<div className="pokemoncard_container">
			<h3>{pokemon.name.english}</h3>
			<img src={pokemon.image} alt={pokemon.name.english} />
			<p>id: {pokemon.id}</p>
			<p>
				{pokemon.type.map((t) => (
					<li>{t}</li>
				))}
			</p>
			<div>
				<form onsubmit="console.log('You clicked submit.'); return false">
					<button onclick={playMore}> Change the Pokemon!</button>
				</form>
			</div>
		</div>
  );
}

export default PokemonCard;
