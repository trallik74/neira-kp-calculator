import SelectListItem from "../SelectListItem/SelectListItem";
import { selectListConfig } from "../../utils/constant";

function SelectArea() {
  return (
    <>
      {selectListConfig.map((item, index) => (
        <SelectListItem
          name={item.name}
          label={item.label}
          selectOptions={item.selectOptions}
          key={index}
        />
      ))}
    </>
  );
}

export default SelectArea;
