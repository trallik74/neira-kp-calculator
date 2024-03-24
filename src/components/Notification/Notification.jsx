import { Alert, Snackbar } from "@mui/material";

function Notification({ notificationSetting, onClose }) {
  return (
    <Snackbar
      open={notificationSetting.isOpen}
      autoHideDuration={2500}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      onClose={onClose}
      onClick={onClose}
    >
      <Alert
        variant="filled"
        severity={notificationSetting.isError ? "error" : "success"}
      >
        {notificationSetting.isError
          ? "Что то пошло не так... Попробуйте позже"
          : "Заявка отправлена"}
      </Alert>
    </Snackbar>
  );
}

export default Notification;
