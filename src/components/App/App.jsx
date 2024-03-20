import { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Popup from "../Popup/Popup";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  function handlePopupState() {
    setIsPopupOpen(!isPopupOpen);
  }

  return (
    <>
      <Popup isPopupOpen={isPopupOpen} handlePopupClose={handlePopupState} />
      <Header />
      <Main handlePopupOpen={handlePopupState} />
    </>
  );
}

export default App;
