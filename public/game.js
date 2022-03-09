const testQuote = 'Mary had a little lamb';
const quoteDisplayElement = document.getElementById('quote');
const quoteInputElement = document.getElementById('quoteInput');
const recentCorrectPhraseArray = [];
const quoteThing = "./quotes.json";
let timer = null;
let timeRemaining = 0;
let canType = false;

quoteInputElement.value = null;

function getQuote() {
    const quote = fetch(document.querySelector('input[name="difficulty_setting"]:checked').value)
        .then(response => response.json())
        .then(data => {
            timeRemaining = retrieveFromJsonArray(data).timer;
            return retrieveFromJsonArray(data).quote;
        });

    console.log();
    return quote;
}

function retrieveFromJsonArray(data) {
    let num = Math.floor(Math.random() * data.length);
    let quote = data[num];
    return (quote);
}


quoteInputElement.addEventListener('input', () => {
    const quoteArray = quoteDisplayElement.querySelectorAll('span');
    const valueArray = quoteInputElement.value.split('');
    console.log(timeRemaining);
    if (canType === true) {
        quoteArray.forEach((charSpan, index) => {
            const char = valueArray[index];
            if (char == null) {
                charSpan.classList.remove('correct');
                quoteInputElement.value = recentCorrectPhraseArray.join('');
                charSpan.classList.remove('current');

            } else if (char === charSpan.innerHTML) {
                if (recentCorrectPhraseArray[recentCorrectPhraseArray.length - 1] === char) {
                    charSpan.classList.add('current');
                } else {
                    charSpan.classList.remove('current');
                }
                charSpan.classList.add('correct');
                recentCorrectPhraseArray.push(char);
                if (quoteArray.length == recentCorrectPhraseArray.length) {
                    console.log("out");
                    canType = false;
                    quoteDisplayElement.innerHTML = "Game Over"
                    quoteInputElement.value = recentCorrectPhraseArray.join('');
                }
            } else {
                charSpan.classList.remove('correct');
                charSpan.classList.remove('current');
                quoteInputElement.value = recentCorrectPhraseArray.join('');
            }

        })

    } else {
        quoteInputElement.value = recentCorrectPhraseArray.join('');
    }
    recentCorrectPhraseArray.length = 0;
})

function gameOver() {
    canType = false;
    quoteDisplayElement.innerHTML = "Game Over";
    quoteInputElement.value = recentCorrectPhraseArray.join('');
    clearInterval(timer);
}

function startTimer() {
    timer = setInterval(updateTimer, 1000);
    updateTimer();
}

function updateTimer() {
    timeRemaining = timeRemaining - 1;
    if (timeRemaining >= 0) {

    } else {
        gameOver();
    }

}

async function renderQuote() {
    canType = true;
    const quote = await getQuote();
    console.log(quote);
    quoteDisplayElement.innerHTML = '';
    quote.split('').forEach(character => {
        const charSpan = document.createElement('span');
        charSpan.innerText = character;
        quoteDisplayElement.appendChild(charSpan);
    })
    quoteInputElement.focus();
    quoteInputElement.value = null;
    startTimer();
}