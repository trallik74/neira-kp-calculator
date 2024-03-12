export const selectListConfig = [
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

  export const servicesList = [
    {
      text: "Разработка веб-сайта мероприятия",
      price: "10000",
      type: "checkbox",
    },
    {
      text: "Фото-отчет",
      price: "20000",
      type: "checkbox",
    },
    {
      text: "Видео-отчет",
      price: "30000",
      type: "checkbox",
    },
    {
      text: `"Motion-design" видео`,
      price: "40000",
      type: "checkbox",
    },
    {
      text: "Баннер",
      price: "50000",
      type: "counter",
    },
    {
      text: "Стенд",
      price: "60000",
      type: "counter",
    },
    {
      text: "Презентация",
      price: "70000",
      type: "counter",
    },
  ];