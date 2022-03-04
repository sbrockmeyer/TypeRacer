//Typing Game Script

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
                if (recentCorrectPhraseArray[recentCorrectPhraseArray.length-1] === char) {
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
    cancelInterval(timer);
}

function startTimer() {
    timer = setInterval(updateTimer, 1000);
    updateTimer();
}

function updateTimer() {
    timeRemaining = timeRemaining - 1;

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

//Login Page Script

//-----

// const username = document.getElementById('name');
// const password = document.getElementById('pass');
// const pw_verify = document.getElementById('pass-verify');

// const errors = document.getElementById('errors');

// let error_msg = "";
// let no_errors = true;

// const name_patt = /\S/;
// const pass_patt = /\S/;

// const validate = evt => {
//     error_msg = "";
//     no_errors = true;

//     if(pw_verify.value != password.value) {
//         error_msg = 'Must match Password';
//         no_errors = false;
//     };

//     if(!pass_patt.test(password.value)) {
//         error_msg = 'Password cannot be blank.';
//         no_errors = false;
//     };

//     if(!name_patt.test(username.value)) {
//         error_msg = 'Username cannot be blank.';
//         no_errors = false;
//     };

//     errors.value = error_msg;
// }

// const mySubmit = () => {
//     validate();
//     return no_errors;
// }