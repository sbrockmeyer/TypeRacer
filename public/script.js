// $('nav div').click(function() {
//     $('ul').slideToggle();
// });

// $(window).resize(function() {
//     if ($(window).width() > 775) {
//         $('ul').removeAttr('style');
//     }
// });

const testQuote = 'Mary had a little lamb 123';
const quoteDisplayElement = document.getElementById('quote');
const quoteInputElement = document.getElementById('quoteInput');
const recentCorrectPhraseArray = [];

quoteInputElement.addEventListener('input', () => {
    const quoteArray = quoteDisplayElement.querySelectorAll('span');
    const valueArray = quoteInputElement.value.split('');
    let correct = true;

    quoteArray.forEach((charSpan, index) => {
        const char = valueArray[index];
        if(char == null) {
            charSpan.classList.remove('correct');
            quoteInputElement.value = recentCorrectPhraseArray.join('');
            correct = false;

        } else if (char === charSpan.innerHTML) {
            charSpan.classList.add('correct');
            recentCorrectPhraseArray.push(char);
            correct = true;
        } else {
            charSpan.classList.remove('correct');
            correct = false;
            quoteInputElement.value = recentCorrectPhraseArray.join('');
        }
    })
    recentCorrectPhraseArray.length = 0;
})

function renderQuote() {
    recentCorrectPhrase = '';
    const quote = testQuote;
    quoteDisplayElement.innerHTML = '';
    quote.split('').forEach(character => {
        const charSpan = document.createElement('span');
        charSpan.innerText = character;
        quoteDisplayElement.appendChild(charSpan);
    })
    quoteInputElement.value = null;
}
