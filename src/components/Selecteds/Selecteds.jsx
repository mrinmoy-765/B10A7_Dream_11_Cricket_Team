import PropTypes from 'prop-types'
import Selected from '../Selected/Selected'
import React, { useState } from 'react';


export default function Selecteds({ selectplayer, removePlayer, handleAvailable }) {


  return (
    <div className="mb-8">
      <h1>This is the Selecteds section</h1>
      <h3>Selected Player Number: {selectplayer.length}</h3>
      {
        selectplayer.map((selectplayer, idx) => <Selected key={idx} selectplayer={selectplayer} removePlayer={removePlayer}></Selected>)
      }

      <div
        className="p-2 border-2 border-gray-300 rounded-lg w-1/6 text-center text-lg font-semibold"
        style={{ backgroundColor: "#FFFF00" }}
      >
        <button onClick={handleAvailable}>Add more players</button>
      </div>

    </div>
  );
}


Selecteds.propTypes = {
  selectplayer: PropTypes.array.isRequired,
  removePlayer: PropTypes.func.isRequired,
};

