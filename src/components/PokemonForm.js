import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm( { handleAddItem } ) {
  const [formName, setFormName] = useState('')
  const [formHp, setFormHp] = useState('')
  const [formFrontUrl, setFormFrontUrl] = useState('')
  const [formBackUrl, setFormBackUrl] = useState('')

  function createPokemon(e) {
    e.preventDefault()
    const newPokemon = {
      name: formName,
      hp: formHp,
      sprites: {
        front: formFrontUrl,
        back: formBackUrl
      }
    }
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPokemon),
    })
      .then((r) => r.json())
      // call the onAddItem prop with the newItem
      .then((newPokemon) => handleAddItem(newPokemon));
  }
  

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={createPokemon}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={(e) => setFormName(e.target.value)} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={(e) => setFormHp(e.target.value)}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={(e) => setFormFrontUrl(e.target.value)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={(e) => setFormBackUrl(e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
