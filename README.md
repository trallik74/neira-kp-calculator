# Калькулятор коммерческого предложения 

Сервис при помощи которого клиент может выбрать формат мероприятия, услуги и увидеть их примерную оценочную стоимость.

Ссылка: https://services-calculator.vercel.app

![App preview](/preview/preview.png)

## Технологии
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

## Функционал
- возможность выбора услуг и формата мероприятия
- визуальное представление выбранных услуг и подсчет их стоимости 
- отправка заявки с выбранными услугами на почту

## Что сделал
- сверстал компоненты выбора услуг и формата мероприятия на React
- описал логику сохранения состояния полей в store Redux
- написал логику подсчета оценочной стоимости услуг
- сделал модальное окно с формой контактных данных для отправки на почту через Email.js
- добавил сабмит валидацию для полей модального окна 

## Что хотелось бы улучшить
- доступность формы при валидации данных
- разгрузить компонент модального окна от излишней логики
- поменять логику сохранения информации в Redux для текстовых полей модального окна

