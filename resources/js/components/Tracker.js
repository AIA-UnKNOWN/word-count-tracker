import { useState, useEffect } from 'react';

import WeeklyTracker from './tracker/WeeklyTracker';


const Tracker = ({ days, monthlyQuota }) => {
  const [weeks, setWeeks] = useState([]);
  
  useEffect(() => {
    divideDaysIntoWeeks();
  }, [days, monthlyQuota]);

  const divideDaysIntoWeeks = () => {
    const numberOfWeeks = days.length / 7;
    let start = 0;
    let end = 7;
    const weeksCopy = [];

    for (let week = 0; week < numberOfWeeks; week++) {
      const weekDays = [];
      for (let day = start; day < end; day++) {
        weekDays.push(days[day]);
      }
      weeksCopy.push(weekDays);
      start += 7;
      end += 7;
    }

    setWeeks(weeksCopy);
  }
  
  return (
    <div className="tracker">
      <div className="weekly-trackers">
        {weeks.length > 0 && weeks.map((week, index) => (
          <WeeklyTracker
            key={index}
            id={index + 1}
            weekdays={week}
            weekQuota={Math.floor(monthlyQuota / weeks.length)}
          />
        ))}
      </div>
    </div>
  );
}

export default Tracker;