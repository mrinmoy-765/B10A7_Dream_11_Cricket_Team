import PropTypes from 'prop-types'
import Selected from '../Selected/Selected'

export default function Selecteds({ selectplayer }) {
  return (
    <div>
      <h1>This is the Selecteds section</h1>
      <h3>Selected Player Number: {selectplayer.length}</h3>
      {
                selectplayer.map((selectplayer, idx) => <Selected key={idx} selectplayer={selectplayer}></Selected> )
            }
    </div>
  );
}


Selecteds.propTypes = {
  selectplayer: PropTypes.array.isRequired, 
};

