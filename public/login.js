const password = document.getElementById('password');

const show = document.getElementById('checkbox');

show.onclick = function() {
    if(password.type === 'password') {
        password.type = 'text';
    } else {
        password.type = 'password';
    }
}