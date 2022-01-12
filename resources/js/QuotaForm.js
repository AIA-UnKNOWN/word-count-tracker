import { useState } from 'react';


const QuotaForm = ({ quota, setMonthlyQuota }) => {
  const [isSaved, setIsSaved] = useState(false);

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

  const saveQuota = quota => {
    fetch('/api/save-word-count', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        dateId: 'user-quota-0',
        count: parseInt(quota)
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'success') setIsSaved(true);
      })
      .catch(error => console.log(error));
  }

  return (
    <div className="quota-form">
      <input type="checkbox" id="quota-form-toggler" />
      <label
      onClick={getQuota}
        htmlFor="quota-form-toggler"
      >
        <i className="fas fa-edit"></i>
      </label>
      
      <div className="form">
        <label>Monthly Quota</label>
        <input
          type="number"
          placeholder="Set your quota"
          onChange={e => {
            setIsSaved(false);
            setMonthlyQuota(e.target.value);
          }}
          value={quota}
        />
        <button
          onClick={() => saveQuota(quota)}
        >{isSaved ? 'Saved!' : 'Save'}</button>
      </div>
    </div>
  );
}

export default QuotaForm;