import { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Popup from "../Popup/Popup";
import { useSelector } from "react-redux";
import emailjs from "@emailjs/browser";
import { emailjsConfig } from "../../utils/constant";
import { formatParams } from "../../utils/config";

function App() {
  const state = useSelector((state) => state);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);

  function handlePopupState() {
    setIsPopupOpen(!isPopupOpen);
  }

  function sendEmail() {
  /*   setIsSending(true);
     emailjs
      .send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        formatParams(state),
        emailjsConfig.option
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          handlePopupState();
        },
        (error) => {
          return Promise.reject(error);
        }
      )
      .catch((err) => {
        console.log(`${err.status}: ${err.text}`);
      })
      .finally(() => {
        setIsSending(false);
      });  */
    console.log(formatParams(state));
  }

  return (
    <>
      <Popup
        isPopupOpen={isPopupOpen}
        handlePopupClose={handlePopupState}
        sendEmail={sendEmail}
        isSending={isSending}
      />
      <Header />
      <Main handlePopupOpen={handlePopupState} />
    </>
  );
}

export default App;
