import stlApp from "./App.module.css"
import Card from './components/card/Card.jsx'
import Cards from './components/cards/Cards.jsx'
import SearchBar from './components/searchbar/SearchBar.jsx'
import characters, { Rick } from './data.js'

function App() {
  return (

    <div className={stlApp.container}>
      <div className={stlApp.containerSearchBar}>
        <SearchBar
          onSearch={(characterID) => window.alert(characterID)}
        />
      </div>
      <hr />
      <div className={stlApp.containerCardRick}>
        <Card
          id={Rick.id}
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />
      </div>
      <hr />
      <div className={stlApp.containerCards}>
        <Cards characters={characters}/>
      </div>
      <hr />
    </div>
  )
}

export default App
