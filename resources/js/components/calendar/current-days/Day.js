import { useState, useRef } from 'react';


const Day = ({ month, number, year }) => {
  const [wordCount, setWordCount] = useState(0);

  const id = useRef(`${month}${number}${year}`);

  const saveWordCount = wordCount => {
    console.log(`id ${id.current} ---> ${wordCount}`);
  }

  return (
    <div className="day">
      <label className="number">{number}</label>

      <div className="word-count-input-container">
        <input
          type="number"
          placeholder="Word Count"
          className="word-count-input"
          onChange={e => setWordCount(e.target.value)}
          value={wordCount}
        />
        <button
          className="save-button"
          onClick={() => saveWordCount(wordCount)}
        >Save</button>
      </div>
    </div>
  );
}

export default Day;