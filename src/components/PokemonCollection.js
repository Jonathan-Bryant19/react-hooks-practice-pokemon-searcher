import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection( {pokeData} ) {
  
const pokeCard = pokeData.map( card => {
  return <PokemonCard name={card.name} front={card.sprites.front} back={card.sprites.back} hp={card.hp}/>
})

  
  return (
    <Card.Group itemsPerRow={6}>
      {/* <h1>Hello From Pokemon Collection</h1> */}
      {pokeCard}
    </Card.Group>
  );
}

export default PokemonCollection;
