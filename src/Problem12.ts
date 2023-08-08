const coerceAmount = (amount: number | { amount: number }) => {
    if (typeof amount === "number") {
      return amount;
    } else {
      return amount.amount;
    }
  };
  