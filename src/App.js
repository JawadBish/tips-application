import './App.css';
import { useState } from 'react';


function App() {

  const [billAmount, setBillAmount] = useState('');
  const [serviceRating, setServiceRating] = useState('');
  const [tipAmount, setTipAmount] = useState('');


  function calculateTip(billAmount, serviceRating) {
    if (billAmount < 0)  {
      setBillAmount(0)
      return '0';
    }
    if (serviceRating < 2) {
      return (billAmount * 0.01).toFixed(2);
    } 
    else if (serviceRating < 3) {
      return (billAmount * 0.11).toFixed(2);
    }
    else if (serviceRating < 4) {
      return (billAmount * 0.12).toFixed(2);
    }
    else if (serviceRating < 5) {
      return (billAmount * 0.13).toFixed(2);
    }
     else {
      return (billAmount * 0.15).toFixed(2);
    }
  }

  const ratingEmoji = {
    1: String.fromCodePoint(...[...Array(1)].map(() => 0x1F621)),
    2: String.fromCodePoint(...[...Array(1)].map(() => 0x1F61E)),
    3: String.fromCodePoint(...[...Array(1)].map(() => 0x1F44D)),
    4: String.fromCodePoint(...[...Array(1)].map(() => 0x1F44C)),
    5: String.fromCodePoint(...[...Array(1)].map(() => 0x1F44F)),
  };

  
  function handleSubmit(event) {
    event.preventDefault();
    const tip = calculateTip(billAmount, serviceRating);
    setTipAmount(tip);
  }

   return (
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label className="form-label" htmlFor="bill-amount">
          <i className="form-icon fas fa-credit-card"></i>Bill amount:
          </label>
          <input
            className="form-input"
            id="bill-amount"
            type="number"
            value={billAmount}
            onChange={event => setBillAmount(event.target.value)}
          />
        </div>
        <div className="form-row">
        <span className="form-label">Service rating:</span>
      {Object.keys(ratingEmoji).map(rating => (
        <label key={rating}>
          <input
            type="radio"
            name="service-rating"
            value={rating}
            checked={serviceRating === rating}
            onChange={event => setServiceRating(event.target.value)}
          />
          {ratingEmoji[rating]}
        </label>
      ))}
    </div>
    <div className='button'>
    <button className="form-button" type="submit">
          Calculate tip
        </button>
    </div>
    <br></br>
    <div className='result'>
        {tipAmount && <p className="form-result">Tip amount: {tipAmount}</p>}
        </div>
      </form>
    );
}

export default App;
