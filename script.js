
const proxyUrl = 'https://api.allorigins.win/raw?url=';
const apiUrl = 'https://zenquotes.io/api/random';


document.addEventListener('DOMContentLoaded', () => {
    getQuote(); 
    document.getElementById('new-quote').addEventListener('click', getQuote);
});

function getQuote() {
    const quoteElement = document.getElementById('quote');
    const button = document.getElementById('new-quote');
    
    button.disabled = true;

    quoteElement.innerText = "✨ loading... ✨";

    fetch(proxyUrl + encodeURIComponent(apiUrl))
        .then(response => response.json())
        .then(data => {
            const quote = data[0].q;
            const author = data[0].a;

        
            quoteElement.innerText = `"${quote}" - ${author}`;
        })
        .catch(err => {
            console.error('Hata oluştu:', err);
            quoteElement.innerText = '⚠️ Please, try again.';
        })
        .finally(() => {
            button.disabled = false;
            button.innerText = "🌙 Get Inspired";
        });
}
