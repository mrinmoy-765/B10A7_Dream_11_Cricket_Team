import { useEffect, useState } from "react";
import Player from "../Player/Player"; 
import PropTypes from 'prop-types';

export default function Players({handleSelectPlayer}) {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);
  
  //  const updatedPlayers = players.filter((player) => player.id !== );
  //   setPlayers(updatedPlayers);

  return (
    <div className="mx-auto">
      {/* <h1 className="text-4xl">Players: {players.length}</h1>    */}
      <div className="grid grid-cols-3 gap-4">
        {players.map((player) => (
          <Player key={player.id} 
          playerInfo={player}
          handleSelectPlayer={handleSelectPlayer} />
        ))}
      </div>
    </div>
  );
}

  Players.propTypes = {
    handleSelectPlayer: PropTypes.func.isRequired, 
   };

