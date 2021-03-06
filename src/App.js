import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import Layout from './components/Layout'
import Home from './routes/Home'
import Pokemon from './routes/Pokemon'
import Game from './routes/Game'
import Leaderboard from './routes/Leaderboard'
import PageNotFound from './routes/PageNotFound'
import SinglePokemon from './routes/SinglePokemon'

import './App.css'

function App() {
  const [pokemonData, setPokemonData] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/pokemon')
      .then((res) => res.json())
      .then((data) => setPokemonData(data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home pokemonData={pokemonData} />} />
          <Route
            path='/pokemon'
            element={<Pokemon pokemonData={pokemonData} />}
          />
          <Route
            path='/pokemon/:id'
            element={<SinglePokemon pokemonData={pokemonData} />}
          />
          <Route path='/game' element={<Game pokemonData={pokemonData} />} />
          <Route path='/leaderboard' element={<Leaderboard />} />
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
