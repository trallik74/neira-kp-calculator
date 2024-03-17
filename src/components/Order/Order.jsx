import { Divider, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Order.module.css";
import { commisionСoefficient } from "../../utils/constant";
import { orderAction } from "../../store/slices";
import { useEffect } from "react";

function Order() {
  const orderList = useSelector((state) => state.order.order);
  const comissionCost = useSelector((state) => state.order.comissionCost);
  const totalCost = useSelector((state) => state.order.totalCost);
  const city = useSelector((state) => state.selectValues["select-city"]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      orderAction.setAssestedCost({ coefficient: commisionСoefficient[city] })
    );
  }, [orderList, city]);

  return (
    <div className={styles.container}>
      <Typography variant="h5" component="h3" sx={{ textAlign: "center" }}>
        Оценочная стоимость
      </Typography>
      <Divider />
      <div className={styles.row}>
        <p className={[styles.text, styles.heading, styles.number].join(" ")}>
          №
        </p>
        <p className={[styles.text, styles.heading, styles.name].join(" ")}>
          Название
        </p>
        <p className={[styles.text, styles.heading, styles.price].join(" ")}>
          Цена
        </p>
        <p className={[styles.text, styles.heading, styles.quantity].join(" ")}>
          Кол.
        </p>
        <p className={[styles.text, styles.heading, styles.sum].join(" ")}>
          Сумма
        </p>
      </div>
      <div className={styles.row}>
        <p className={[styles.text, styles.number].join(" ")}>1</p>
        <p className={[styles.text, styles.name].join(" ")}>Основные услуги</p>
        <p className={[styles.text, styles.price].join(" ")}>
          {comissionCost}
          <span className={styles.currency}>₽</span>
        </p>
        <p className={[styles.text, styles.quantity].join(" ")}>x1</p>
        <p className={[styles.text, styles.sum].join(" ")}>
          {comissionCost}
          <span className={styles.currency}>₽</span>
        </p>
      </div>
      {orderList
        .toSorted((a, b) => a.id - b.id)
        .map((item, index) => {
          return (
            <div key={item.id} className={styles.row}>
              <p className={[styles.text, styles.number].join(" ")}>
                {index + 2}
              </p>
              <p className={[styles.text, styles.name].join(" ")}>
                {item.name}
              </p>
              <p className={[styles.text, styles.price].join(" ")}>
                {item.price}
                <span className={styles.currency}>₽</span>
              </p>
              <p className={[styles.text, styles.quantity].join(" ")}>
                x{item.quantity}
              </p>
              <p className={[styles.text, styles.sum].join(" ")}>
                {item.quantity * item.price}
                <span className={styles.currency}>₽</span>
              </p>
            </div>
          );
        })}
      <Divider />
      <p className={[styles.text, styles.totalCost].join(" ")}>
        Итого: ~{totalCost}
        <span className={styles.currency}>₽</span>
      </p>
    </div>
  );
}

export default Order;
