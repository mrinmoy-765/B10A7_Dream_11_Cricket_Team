import Header from './components/Navbar/navbar'
import Banner from './components/Banner/banner'
//import Players from './components/Players/Players'
import Body from './components/Body/Body'
import './App.css'
import { useState } from 'react'

function App() {

  const [selectplayer, setSelectplayer] = useState([]);

  const handleSelectPlayer  = playerInfo =>{
      const newSelectedPlayers = [...selectplayer,playerInfo];
      setSelectplayer(newSelectedPlayers);
  }

  return (

    <>
    <Header></Header>
    <Banner></Banner>
    <Body handleSelectPlayer={handleSelectPlayer}
          selectplayer={selectplayer}></Body>
    </>



  )
}

export default App
