const username = document.getElementById('username');
const password = document.getElementById('password');
const signInBtn = document.getElementById('signin');
const signUpBtn = document.getElementById('signup');

signInBtn.addEventListener('click', (e) => {
    e.preventDefault();
    checkInput();
})

checkInput = () => {
    let usernameValue = username.value.trim();
    let passwordValue = password.value.trim();

    if (usernameValue === '') {
        errorFor(username, 'Username cannot be blank')
    } else {
        successFor(username);
    }

    if (passwordValue === '') {
        errorFor(password, 'Password cannot be blank')
    } else {
        successFor(password);
    }

    if (usernameValue !== '' && passwordValue !== '') {
        window.location.href="patientform.html";
    }
}

errorFor = (input, message) => { 
    let formControl = input.parentElement;
    let small = formControl.querySelector('small');

    formControl.className = 'form-control error';
    small.innerText = message;
}

successFor = (input) => {
    let formControl = input.parentElement;
    formControl.className = 'form-control';
}

