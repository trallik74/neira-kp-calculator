import { Box, Container } from "@mui/material";
import styles from "./Main.module.css";
import SelectArea from "../SelectArea/SelectArea";
import { useSelectArea } from "../../hooks/useSelectArea";

function Main() {
  const { values, errors, handleChange, handleSubmit } = useSelectArea();

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
          onSubmit={(evt) => {
            evt.preventDefault();
            handleSubmit();
          }}
        >
          <SelectArea
            values={values}
            errors={errors}
            handleChange={handleChange}
          />
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
