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
import ServicesCounter from "../ServicesCounter/ServicesCounter";
import { orderAction } from "../../store/slices";
import { useDispatch, useSelector } from "react-redux";
import { counterSettings } from "../../utils/constant";

function AdditionalServices({ data }) {
  const orderValues = useSelector((state) => state.order.order);
  const dispatch = useDispatch();

  function toogleCheckbox({ id, name, price, quantity }) {
    if (orderValues.find((item) => item.id === id)) {
      dispatch(orderAction.removeAdditionalService({ id }));
    } else {
      dispatch(orderAction.setAdditionalService({ id, name, price, quantity }));
    }
  }

  function handleCounterIncrease({ id, name, price, quantity }) {
    if (quantity === 0) {
      dispatch(
        orderAction.setAdditionalService({
          id,
          name,
          price,
          quantity: counterSettings.MinQuantity,
        })
      );
    } else if (quantity < counterSettings.MaxQuantity) {
      dispatch(
        orderAction.changeServiceQuantity({ id, quantity: quantity + 1 })
      );
    }
  }

  function handleCounterDecrease({ id, quantity }) {
    if (quantity === counterSettings.MinQuantity) {
      dispatch(orderAction.removeAdditionalService({ id }));
    } else if (quantity > counterSettings.MinQuantity) {
      dispatch(
        orderAction.changeServiceQuantity({ id, quantity: quantity - 1 })
      );
    }
  }

  return (
    <Accordion
      sx={{ maxWidth: 500, width: "100%" }}
      defaultExpanded={true}
      disableGutters={true}
    >
      <AccordionSummary
        expandIcon={<ArrowDropDown />}
        aria-controls="additional-services-content"
        id="additional-services-header"
        sx={{ padding: "0px 7px 0 12px" }}
      >
        <Typography component="p">Дополнительные услуги</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ pt: 0 }}>
        <Divider />
        <div className={styles.container}>
          {data.map((item, index) => (
            <div key={index} className={styles.row}>
              <p className={[styles.text, styles.name].join(" ")}>
                {item.text}
              </p>
              <p className={[styles.text, styles.price].join(" ")}>
                {item.price}
                <span className={styles.currency}>₽</span>
              </p>
              {item.isMultyQuantity ? (
                <ServicesCounter
                  id={index + 2}
                  name={item.text}
                  price={item.price}
                  quantity={
                    orderValues.find((item) => item.id === index + 2)
                      ?.quantity || 0
                  }
                  handleCounterIncrease={handleCounterIncrease}
                  handleCounterDecrease={handleCounterDecrease}
                />
              ) : (
                <div className={styles.wrapper}>
                  <Checkbox
                    size="small"
                    checked={
                      !!orderValues.find((item) => item.id === index + 2)
                    }
                    onChange={() => {
                      toogleCheckbox({
                        id: index + 2,
                        name: item.text,
                        price: item.price,
                        quantity: counterSettings.MinQuantity,
                      });
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

export default AdditionalServices;
