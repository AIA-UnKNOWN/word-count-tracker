import { useEffect } from 'react';


const ProgressBar = ({ id, wordCount, weeklyTotal }) => {

  useEffect(() => {
    const progressPercent = getPercentOf(wordCount, weeklyTotal);
    const progressBar = document.getElementById(id);
    const progress = progressBar.querySelector('.progress');
    if (0 <= progressPercent <= 100) {
      progress.style.width = `${progressPercent}%`;
    }
    if (wordCount > weeklyTotal) {
      progress.style.width = '100%';
    }
  }, [wordCount, weeklyTotal]);

  const getPercentOf = (initial, max) => {
    const x = initial * 100;
    return x / max;
  }

  return (
    <div
      id={id}
      className="progress-bar"
    >
      <div className="progress"></div>
    </div>
  );
}

export default ProgressBar;