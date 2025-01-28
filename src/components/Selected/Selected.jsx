import PropTypes from 'prop-types';
import { MdOutlineDeleteForever } from "react-icons/md";

export default function Selected({ selectplayer }) {
  const { playerName, playerType,price } = selectplayer;
  return (

      <div className="bg-gray-100 rounded-2xl  p-6 w-full  mb-3">
       <div className="flex justify-between">
        <div  className="flex">
         <figure>
         <img
             src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
             alt={playerName}
             className="w-16 h-16 rounded-full object-cover"
           />
         </figure>
          <div className="ml-4 pt-2">
            <h1 className="text-xl font-semibold text-gray-800">{playerName}</h1>
          <div className="flex gap-5">
            <h1 className="font-semibold">{playerType}</h1>
            <h1 className="text-green-600">$:{price}</h1>
          </div>
          </div>
       </div>
       <div className="pt-2">
        <button className="text-4xl text-red-500"><MdOutlineDeleteForever /></button>
       </div>
       </div>
       
      </div>
 
  );
}

Selected.propTypes = {
  selectplayer: PropTypes.object,
};
