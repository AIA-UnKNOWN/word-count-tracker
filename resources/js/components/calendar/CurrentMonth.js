import MONTHS from './months';


const CurrentMonth = ({ date, onSwitchMonth }) => {

  const goToPreviousMonth = () => {
    onSwitchMonth(new Date(
      date.getFullYear(),
      date.getMonth() - 1,
      date.getDate()
    ));
  }

  const goToNextMonth = () => {
    onSwitchMonth(new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate()
    ));
  }

  return (
    <div className="current-month">
      <button
        onClick={goToPreviousMonth}
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <label className="month">{`${MONTHS[date.getMonth()]}, ${date.getFullYear()}`}</label>
      <button
        onClick={goToNextMonth}
      >
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
}

export default CurrentMonth;