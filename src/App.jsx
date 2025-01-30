import Header from './components/Navbar/navbar';
import Banner from './components/Banner/banner';
import Body from './components/Body/Body';
import './App.css';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [selectplayer, setSelectplayer] = useState([]);

  const handleSelectPlayer = (playerInfo) => {
    if (selectplayer.some(player => player.id === playerInfo.id)) {
      toast.warning("Player already selected!", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    }

    if(selectplayer.length == 6){
      toast.warning("You can't select more than 6 players", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    }

    setSelectplayer([...selectplayer, playerInfo]);
    toast.success(`${playerInfo.playerName} added successfully!`, {
      position: "top-center",
      autoClose: 2000,
    });
  };

  const removePlayer = (id) => {
    setSelectplayer((prev) => prev.filter((player) => player.id !== id));
    toast.info("Player removed!", {
      position: "top-center",
      autoClose: 2000,
    });
  };

  return (
    <>
      <Header />
      <Banner />
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
