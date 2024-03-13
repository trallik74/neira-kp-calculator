export const selectListConfig = [
  {
    name: "city",
    label: "Город",
    selectOptions: [
      { value: "samara", text: "Самара" },
      { value: "moscow", text: "Москва" },
      { value: "spb", text: "Санкт-Петербург" },
      { value: "other", text: "Другой город" },
    ],
  },
  {
    name: "hotel",
    label: "Отели",
    selectOptions: [
      { value: "premium", text: "Премиальный сегмент" },
      { value: "medium", text: "Средний сегмент" },
      { value: "budget", text: "Бюджетный сегмент" },
    ],
  },
  {
    name: "event",
    label: "Формат",
    selectOptions: [
      { value: "business-breakfast", text: "Бизнес-завтрак" },
      { value: "conference", text: "Конференция" },
      { value: "forum", text: "Форум" },
    ],
  },
];

export const servicesList = [
  {
    text: "Разработка веб-сайта мероприятия",
    price: "10000",
    isMultyQuantity: false,
  },
  {
    text: "Фото-отчет",
    price: "20000",
    type: "checkbox",
  },
  {
    text: "Видео-отчет",
    price: "30000",
    isMultyQuantity: false,
  },
  {
    text: `"Motion-design" видео`,
    price: "40000",
    isMultyQuantity: false,
  },
  {
    text: "Баннер",
    price: "50000",
    isMultyQuantity: true,
  },
  {
    text: "Стенд",
    price: "60000",
    isMultyQuantity: true,
  },
  {
    text: "Презентация",
    price: "70000",
    isMultyQuantity: true,
  },
];
