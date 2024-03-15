import SelectListItem from "../SelectListItem/SelectListItem";
import { selectListConfig, servicesList } from "../../utils/constant";
import AdditionalServices from "../AdditionalServices/AdditionalServices";
import { Typography } from "@mui/material";


function SelectArea() {
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
          key={index}
        />
      ))}
      <AdditionalServices data={servicesList} />
    </>
  );
}

export default SelectArea;
