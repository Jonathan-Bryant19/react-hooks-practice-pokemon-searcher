import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokeData, setPokeData] = useState([])
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
      .then(r => r.json())
      .then(setPokeData)
  }, [])
  
  function handleAddItem(newPokemon) {
    setPokeData([newPokemon, ...pokeData])
  }

  function handleOnChange(e) {
    setSearchValue(e.target.value) 
  }
  
  const searchedPoke = pokeData.filter( pokeObj => {
    const lowerName = pokeObj.name.toLowerCase()
    const lowerSearch = searchValue.toLowerCase()
    return lowerName.includes(lowerSearch)
  })

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleAddItem={handleAddItem}/>
      <br />
      <Search handleOnChange={handleOnChange}/>
      <br />
      <PokemonCollection searchedPoke={searchedPoke} />
    </Container>
  );
}

export default PokemonPage;
