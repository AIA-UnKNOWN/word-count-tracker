import { useState, useEffect, useRef } from 'react';

import ProgressBar from './weekly-tracker/ProgressBar';


const WeeklyTracker = ({ id, weekdays, weekQuota }) => {
  const generatedIDs = useRef(weekdays.map(({ month, day, year }) => `${month}${day}${year}`));
  const [totalWordCount, setTotalWordCount] = useState(0);
  
  useEffect(() => {
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.attributeName === 'value') getTotalWordCount();
      });
    });

    generatedIDs.current.forEach(id => {
      const inputElement = document.getElementById(id);
      if (!inputElement) return;
      observer.observe(inputElement, {
        childList: false,
        attributes: true
      });
    });

    return () => {
      setTotalWordCount(0);
    }
  }, [weekdays]);

  const getTotalWordCount = () => {
    let total = 0;
    generatedIDs.current.forEach(id => {
      const inputElement = document.getElementById(id);
      total += parseInt(inputElement.value);
    });
    setTotalWordCount(total);
  }

  return (
    <div className="weekly-tracker">
      <div className="labels">
        <label>Week {id}</label>
        <label>Total Word Count</label>
      </div>
      <div className="counts">
        <div className="current-count">{totalWordCount}</div>
        <div className="slash">/</div>
        <div className="total-count">{weekQuota}</div>
      </div>
      <ProgressBar
        id={`week-${id}-progress-bar`}
        wordCount={totalWordCount}
        weeklyTotal={weekQuota}
      />
    </div>
  );
}

export default WeeklyTracker;