import {
  Button,
  FormControl,
  FormHelperText,
  Modal,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./Popup.module.css";

function Popup({ isPopupOpen, handlePopupClose }) {
  
  return (
    <Modal
      open={isPopupOpen}
      onClose={handlePopupClose}
      aria-labelledby="Модальное окно обратной связи"
      aria-describedby="Модальное окно с формой обратной связи"
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      disableScrollLock={true}
    >
      <div className={styles.container}>
        <button
          aria-label="Кнопка закрытия попапа"
          className={styles.button}
          onClick={handlePopupClose}
        >
          <CloseIcon
            viewBox="5 5 14 14"
            sx={{
              width: "100%",
              height: "100%",
              fill: "#fff",
            }}
          />
        </button>
        <form
          noValidate
          autoComplete="off"
          className={styles.form}
          onSubmit={(evt) => {
            evt.preventDefault();
            console.log(1);
          }}
        >
          <h2 className={styles.title}>Пожалуйста заполните форму</h2>
          <FormControl
            sx={{
              maxWidth: "300px",
              width: "100%",
            }}
          >
            <TextField
              id="user-name"
              name="user-name"
              required
              type="text"
              label="Ваше имя"
              variant="outlined"
              fullWidth
            />
            <FormHelperText
              sx={{
                minHeight: "30px",
                m: "0 2px",
                fontSize: "11px",
                lineHeight: "13px",
              }}
            ></FormHelperText>
          </FormControl>
          <FormControl
            sx={{
              maxWidth: "300px",
              width: "100%",
            }}
          >
            <TextField
              id="user-phone"
              name="user-phone"
              required
              type="tel"
              label="Номер телефона"
              variant="outlined"
              fullWidth
              inputProps={{ style: { p: 0 } }}
            />
            <FormHelperText
              sx={{
                minHeight: "30px",
                m: "0 2px",
                fontSize: "11px",
                lineHeight: "13px",
              }}
            ></FormHelperText>
          </FormControl>
          <FormControl
            sx={{
              maxWidth: "300px",
              width: "100%",
            }}
          >
            <TextField
              id="user-email"
              name="user-email"
              required
              type="text"
              label="Ваш E-mail"
              variant="outlined"
              fullWidth
            />
            <FormHelperText
              sx={{
                minHeight: "30px",
                m: "0 2px",
                fontSize: "11px",
                lineHeight: "13px",
              }}
            ></FormHelperText>
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            focusRipple={false}
            sx={{ mt: "10px" }}
          >
            Отправить
          </Button>
        </form>
      </div>
    </Modal>
  );
}

export default Popup;
