import {
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

function SelectListItem({
  name,
  label,
  selectPoints,
  values,
  handleChange,
  errors,
}) {
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
        {selectPoints.map((item, index) => (
          <MenuItem key={index} value={item.value}>
            {item.text}
          </MenuItem>
        ))}
      </Select>
      {values[`select-${name}`] === "other" && (
        <FormControl error={!!errors["other-city"]} sx={{ mt: "8px" }}>
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
          <FormHelperText>{errors["other-city"]}</FormHelperText>
        </FormControl>
      )}
    </FormControl>
  );
}

export default SelectListItem;
