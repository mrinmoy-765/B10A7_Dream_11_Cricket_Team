import Header from './components/Navbar/navbar';
import Banner from './components/Banner/banner';
import Body from './components/Body/Body';
import './App.css';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [coin, setCoin] = useState(0);
  const [selectplayer, setSelectplayer] = useState([]);


  const freeCredit = () => {
    setCoin((prevCoin) => prevCoin + 50000); // Add free credits
    toast.success("$50000 has been added in your account!", {
        position: "top-center",
        autoClose: 2000,
      });
  };



  const handleSelectPlayer = (playerInfo) => {
    if (selectplayer.some((player) => player.id === playerInfo.id)) {
      toast.warning("Player already selected!", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    }

    if (selectplayer.length === 6) {
      toast.warning("You can't select more than 6 players", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    }

    if (playerInfo.price > coin) { // Check if player price exceeds available coins
      toast.warning("You don't have enough coins to buy this player", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    }

    setSelectplayer([...selectplayer, playerInfo]);
    setCoin((prevCoin) => prevCoin - playerInfo.price); // Deduct player price

    toast.success(`${playerInfo.playerName} added successfully!`, {
      position: "top-center",
      autoClose: 2000,
    });
  };

  const removePlayer = (id) => {
    const removedPlayer = selectplayer.find((player) => player.id === id);
    if (removedPlayer) {
      setCoin((prevCoin) => prevCoin + removedPlayer.price); // Refund coins
    }
    setSelectplayer((prev) => prev.filter((player) => player.id !== id));

    toast.info("Player removed!", {
      position: "top-center",
      autoClose: 2000,
    });
  };

  return (
    <>
      <Header coin={coin} />
      <Banner freeCredit={freeCredit} />
      <ToastContainer />
      <Body
        handleSelectPlayer={handleSelectPlayer}
        selectplayer={selectplayer}
        removePlayer={removePlayer}
      />
    </>
  );
}

export default App;