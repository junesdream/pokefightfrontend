import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './PokemonCard.css'

const PokemonCard = ({ pokemon }) => {
  console.log(pokemon)
  return (
    <div>
      {pokemon && (
        <Card className='card' id={pokemon.id}>
          <Card.Img
            variant='top'
            src={`https://img.pokemondb.net/sprites/home/normal/${pokemon.name.english.toLowerCase()}.png`}
          />
          <Card.Body className='color-body'>
            <Card.Title>{pokemon.name.english}</Card.Title>
            <Card.Text>
              <ul>
                {pokemon.type.length > 0 &&
                  pokemon.type.map((t) => <li>{t}</li>)}
              </ul>
            </Card.Text>
            <div className='d-grid gap-2'>
              <Link to={`/pokemon/${pokemon.id}`}>
                <Button variant='primary' size='lg'>
                  See Details
                </Button>
              </Link>
            </div>
          </Card.Body>
          <Card.Footer className='footer-card'>
            <small className='text-muted'>you will be the winner!</small>
          </Card.Footer>
        </Card>
      )}
    </div>
  )
}

export default PokemonCard
