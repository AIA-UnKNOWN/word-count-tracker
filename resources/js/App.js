import { useState, useEffect } from 'react';

import Calendar from './components/Calendar';
import Tracker from './components/Tracker';
import QuotaForm from './QuotaForm';


const App = () => {
  const [currentDate, setCurrentDate] = useState(new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate()
  ));
  const [days, setDays] = useState([]);
  const [monthlyQuota, setMonthlyQuota] = useState('');

  useEffect(() => {
    getQuota();
  }, []);

  const getQuota = () => {
    fetch('/api/get-word-count', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: 'user-quota-0' })
    })
      .then(response => response.json())
      .then(data => setMonthlyQuota(data.count.toString()))
      .catch(error => console.log(error));
  }

  return (
    <div className="app-container">
      <div className="app">
        <Calendar
          date={currentDate}
          setCurrentDate={setCurrentDate}
          days={days}
          setDays={setDays}
        />
        <Tracker
          days={days}
          monthlyQuota={monthlyQuota}
        />
      </div>
      <QuotaForm
        quota={monthlyQuota}
        setMonthlyQuota={setMonthlyQuota}
      />
    </div>
  );
}

export default App;