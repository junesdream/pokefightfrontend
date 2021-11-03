import PokemonCard from './components/PokemonCard'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

import './App.css'

function App() {
  return (
    <div className='App'>
      <Navigation />
      <div className='randomCards_container'>
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
      </div>
      <Footer />
    </div>
  )
}

export default App
