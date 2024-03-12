import { useState } from "react";

export function useSelectArea() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isOtherCity, setIsOtherCity] = useState(false);

  const handleSubmit = () => {
    if (isOtherCity) {
      const input = document.getElementById("other-city");
      if (input.value === "") {
        setErrors({
          ...errors,
          ["other-city"]: "Заполните это поле.",
        });
        input.focus()
        return
      }
    }
    console.log(values);

  };

  const handleChange = (evt) => {
    const input = evt.target;
    const value = input.value;
    const name = input.name;

    if (input.name === "select-citys" && input.value === "other") {
      setIsOtherCity(true);
      setValues({ ...values, [name]: value });
      setErrors({
        ...errors,
        ["other-city"]: "",
      });
    } else if (input.name === "select-citys" && input.value !== "other") {
      setValues({ ...values, [name]: value, ["other-city"]: "" });

      setIsOtherCity(false);
    } else if (input.name === "other-city") {
      setValues({ ...values, [name]: value });
      setErrors({
        ...errors,
        ["other-city"]: "",
      });
    } else {
      setValues({ ...values, [name]: value });
    }
  };

  return { values, errors, isOtherCity, handleChange, handleSubmit };
}
