import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard( { name, front, back, hp } ) {
  const [isFront, setIsFront] = useState(true)
  
  function handleOnClick() {
    setIsFront(!isFront)
  }
  
  
  return (
    <Card>
      <div>
        <div className="image">
          {isFront 
            ? <img src={front} alt="oh no!" onClick={handleOnClick}/>
            : <img src={back} alt="oh no!" onClick={handleOnClick}/>
          }
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
