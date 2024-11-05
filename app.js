async function convertCurrency() {
    const amount = document.getElementById('amountInput').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const apiKey = '21e39512cb67319847d64f9b903aac97'; // Substitua com sua chave da API de câmbio
    const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch exchange rates');

        const data = await response.json();
        const rate = data.rates[toCurrency];
        const convertedAmount = (amount * rate).toFixed(2);

        document.getElementById('result').innerHTML = `
            <p>${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}</p>
        `;
    } catch (error) {
        document.getElementById('result').innerHTML = `<p>${error.message}</p>`;
    }
}
