import CurrentMonth from './calendar/CurrentMonth';
import CurrentDays from './calendar/CurrentDays';


const Calendar = ({ date, days, setCurrentDate, setDays }) => {
  return (
    <div className="calendar">
      <CurrentMonth
        date={date}
        onSwitchMonth={setCurrentDate}
      />
      <CurrentDays
        date={date}
        days={days}
        onRenderDays={setDays}
      />
    </div>
  );
}

export default Calendar;