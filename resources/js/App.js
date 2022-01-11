import { useState } from 'react';

import Calendar from './components/Calendar';
import Tracker from './components/Tracker';


const App = () => {
  const [currentDate, setCurrentDate] = useState(new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate()
  ));
  const [days, setDays] = useState([]);

  return (
    <div className="app">
      <Calendar
        date={currentDate}
        setCurrentDate={setCurrentDate}
        days={days}
        setDays={setDays}
      />
      <Tracker
        days={days}
      />
    </div>
  );
}

export default App;