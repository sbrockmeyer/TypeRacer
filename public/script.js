const testQuote = 'Mary had a little lamb';
const quoteDisplayElement = document.getElementById('quote');
const quoteInputElement = document.getElementById('quoteInput');
const recentCorrectPhraseArray = [];
const quoteThing = "./quotes.json";
quoteInputElement.value = null;

function getQuote() {
    return fetch(quoteThing)
    .then(response => response.json())
    .then(data => retrieveFromJsonArray(data).quote);
}

function retrieveFromJsonArray(data) {
    let num = Math.floor(Math.random() * data.length);
    let quote = data[num];
    return (quote);
}


quoteInputElement.addEventListener('input', () => {
    const quoteArray = quoteDisplayElement.querySelectorAll('span');
    const valueArray = quoteInputElement.value.split('');
    let correct = true;

    quoteArray.forEach((charSpan, index) => {
        const char = valueArray[index];
        if(char == null) {
            charSpan.classList.remove('correct');
            quoteInputElement.value = recentCorrectPhraseArray.join('');
            charSpan.classList.remove('current');
            correct = false;

        } else if (char === charSpan.innerHTML) {
            if (recentCorrectPhraseArray[recentCorrectPhraseArray.length-1] === char) {
                charSpan.classList.add('current');
            } else {
                charSpan.classList.remove('current');
            }
            charSpan.classList.add('correct');
            recentCorrectPhraseArray.push(char);
            correct = true;
        } else {
            charSpan.classList.remove('correct');
            charSpan.classList.remove('current');
            correct = false;
            quoteInputElement.value = recentCorrectPhraseArray.join('');
        }
    })
    recentCorrectPhraseArray.length = 0;
})

async function renderQuote() {
    const quote = await getQuote();
    quoteDisplayElement.innerHTML = '';
    quote.split('').forEach(character => {
        const charSpan = document.createElement('span');
        charSpan.innerText = character;
        quoteDisplayElement.appendChild(charSpan);
    })
    quoteInputElement.value = null;
}
