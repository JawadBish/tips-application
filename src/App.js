import './App.css';
import { useState } from 'react';


function App() {

  const [billAmount, setBillAmount] = useState('');
  const [serviceRating, setServiceRating] = useState('');
  const [tipAmount, setTipAmount] = useState('');

  
  function calculateTip(billAmount, serviceRating) {
    if (serviceRating < 5) {
      return billAmount * 0.1;
    } else if (serviceRating < 8) {
      return billAmount * 0.15;
    } else {
      return billAmount * 0.2;
    }
  }

  
  function handleSubmit(event) {
    event.preventDefault();
    const tip = calculateTip(billAmount, serviceRating);
    setTipAmount(tip);
  }

   return (
    <form onSubmit={handleSubmit}>
      <label>
        Bill amount:
        <input
          type="number"
          value={billAmount}
          onChange={event => setBillAmount(event.target.value)}
        />
      </label>
      <br />
      <label>
        Service rating (1-10):
        <input
          type="number"
          min="1"
          max="10"
          value={serviceRating}
          onChange={event => setServiceRating(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Calculate tip</button>
      {tipAmount && <p>Tip amount: {tipAmount}</p>}
    </form>
  );
}

export default App;
