import { useState, useRef } from 'react';


const Day = ({ month, number, year }) => {
  const [wordCount, setWordCount] = useState(0);
  const [isSaved, setIsSaved] = useState(false);

  const id = useRef(`${month}${number}${year}`);
  const today = useRef(new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate()
  ).getDate());

  const saveWordCount = async (wordCount) => {
    fetch('/api/save-word-count', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        dateId: id.current,
        count: parseInt(wordCount)
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'success') setIsSaved(true);
      })
      .catch(error => console.log(error));
  }

  const checkDay = () => {
    const currentDate = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate()
    );
    if (id.current === `${currentDate.getMonth()}${currentDate.getDate()}${currentDate.getFullYear()}`) {
      return 'day today';
    }
    return 'day';
  }
  
  return (
    <div className={checkDay()}>
      <label className="number">{number}</label>

      <div className="word-count-input-container">
        <input
          type="number"
          placeholder="Word Count"
          className="word-count-input"
          onChange={e => {
            setWordCount(e.target.value);
            setIsSaved(false);
          }}
          value={wordCount}
        />
        <button
          className="save-button"
          onClick={() => saveWordCount(wordCount)}
        >{isSaved ? 'Saved!' : 'Save'}</button>
      </div>
    </div>
  );
}

export default Day;