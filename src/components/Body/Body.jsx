import { useState } from 'react';
import Players from '../Players/Players';
import Selecteds from '../Selecteds/Selecteds';
import PropTypes from 'prop-types';

export default function Body({ handleSelectPlayer,selectplayer,removePlayer }) {
  const [isSelectedVisible, setIsSelectedVisible] = useState(false);

  const handleSelect = () => {
    setIsSelectedVisible(true); // Show Selected component
  };

  const handleAvailable = () => {
    setIsSelectedVisible(false); // Show Players component
  };

  return (
    <div className="px-16 mx-auto">
      <div className="flex place-content-between mt-4 mb-4">
        <div>
          <h1 className="font-semibold text-xl">Available Players</h1>
        </div>

        <div>
          <button
            className="px-4 py-2 border-t-2 border-b-2 border-l-2 rounded-l-lg"
            onClick={handleAvailable}
            style={{
              fontWeight: !isSelectedVisible ? 'bold' : 'normal',
              backgroundColor: !isSelectedVisible ? 'yellow' : 'transparent',
            }}
          >
            Available
          </button>
          <button
            className="px-4 py-2 border-t-2 border-b-2 border-r-2 rounded-r-lg"
            onClick={handleSelect}
            style={{
              fontWeight: isSelectedVisible ? 'bold' : 'normal',
              backgroundColor: isSelectedVisible ? 'yellow' : 'transparent',
            }}
          >
            Selected
          </button>
        </div>
      </div>

      {isSelectedVisible ? <Selecteds selectplayer={selectplayer}
        removePlayer={removePlayer}/> : <Players handleSelectPlayer={handleSelectPlayer} />}
    </div>
  );
}


    Body.propTypes = {
    handleSelectPlayer: PropTypes.func.isRequired, 
    removePlayer: PropTypes.func.isRequired, 
    selectplayer:PropTypes.object,
   };
