import PropTypes from 'prop-types'
import Selected from '../Selected/Selected'



export default function Selecteds({ selectplayer, removePlayer, handleAvailable }) {


 return (
  <div className="mb-8">
    {/* <h1>This is the Selecteds section</h1>
    <h3>Selected Player Number: {selectplayer.length}</h3> */}

    {selectplayer.length > 0 ? (
      <>
        {selectplayer.map((selectplayer, idx) => (
          <Selected key={idx} selectplayer={selectplayer} removePlayer={removePlayer} />
        ))}

        <div
          className="p-2 border-2 border-gray-300 rounded-lg w-1/6 text-center text-lg font-semibold"
          style={{ backgroundColor: "#FFFF00" }}
        >
          <button onClick={handleAvailable}>Add more players</button>
        </div>
      </>
    ) : (
      <p className="text-red-500 font-semibold text-center text-2xl mt-16 mb-32">Currently, you haven&apos;t selected any players!</p>
    )}
  </div>
);

}


Selecteds.propTypes = {
  selectplayer: PropTypes.array.isRequired,
  removePlayer: PropTypes.func.isRequired,
  handleAvailable: PropTypes.func.isRequired,
};

