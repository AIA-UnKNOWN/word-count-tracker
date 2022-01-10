import { useState, useEffect } from 'react';

import Day from './current-days/Day';


const CurrentDays = ({ date }) => {
  const [days, setDays] = useState([]);

  useEffect(() => {
    const previousDays = getPreviousDays(date);
    const currentDays = getCurrentDays(date);
    const nextDays = getNextDays(date);

    setDays([...previousDays, ...currentDays, ...nextDays]);
  }, [date]);

  const getPreviousDays = date => {
    const lastDayOfLastMonth = new Date(
      date.getFullYear(),
      date.getMonth(),
      0
    ).getDate();
    const lastDayOfLastMonthIndex = new Date(
      date.getFullYear(),
      date.getMonth(),
      0
    ).getDay();
    const previousMonthDays = [];

    for (
      let day = lastDayOfLastMonth - lastDayOfLastMonthIndex;
      day <= lastDayOfLastMonth;
      day++
    ) {
      previousMonthDays.push({
        month: date.getMonth() - 1,
        day,
        year: new Date(
          date.getFullYear(),
          date.getMonth(),
          0
        ).getFullYear()
      });
    }
    
    return previousMonthDays;
  }

  const getCurrentDays = date => {
    const lastDay = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();
    const currentMonthDays = [];
    
    for (let day = 1; day <= lastDay; day++) {
      currentMonthDays.push({
        month: date.getMonth().leftPad(1),
        day: day.leftPad(1),
        year: date.getFullYear()
      });
    }
    
    return currentMonthDays;
  }

  const getNextDays = date => {
    const lastDayIndex = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDay();
    const nextMonthDays = [];

    for (let day = 1; day < (7 - lastDayIndex); day++) {
      nextMonthDays.push({
        month: date.getMonth() + 1,
        day,
        year: new Date(
          date.getFullYear(),
          date.getMonth() + 1,
          1
        ).getFullYear()
      });
    }

    return nextMonthDays;
  }

  return (
    <div className="current-days">
      {days.map(({ month, day, year }) => (
        <Day
          key={`${month}${day}${year}`}
          month={month}
          number={parseInt(day)}
          year={year}
        />
      ))}
    </div>
  );
}

export default CurrentDays;