import './App.css';
import { useState } from 'react';


function App() {

  const [billAmount, setBillAmount] = useState('');
  const [serviceRating, setServiceRating] = useState('');
  const [tipAmount, setTipAmount] = useState('');


  function calculateTip(billAmount, serviceRating) {
    if (serviceRating < 5) {
      return billAmount * 0.08;
    } else if (serviceRating < 8) {
      return billAmount * 0.10;
    } else {
      return billAmount * 0.15;
    }
  }

  
  function handleSubmit(event) {
    event.preventDefault();
    const tip = calculateTip(billAmount, serviceRating);
    setTipAmount(tip);
  }

   return (
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label className="form-label" htmlFor="bill-amount">
            Bill amount:
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
          <label className="form-label" htmlFor="service-rating">
            Service rating (1-10):
          </label>
          <input
            className="form-input"
            id="service-rating"
            type="number"
            min="1"
            max="10"
            value={serviceRating}
            onChange={event => setServiceRating(event.target.value)}
          />
        </div>
        <button className="form-button" type="submit">
          Calculate tip
        </button>
        {tipAmount && <p className="form-result">Tip amount: {tipAmount}</p>}
      </form>
    );
}

export default App;
