import { useState } from "react";
import SelectListItem from "../SelectListItem/SelectListItem";

function SelectList() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({ isError: false, message: "" });

  const handleChange = (event) => {
    if (event.target.name === "other-city" && errors.isError === true) {
      setErrors({ ...errors, isError: false, message: "" });
    }
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const arr = [
    {
      name: "citys",
      label: "Город",
      selectPoints: [
        { value: "samara", text: "Самара" },
        { value: "moscow", text: "Москва" },
        { value: "spb", text: "Санкт-Петербург" },
        { value: "other", text: "Другой город" },
      ],
    },
    {
      name: "hotels",
      label: "Отели",
      selectPoints: [
        { value: "premium", text: "Премиальный сегмент" },
        { value: "medium", text: "Средний сегмент" },
        { value: "budget", text: "Бюджетный сегмент" },
      ],
    },
    {
      name: "event",
      label: "Формат",
      selectPoints: [
        { value: "business-breakfast", text: "Бизнес-завтрак" },
        { value: "conference", text: "Конференция" },
        { value: "forum", text: "Форум" },
      ],
    },
  ];
  return arr.map((item, index) => (
    <SelectListItem
      name={item.name}
      label={item.label}
      selectPoints={item.selectPoints}
      handleChange={handleChange}
      values={values}
      errors={errors}
      key={index}
    />
  ));
}

export default SelectList;
