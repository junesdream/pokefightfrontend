import PokemonCard from './components/PokemonCard'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'

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
  )
}

export default App
