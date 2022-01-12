import { useState, useEffect, useRef } from 'react';


const WeeklyTracker = ({ id, weekdays }) => {
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
        <div className="total-count">12000</div>
      </div>
      <div className="progress-bar">
        <div className="progress"></div>
      </div>
    </div>
  );
}

export default WeeklyTracker;