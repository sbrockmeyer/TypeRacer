// $('nav div').click(function() {
//     $('ul').slideToggle();
// });

// $(window).resize(function() {
//     if ($(window).width() > 775) {
//         $('ul').removeAttr('style');
//     }
// });

const testQuote = 'Mary had a little lamb';
const quoteDisplayElement = document.getElementById('quote');
const quoteInputElement = document.getElementById('quoteInput');

quoteInputElement.addEventListener('input', () => {
    const quoteArray = quoteDisplayElement.querySelectorAll('span');
    const valueArray = quoteInputElement.value.split('');
    let correct = true;
    let recentCorrectPhrase = "";

    quoteArray.forEach((charSpan, index) => {
        const char = valueArray[index];
        if(char == null) {
            charSpan.classList.remove('correct');
            quoteInputElement.innerHTML = recentCorrectPhrase;
            correct = false;

        } else if (char === charSpan) {
            charSpan.classList.add('correct');
            recentCorrectPhrase = valueArray.join('');
        } else {
            charSpan.classList.remove('correct');
            correct = false;
        }
    })
})

function renderQuote() {
    const quote = testQuote;
    quoteDisplayElement.innerHTML = '';
    quote.split('').forEach(character => {
        const charSpan = document.createElement('span');
        charSpan.innerText = character;
        quoteDisplayElement.appendChild(charSpan);
    })
    quoteInputElement.value = null;
}
