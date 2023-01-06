import './App.css';
import { useState } from 'react';


function App() {

  const [billAmount, setBillAmount] = useState('');
  const [serviceRating, setServiceRating] = useState('');
  const [tipAmount, setTipAmount] = useState('');


  function calculateTip(billAmount, serviceRating) {
    if (serviceRating < 2) {
      return billAmount * 0.08;
    } else if (serviceRating < 4) {
      return billAmount * 0.10;
    } else {
      return billAmount * 0.15;
    }
  }

  const ratingEmoji = {
    0: String.fromCodePoint(...[...Array(1)].map(() => 0x1F620)),
    1: String.fromCodePoint(...[...Array(1)].map(() => 0x1F61E)),
    2: String.fromCodePoint(...[...Array(1)].map(() => 0x1F44D)),
    3: String.fromCodePoint(...[...Array(1)].map(() => 0x1F44C)),
    4: String.fromCodePoint(...[...Array(1)].map(() => 0x1F44F)),
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
        <button className="form-button" type="submit">
          Calculate tip
        </button>
        {tipAmount && <p className="form-result">Tip amount: {tipAmount}</p>}
      </form>
    );
}

export default App;
