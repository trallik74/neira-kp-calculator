import SelectListItem from "../SelectListItem/SelectListItem";
import styles from "./SelectArea.module.css";
import { useSelectArea } from "../../hooks/useSelectArea";
import { selectListConfig, servicesList } from "../../utils/constant";
import AdditionalServices from "../AdditionalServices/AdditionalServices";
import { Typography } from "@mui/material";

function SelectArea() {
  const { values, errors, handleChange, handleSubmit } = useSelectArea();

  return (
    <form
      className={styles.selectForm}
      id="select-form"
      noValidate
      autoComplete="off"
      onSubmit={(evt) => {
        evt.preventDefault();
        handleSubmit();
      }}
    >
      <Typography variant="h5" component='p'>Заполните поля</Typography>
      {selectListConfig.map((item, index) => (
        <SelectListItem
          name={item.name}
          label={item.label}
          selectPoints={item.selectPoints}
          handleChange={handleChange}
          values={values}
          errors={errors}
          key={index}
        />
      ))}
      <AdditionalServices data={servicesList} />
      {values["select-citys"] &&
        values["select-event"] &&
        values["select-hotels"] && (
          <button type="submit">Связаться с нами</button>
        )}
    </form>
  );
}

export default SelectArea;
