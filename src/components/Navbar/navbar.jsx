import React from 'react';
import logo from '../../assets/logo.png';
import { RiCoinsLine } from "react-icons/ri";

export default function Navbar({coin}) {
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-gray-100">
      <div>
        <img src={logo} alt="Logo" className="h-10" />
      </div>
      <ul className="flex space-x-6 text-gray-700 font-medium">
        <li className="hover:text-blue-500 cursor-pointer py-2">Home</li>
        <li className="hover:text-blue-500 cursor-pointer py-2">Fixture</li>
        <li className="hover:text-blue-500 cursor-pointer py-2">Teams</li>
        <li className="hover:text-blue-500 cursor-pointer py-2">Schedules</li>
        <li className="border-2 border-gray-400 rounded px-2 py-2 font-extrabold flex items-center space-x-1">
          <span>{coin} Coin</span>
          <RiCoinsLine className="text-yellow-500 text-2xl" />
        </li>
      </ul>
    </div>
  );
}

