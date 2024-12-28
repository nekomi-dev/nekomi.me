export const useFormatDate = () => {
  const formatAiredDate = (date: Date) => {
    if (!date) return "";

    const dateObj = new Date(date);

    // Массив месяцев на русском
    const months = [
      "Января",
      "Февраля",
      "Марта",
      "Апреля",
      "Мая",
      "Июня",
      "Июля",
      "Августа",
      "Сентября",
      "Октября",
      "Ноября",
      "Декабря",
    ];

    const day = dateObj.getDate();
    const month = months[dateObj.getMonth()];
    const year = dateObj.getFullYear();

    return `${day} ${month} ${year}г.`;
  };

  const formatYear = (date: Date) => {
    if (!date) return "";
    return new Date(date).getFullYear();
  };

  const getSeason = (date: Date) => {
    if (!date) return "";

    const month = new Date(date).getMonth();

    if (month >= 2 && month <= 4) return "Весна";
    if (month >= 5 && month <= 7) return "Лето";
    if (month >= 8 && month <= 10) return "Осень";
    return "Зима";
  };

  return {
    formatAiredDate,
    formatYear,
    getSeason,
  };
};
