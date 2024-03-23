import {
  Button,
  FormControl,
  FormHelperText,
  Modal,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./Popup.module.css";
import { MuiTelInput, matchIsValidTel } from "mui-tel-input";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../../store/slices";

function Popup({ isPopupOpen, handlePopupClose, sendEmail, isSending }) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  function handlePhoneChange(value) {
    dispatch(userAction.setPhone({ value, isValid: matchIsValidTel(value) }));
  }

  function handleChange(evt) {
    if (evt.target.name === "name") {
      dispatch(userAction.setName({ value: evt.target.value }));
    } else if (evt.target.name === "email") {
      dispatch(userAction.setEmail({ value: evt.target.value }));
    } else {
      dispatch(userAction.setCompany({ value: evt.target.value }));
    }
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    dispatch(userAction.setShowErrorFlag());
    if (user.name.isValid && user.phone.isValid && user.email.isValid) {
      sendEmail();
    }
  }

  function onClose() {
    dispatch(userAction.resetShowErrorFlag());
    handlePopupClose();
  }

  return (
    <Modal
      open={isPopupOpen}
      onClose={onClose}
      aria-labelledby="Модальное окно обратной связи"
      aria-describedby="Модальное окно с формой обратной связи"
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      disableScrollLock={true}
    >
      <div className={styles.container}>
        <button
          aria-label="Кнопка закрытия попапа"
          className={styles.button}
          onClick={onClose}
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
          onSubmit={handleSubmit}
        >
          <h2 className={styles.title}>Пожалуйста заполните форму</h2>
          <FormControl
            sx={{
              maxWidth: "300px",
              width: "100%",
            }}
            error={user.name.showErrorFlag && !!user.name.errorMessage}
          >
            <TextField
              id="name"
              name="name"
              onChange={handleChange}
              value={user.name.value}
              required
              label="Ваше имя"
              variant="outlined"
              fullWidth
              InputLabelProps={{ shrink: true }}
              inputProps={{ maxLength: 30 }}
              error={user.name.showErrorFlag && !!user.name.errorMessage}
            />
            <FormHelperText
              sx={{
                minHeight: "50px",
                m: "0 2px",
                fontSize: "11px",
                lineHeight: "13px",
              }}
            >
              {user.name.showErrorFlag && user.name.errorMessage}
            </FormHelperText>
          </FormControl>
          <FormControl
            sx={{
              maxWidth: "300px",
              width: "100%",
            }}
            error={user.company.showErrorFlag && !!user.company.errorMessage}
          >
            <TextField
              id="company"
              name="company"
              onChange={handleChange}
              value={user.company.value}
              required
              label="Компания"
              variant="outlined"
              fullWidth
              InputLabelProps={{ shrink: true }}
              error={user.company.showErrorFlag && !!user.company.errorMessage}
            />
            <FormHelperText
              sx={{
                minHeight: "50px",
                m: "0 2px",
                fontSize: "11px",
                lineHeight: "13px",
              }}
            >
              {user.company.showErrorFlag && user.company.errorMessage}
            </FormHelperText>
          </FormControl>
          <FormControl
            sx={{
              maxWidth: "300px",
              width: "100%",
            }}
            error={user.phone.showErrorFlag && !!user.phone.errorMessage}
          >
            <MuiTelInput
              id="phone"
              name="phone"
              label="Номер телефона"
              required
              value={user.phone.value}
              onChange={handlePhoneChange}
              forceCallingCode
              defaultCountry="RU"
              disableDropdown
              inputProps={{
                style: { padding: "15px 10px 15px 0", lineHeight: "1.5" },
                maxLength: 13,
              }}
              error={user.phone.showErrorFlag && !!user.phone.errorMessage}
            />
            <FormHelperText
              sx={{
                minHeight: "50px",
                m: "0 2px",
                fontSize: "11px",
                lineHeight: "13px",
              }}
            >
              {user.phone.showErrorFlag && user.phone.errorMessage}
            </FormHelperText>
          </FormControl>
          <FormControl
            sx={{
              maxWidth: "300px",
              width: "100%",
            }}
            error={user.email.showErrorFlag && !!user.email.errorMessage}
          >
            <TextField
              id="email"
              name="email"
              onChange={handleChange}
              value={user.email.value}
              required
              type="email"
              label="Ваш E-mail"
              variant="outlined"
              fullWidth
              InputLabelProps={{ shrink: true }}
              error={user.email.showErrorFlag && !!user.email.errorMessage}
            />
            <FormHelperText
              sx={{
                minHeight: "30px",
                m: "0 2px",
                fontSize: "11px",
                lineHeight: "13px",
              }}
            >
              {user.email.showErrorFlag && user.email.errorMessage}
            </FormHelperText>
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            focusRipple={false}
            fullWidth
            size="large"
            sx={{ mt: "10px", maxWidth: "300px" }}
            disabled={
              isSending ||
              user.email.isEmpty ||
              user.name.isEmpty ||
              user.phone.isEmpty
            }
          >
            {isSending ? "Отправка..." : "Отправить"}
          </Button>
          <span className={styles.dataPolicy}>
            Отправляя форму, вы подтверждаете, что даете согласие на{" "}
            <a href="https://neiragroup.com/policy" target="_blank">
              обработку персональных данных
            </a>
          </span>
        </form>
      </div>
    </Modal>
  );
}

export default Popup;
