import CurrentMonth from './calendar/CurrentMonth';
import CurrentDays from './calendar/CurrentDays';


const Calendar = ({ date, setCurrentDate }) => {

  return (
    <div className="calendar">
      <CurrentMonth
        date={date}
        onSwitchMonth={setCurrentDate}
      />
      <CurrentDays
        date={date}
      />
    </div>
  );
}

export default Calendar;