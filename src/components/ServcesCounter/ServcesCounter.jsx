import { IconButton, Typography } from "@mui/material";
import styles from "./ServcesCounter.module.css";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { counterSettings } from "../../utils/constant";

function ServcesCounter({
  id,
  name,
  price,
  quantity,
  handleCounterIncrease,
  handleCounterDecrease,
}) {
  function onIncrease() {
    handleCounterIncrease({ id, name, price, quantity });
  }

  function onDecrease() {
    handleCounterDecrease({ id, quantity });
  }

  return (
    <div className={styles.container}>
      <IconButton
        aria-label="increase"
        size="small"
        onClick={onIncrease}
        disabled={quantity >= counterSettings.MaxQuantity}
      >
        <AddIcon fontSize="inherit" />
      </IconButton>
      <Typography sx={{ m: "0 10px" }}>{quantity}</Typography>
      <IconButton
        aria-label="Decrease"
        size="small"
        onClick={onDecrease}
        disabled={quantity < counterSettings.MinQuantity}
      >
        <RemoveIcon fontSize="inherit" />
      </IconButton>
    </div>
  );
}

export default ServcesCounter;
