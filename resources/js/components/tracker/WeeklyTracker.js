import { useState, useEffect } from 'react';


const WeeklyTracker = ({ id, weekdays }) => {
  const [IDs, setIDs] = useState([]);
  const [totalWordCount, setTotalWordCount] = useState(0);
  
  useEffect(() => {
    const generatedIDs = weekdays.map(({ month, day, year }) => `${month}${day}${year}`);
    setIDs(generatedIDs);
  }, [weekdays]);

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