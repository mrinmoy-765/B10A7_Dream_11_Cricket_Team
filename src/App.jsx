import Header from './components/Navbar/navbar'
import Banner from './components/Banner/banner'
import Body from './components/Body/Body'
import './App.css'
import { useState } from 'react'

function App() {

  const [selectplayer, setSelectplayer] = useState([]);

  const handleSelectPlayer  = (playerInfo) =>{
      const newSelectedPlayers = [...selectplayer,playerInfo];
      setSelectplayer(newSelectedPlayers);
  }

   const removePlayer = (id) => {
    console.log("Player removed:", id);
    setSelectplayer((prev) => prev.filter((player) => player.id !== id));
  };

  return (

    <>
    <Header></Header>
    <Banner></Banner>
    <Body handleSelectPlayer={handleSelectPlayer}
          selectplayer={selectplayer}
          removePlayer={removePlayer}></Body>
    </>



  )
}

export default App
