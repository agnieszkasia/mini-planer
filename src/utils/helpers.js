export const getToday = function (options = {}) {
  const today = new Date();

  if (options?.end) today.setUTCHours(23, 59, 59, 999);
  else today.setUTCHours(0, 0, 0, 0);
  return today.toISOString();
};

export const getTodayDate = function () {
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  return today.toISOString().slice(0, 10);
};

export function getFirstDayOfWeek(curr) {
  var firstDay = new Date(curr.setDate(curr.getDate() - curr.getDay()));
  return firstDay.toISOString().slice(0, 10);
}

export function getLastDayOfWeek(curr) {
  var lastDay = new Date(curr.setDate(curr.getDate() - curr.getDay() + 6));
  return lastDay.toISOString().slice(0, 10);
}

export const daysInMonth = function (date = null) {
  if (!date) {
    date = new Date();
  }
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
};

const POLAND_TIMEZONE_DIFF = 2;

export function getMonthDays(
  month = getToday().slice(5, 7),
  year = getToday().slice(0, 4)
) {
  const date = new Date(year, month, 0);
  const daysNumber = daysInMonth(date);
  const days = Array.from({ length: daysNumber }).map((day, i) => {
    return {
      date: new Date(
        date.getFullYear(),
        date.getMonth(),
        i + 1,
        POLAND_TIMEZONE_DIFF
      ),
    };
  });

  return days;
}

export function getWeekDays(year, week = null) {
  if (!week) {
    week = getWeekNumber();
  }

  const dayOfWeek = new Date(year, 0, 1).getDay() - 1;
  var dayNumber = 1 + (week - 1) * 7;
  const days = Array.from({ length: 7 }).map((day, i) => ({
    date: new Date(year, 0, dayNumber + i - dayOfWeek, 1),
  }));

  return days;
}

export function getWeekNumber(date = null) {
  const currentDate = getDate(date);

  const startOfYear = new Date(currentDate.getFullYear(), 0, 1, 2);
  const diff = currentDate - startOfYear;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);

  const weekNumber = Math.ceil((dayOfYear + 1) / 7);
  return weekNumber;
}

export function getPreviousDayDate(date) {
  let yesterday = date;
  yesterday.setDate(date.getDate());
  return yesterday.toISOString().slice(0, 10);
}

export function getNextDayDate(date) {
  let tomorrow = date;
  tomorrow.setDate(date.getDate() + 2);

  return tomorrow.toISOString().slice(0, 10);
}

export function getDate(date = null) {
  let currentDate;
  if (!date) {
    currentDate = new Date();
  } else {
    var year = parseInt(date.substring(0, 4));
    var month = parseInt(date.substring(5, 7));
    var day = parseInt(date.substring(8, 10));
    currentDate = new Date(year, month - 1, day);
  }

  return currentDate;
}

export function getMonthName(monthNumber) {
  const monthNames = [
    "",
    "Styczeń",
    "Luty",
    "Marzec",
    "Kwiecień",
    "Maj",
    "Czerwiec",
    "Lipiec",
    "Sierpień",
    "Wrzesień",
    "Październik",
    "Listopad",
    "Grudzień",
  ];

  return monthNames.at(monthNumber);
}

export function getMonthNameForDay(monthNumber) {
  const monthNames = {
    0: "Stycznia",
    1: "Lutego",
    2: "Marca",
    3: "Kwietnia",
    4: "Maja",
    5: "Czerwca",
    6: "Lipca",
    7: "Sierpnia",
    8: "Września",
    9: "Października",
    10: "Listopada",
    11: "Grudnia",
  };

  return monthNames[monthNumber];
}

export function getDayName(date) {
  const dateNum = date.getDay();

  const dayNames = [
    "Niedziela",
    "Poniedziałek",
    "Wtorek",
    "Środa",
    "Czwartek",
    "Piątek",
    "Sobota",
  ];

  return dayNames.at(dateNum);
}

export function getMonthNameByDates(fistDate, lastDate) {
  if (fistDate.getMonth() === lastDate.getMonth()) {
    return getMonthName(fistDate.getMonth() + 1);
  } else {
    return (
      getMonthName(fistDate.getMonth() + 1) +
      "/" +
      getMonthName(lastDate.getMonth() + 1)
    );
  }
}

export function getWeeksInYear(year) {
  return Math.max(
    moment(new Date(year, 11, 31)).isoWeek(),
    moment(new Date(year, 11, 31 - 7)).isoWeek()
  );
}
