import SelectListItem from "../SelectListItem/SelectListItem";
import { selectListConfig, servicesList } from "../../utils/constant";
import AdditionalServices from "../AdditionalServices/AdditionalServices";
import { Typography } from "@mui/material";

function SelectArea({ values, errors, handleChange }) {
  return (
    <>
      <Typography variant="h5" component="p">
        Заполните поля
      </Typography>
      {selectListConfig.map((item, index) => (
        <SelectListItem
          name={item.name}
          label={item.label}
          selectOptions={item.selectOptions}
          handleChange={handleChange}
          values={values}
          errors={errors}
          key={index}
        />
      ))}
      <AdditionalServices data={servicesList} />
    </>
  );
}

export default SelectArea;
