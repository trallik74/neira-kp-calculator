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
    price: "50000",
    isMultyQuantity: false,
  },
  {
    text: "Фото-отчет",
    price: "10000",
    isMultyQuantity: false,
  },
  {
    text: "Видео-отчет",
    price: "15000",
    isMultyQuantity: false,
  },
  {
    text: `"Motion-design" видео`,
    price: "20000",
    isMultyQuantity: false,
  },
  {
    text: "Баннер",
    price: "5000",
    isMultyQuantity: true,
  },
  {
    text: "Стенд",
    price: "50000",
    isMultyQuantity: true,
  },
  {
    text: "Презентация",
    price: "3000",
    isMultyQuantity: true,
  },
];

export const hotelCost = {
  Самара: {
    "Премиальный сегмент": 400000,
    "Средний сегмент": 200000,
    "Бюджетный сегмент": 100000,
  },
  "Другой город": {
    "Премиальный сегмент": 400000,
    "Средний сегмент": 200000,
    "Бюджетный сегмент": 100000,
  },
  "Санкт-Петербург": {
    "Премиальный сегмент": 800000,
    "Средний сегмент": 400000,
    "Бюджетный сегмент": 200000,
  },
  Москва: {
    "Премиальный сегмент": 800000,
    "Средний сегмент": 400000,
    "Бюджетный сегмент": 200000,
  },
};

export const commisionСoefficient = {
  Самара: 0.3,
  "Другой город": 0.3,
  "Санкт-Петербург": 0.5,
  Москва: 0.5,
};

export const counterSettings = {
  MinQuantity: 1,
  MaxQuantity: 5,
};
