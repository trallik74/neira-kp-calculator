import { Box, Container } from "@mui/material";
import styles from "./Main.module.css";
import SelectArea from "../SelectArea/SelectArea";
import { useDispatch, useSelector } from "react-redux";
import { selectOptionAction } from "../../store/slices";

function Main() {
  const values = useSelector((state) => state.selectOption);
  const dispatch = useDispatch();

  function handleSubmit(evt) {
    evt.preventDefault();
    if (values["select-city"] === "Другой город") {
      const input = document.getElementById("other-city");
      console.log(input.value === "");
      if (input.value === "") {
        dispatch(
          selectOptionAction.setError({
            name: "other-city",
            error: "Заполните это поле.",
          })
        );
        input.focus();
        return;
      }
    }
    console.log(values);
  }

  return (
    <Box component="main">
      <Container
        maxWidth="xl"
        sx={{
          paddingTop: 6,
        }}
      >
        <form
          className={styles.form}
          id="select-form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <SelectArea />
          {values["select-city"] &&
            values["select-event"] &&
            values["select-hotel"] && (
              <button type="submit">Связаться с нами</button>
            )}
        </form>
      </Container>
    </Box>
  );
}

export default Main;
