import { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Popup from "../Popup/Popup";
import { useSelector } from "react-redux";
import emailjs from "@emailjs/browser";

function App() {
  const state = useSelector((state) => state);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);

  function handlePopupState() {
    setIsPopupOpen(!isPopupOpen);
  }

  function sendEmail() {
    let order = "";

    state.order.order.forEach((item) => {
      order +=
        "Название: " +
        item.name +
        " Цена: " +
        item.price +
        " Кол-во x" +
        item.quantity +
        " Сумма: " +
        item.price * item.quantity +
        "\n";
    });

    const templateParams = {
      name: state.user.name.value,
      phone: state.user.phone.value,
      email: state.user.email.value,
      city: state.selectValues["select-city"],
      hotel: state.selectValues["select-hotel"],
      event: state.selectValues["select-event"],
      other: state.selectValues["other-city"],
      order: order,
      comissionCost: state.order.comissionCost,
      totalCost: state.order.totalCost,
    };

    const options = {
      publicKey: "_3gh8Vj77SWrs80LJ",
      blockHeadless: true,
      limitRate: {
        id: "app",
        throttle: 5000,
      },
    };

    setIsSending(true);
    emailjs
      .send("service_ug4vfyd", "template_oj7eqbl", templateParams, options)
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          handlePopupState()
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
    </>
  );
}

export default App;
