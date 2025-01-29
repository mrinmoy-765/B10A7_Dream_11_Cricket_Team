import PropTypes from "prop-types";
import { FaUser } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";

export default function Player({ playerInfo,handleSelectPlayer}) {
  const { playerName, playerCountry, playerType, rating, battingHand, price } = playerInfo;
  // const [message, setMessage] = useState("");


  return (
    <div className="flex justify-center">
      <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt={playerName}
        />
      </figure>
      <div className="card-body">
        <div className="flex">
        <FaUser className="text-gray-500 w-6 h-6 mr-2"  />
        <h1 className="text-xl font-bold">{playerName}</h1>
        </div>
        <div className="flex justify-between">
           <div className="flex">
              <FaFlag className="mt-2 mr-2 text-lg text-gray-500"/>
              <p className="pt-1">{playerCountry}</p>
           </div>        
           <div><p className="bg-gray-200 p-2 text-sm rounded">{playerType}</p></div>
        </div>
        <hr />
        <p className="font-semibold">Rating: {rating}</p>
        <p className="font-semibold">Batting Hand: {battingHand}</p>
        <div className="flex justify-between items-center">
          <div><p className="font-semibold">Price: ${price}</p></div>
       <div className="border-2 rounded px-2 py-1 hover:bg-yellow-300 hover:border-gray-500">
           <button 
           onClick={()=>handleSelectPlayer(playerInfo)}
           className="text-sm ">Choose Player</button>
      </div>
      {/* {message && <div className="text-red-500">{message}</div>} */}


        </div>
      </div>
      </div>
    </div>
  );
}


Player.propTypes = {
  playerInfo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    playerName: PropTypes.string.isRequired,
    playerCountry: PropTypes.string.isRequired,
    playerType: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    battingHand: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

 Player.propTypes = {
    handleSelectPlayer: PropTypes.func.isRequired, 
   };

