import { useState } from 'react';

import Calendar from './components/Calendar';
import Tracker from './components/Tracker';


const App = () => {
  const [currentDate, setCurrentDate] = useState(new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate()
  ));

  return (
    <div className="app">
      <Calendar
        date={currentDate}
        setCurrentDate={setCurrentDate}
      />
      <Tracker />
    </div>
  );
}

export default App;