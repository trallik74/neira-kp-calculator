import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  Divider,
  Typography,
} from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import styles from "./AdditionalServices.module.css";
import { useState } from "react";
import ServcesCounter from "../ServcesCounter/ServcesCounter";

function AdditionalServices({ data }) {
  const [order, setOrder] = useState([]);

  function toogleCheckbox({ id, name, price, quantity }) {
    if (order.find((item) => item.id === id)) {
      setOrder([...order.filter((item) => item.id !== id)]);
    } else {
      setOrder([...order, { id, name, price, quantity }]);
    }
  }

  function handleCounterIncrease({ id, name, price, quantity }) {
    if (quantity === 0) {
      setOrder([...order, { id, name, price, quantity: 1 }]);
    } else if (quantity < 5) {
      setOrder(
        order.map((item) => {
          return item.id === id
            ? { id, name, price, quantity: item.quantity + 1 }
            : item;
        })
      );
    }
  }

  function handleCounterDecrease({ id, name, price, quantity }) {
    if (quantity === 1) {
      setOrder([...order.filter((item) => item.id !== id)]);
    } else if (quantity > 1) {
      setOrder(
        order.map((item) => {
          return item.id === id
            ? { id, name, price, quantity: item.quantity - 1 }
            : item;
        })
      );
    }
  }

  return (
    <Accordion sx={{ maxWidth: 500, mt: 2, width: "100%" }}>
      <AccordionSummary
        expandIcon={<ArrowDropDown />}
        aria-controls="panel2-content"
        id="panel2-header"
        sx={{ padding: "0px 7px 0 12px" }}
      >
        <Typography component="p">Дополнительные услуги</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ pt: 0 }}>
        <Divider />
        <div className={styles.container}>
          {data.map((item, index) => (
            <div key={index} className={styles.row}>
              <Typography
                sx={{
                  maxWidth: "300px",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {item.text}
              </Typography>
              <Typography
                sx={{
                  maxWidth: "100px",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {item.price}
                <Typography variant="caption" component="span" sx={{mt: 1}}>
                  ₽
                </Typography>
              </Typography>
              {item.type === "checkbox" ? (
                <div className={styles.wrapper}>
                  <Checkbox
                    size="small"
                    checked={!!order.find((item) => item.id === index)}
                    onChange={() => {
                      toogleCheckbox({
                        id: index,
                        name: item.text,
                        price: item.price,
                        quantity: 1,
                      });
                    }}
                  />
                </div>
              ) : (
                <ServcesCounter
                  id={index}
                  name={item.text}
                  price={item.price}
                  quantity={
                    order.find((item) => item.id === index)?.quantity || 0
                  }
                  handleCounterIncrease={handleCounterIncrease}
                  handleCounterDecrease={handleCounterDecrease}
                />
              )}
            </div>
          ))}
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

export default AdditionalServices;
