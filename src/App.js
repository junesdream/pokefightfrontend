<<<<<<< HEAD
=======
import React from 'react'
>>>>>>> 276a7876c9bdb975628513e736add0f5a3bea8d9
import PokemonCard from './components/PokemonCard'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
<<<<<<< HEAD
import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import Layout from './components/Layout'
import Home from './routes/Home'
import Pokemon from './routes/Pokemon'
import Game from './routes/Game'
import Leaderboard from './routes/Leaderboard'
import PageNotFound from './routes/PageNotFound'
=======
>>>>>>> 276a7876c9bdb975628513e736add0f5a3bea8d9

import './App.css'

function App() {
  const [pokemonData, setPokemonData] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/pokemon')
      .then((res) => res.json())
      .then((data) => setPokemonData(data))
      .catch((err) => console.log(err))
  }, [])

  console.log(pokemonData)

  return (
    <div className='App'>
<<<<<<< HEAD
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path='/pokemon'
            element={<Pokemon pokemonData={pokemonData} />}
          />
          <Route path='/game' element={<Game />} />
          <Route path='/leaderboard' element={<Leaderboard />} />
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
    // )
    // 	<div className="App">
    // 		<Navigation />
    // 		<div className="randomCards_container">
    // 			<PokemonCard />
    // 			<PokemonCard />
    // 			<PokemonCard />
    // 		</div>
    // 		<Footer />
    // 	</div>
=======
      <Navigation />
      <div className='randomCards_container'>
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
      </div>
      <Footer />
    </div>
>>>>>>> 276a7876c9bdb975628513e736add0f5a3bea8d9
  )
}

export default App
