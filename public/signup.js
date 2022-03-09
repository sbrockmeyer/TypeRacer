const password = document.getElementById('passInput');
const upper = document.getElementById('upper');
const lower = document.getElementById('lower');
const number = document.getElementById('number');
const count = document.getElementById('count');

const show = document.getElementById('checkbox');

password.onfocus = function () {
    document.getElementById('errors').style.display = 'block';
}

password.onblur = function () {
    document.getElementById('errors').style.display = 'none';
}

password.onkeyup = function () {
    const upperCheck = /[A-Z]/g;
    const lowerCheck = /[a-z]/g;
    const numCheck = /[0-9]/g;

    if (password.value.match(upperCheck)) {
        upper.classList.remove('invalid');
        upper.classList.add('valid');
    } else {
        upper.classList.remove('valid');
        upper.classList.add('invalid');
    }

    if (password.value.match(lowerCheck)) {
        lower.classList.remove('invalid');
        lower.classList.add('valid');
    } else {
        lower.classList.remove('valid');
        lower.classList.add('invalid');
    }
    
    if (password.value.match(numCheck)) {
        number.classList.remove('invalid');
        number.classList.add('valid');
    } else {
        number.classList.remove('valid');
        number.classList.add('invalid');
    }

    if (password.value.length >= 8) {
        count.classList.remove('invalid');
        count.classList.add('valid');
    } else {
        count.classList.remove('valid');
        count.classList.add('invalid');
    }
}

show.onclick = function() {
    if(password.type === 'password') {
        password.type = 'text';
    } else {
        password.type = 'password';
    }
}