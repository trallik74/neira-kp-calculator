import { Divider, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import styles from "./Order.module.css";

function Order() {
  const orderList = useSelector((state) => state.order.order);

  function getServiceCost() {
    return orderList.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

  function getСommission() {
    return getServiceCost() * 0.4;
  }

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
          {getСommission()}
          <Typography variant="caption" component="span">
            ₽
          </Typography>
        </p>
        <p className={[styles.text, styles.quantity].join(" ")}>1</p>
        <p className={[styles.text, styles.sum].join(" ")}>
          {getСommission()}
          <Typography variant="caption" component="span">
            ₽
          </Typography>
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
                <Typography variant="caption" component="span">
                  ₽
                </Typography>
              </p>
            </div>
          );
        })}
      <Divider />
      <p className={[styles.text, styles.totalCost].join(" ")}>
        Итого: ~{getServiceCost() + getСommission()}
        <span className={styles.currency}>₽</span>
      </p>
    </div>
  );
}

export default Order;
