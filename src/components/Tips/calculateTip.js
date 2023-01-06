function calculateTip(billAmount, serviceRating) {
    if (serviceRating < 5) {
      return billAmount * 0.1;
    } else if (serviceRating < 8) {
      return billAmount * 0.15;
    } else {
      return billAmount * 0.2;
    }
  }

  export default calculateTip;
