import {
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectOptionAction } from "../../store/slices";

function SelectListItem({ name, label, selectOptions }) {
  const values = useSelector((state) => state.selectOption);
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    const input = evt.target;
    const value = input.value;
    const name = input.name;

    if (input.name === "select-city" && input.value !== "Другой город") {
      dispatch(selectOptionAction.setValue({ name, value }));
      dispatch(selectOptionAction.removeValue({ name: "other-city" }));
      dispatch(selectOptionAction.removeError({ name: "other-city" }));
    } else if (input.name === "other-city") {
      dispatch(selectOptionAction.setValue({ name, value }));
      dispatch(selectOptionAction.removeError({ name }));
    } else {
      dispatch(selectOptionAction.setValue({ name, value }));
    }
  };

  return (
    <FormControl sx={{ m: 1, maxWidth: 500, width: "100%" }}>
      <InputLabel id={`label-${name}`}>{label}</InputLabel>
      <Select
        labelId={`label-${name}`}
        id={`select-${name}`}
        name={`select-${name}`}
        label={name}
        onChange={handleChange}
        value={values[`select-${name}`] || ""}
        variant="filled"
        sx={{
          backgroundColor: "transparent",
        }}
      >
        {selectOptions.map((item, index) => (
          <MenuItem key={index} value={item.text}>
            {item.text}
          </MenuItem>
        ))}
      </Select>
      {values[`select-${name}`] === "Другой город" && (
        <FormControl error={!!values["other-city-error"]} sx={{ mt: "8px" }}>
          <Input
            id="other-city"
            name="other-city"
            placeholder="Введите название города"
            autoFocus
            value={values["other-city"] || ""}
            onChange={handleChange}
            required
            inputProps={{ maxLength: 30, type: "text" }}
            sx={{ p: "25px 12px 8px" }}
          />
          <FormHelperText>{values["other-city-error"]}</FormHelperText>
        </FormControl>
      )}
    </FormControl>
  );
}

export default SelectListItem;
