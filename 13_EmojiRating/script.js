document.addEventListener("DOMContentLoaded", function () {
    const convertCurrency = () => {
        const amount = parseFloat(document.getElementById('amount').value);
        const fromCurrency = document.getElementById('fromCurrency').value;
        const toCurrency = document.getElementById('toCurrency').value;

        if (isNaN(amount) || amount <= 0) {
            alert('Please enter a valid positive number for the amount.');
            return;
        }

        const conversionRate = getConversionRate(fromCurrency, toCurrency);
        const convertedAmount = amount * conversionRate;

        const resultElement = document.getElementById('result');
        resultElement.innerText = `${amount} ${fromCurrency} is equal to ${convertedAmount.toFixed(2)} ${toCurrency}`;
    };

    const getConversionRate = (fromCurrency, toCurrency) => {
        // In a real-world scenario, you would fetch live exchange rates from an API.
        // For simplicity, we're using fixed conversion rates.
        const conversionRates = {
            'USD': { 'EUR': 0.85, 'GBP': 0.73 },
            'EUR': { 'USD': 1.18, 'GBP': 0.86 },
            'GBP': { 'USD': 1.37, 'EUR': 1.16 }
        };

        return conversionRates[fromCurrency][toCurrency];
    };

    document.getElementById('convertButton').addEventListener('click', convertCurrency);
});
