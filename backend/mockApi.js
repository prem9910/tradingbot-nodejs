// mockApi.js
let currentPrice = 100; // Initialize current price

const getRandomStockPrice = (min, max) => {
    return (Math.random() * (max - min) + min).toFixed(2);
};

const getStockPrice = () => {
    const change = (Math.random() < 0.5 ? -1 : 1) * (Math.random() * 5); // Randomly decide to increase or decrease by up to 10
    currentPrice += change; // Update current price
    return {
      symbol: 'TATA',
      price: currentPrice.toFixed(2),  // Use currentPrice with random change
      timestamp: new Date(),
    };
};

module.exports = { getStockPrice };
