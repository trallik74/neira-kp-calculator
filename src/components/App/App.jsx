import { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Popup from "../Popup/Popup";
import { useSelector } from "react-redux";
import emailjs from "@emailjs/browser";
import { emailjsConfig } from "../../utils/constant";
import { formatParams } from "../../utils/config";
import Notification from "../Notification/Notification";

function App() {
  const state = useSelector((state) => state);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [notificationSetting, setNotificationSetting] = useState({
    isOpen: false,
    isError: false,
  });
  const [isSending, setIsSending] = useState(false);

  function handlePopupState() {
    setIsPopupOpen(!isPopupOpen);
  }

  function handleNotificationClose() {
    setNotificationSetting({ ...notificationSetting, isOpen: false });
  }

  function sendEmail() {
    setIsSending(true);
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
          setNotificationSetting({
            ...notificationSetting,
            isError: false,
            isOpen: true,
          });
        },
        (error) => {
          return Promise.reject(error);
        }
      )
      .catch((err) => {
        console.log(`${err.status}: ${err.text}`);
        setNotificationSetting({
          ...notificationSetting,
          isError: true,
          isOpen: true,
        });
      })
      .finally(() => {
        setIsSending(false);
      });
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
      <Notification
        notificationSetting={notificationSetting}
        onClose={handleNotificationClose}
      />
    </>
  );
}

export default App;
