const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
form.addEventListener('submit', e =>{
    e.preventDefault();
    validateInputs();
});
const setError = (element,message) =>{
    const inputContol = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputContol.classList.add('error');
    inputContol.classList.remove('success');
}
const setSuccess = element =>{
    const inputContol = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputContol.classList.add('success');
    inputContol.classList.remove('error');
}

const isValidEmail = email =>{
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/;
    return re.test(String(email).toLowerCase())
}

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  
  if(usernameValue ==='') {
    setError(username, 'username is required ');
  } else {
    setSuccess(username);
  }
  if(emailValue ==='') {
    setError(username, 'email is required ');
  } else if (!isValidEmail(emailValue)) {
    setError(email, 'provede a valid email address');
  } else {
    setSuccess(email);
  }
  if(passwordValue ==='') {
    setError(password, 'password is required ');
  } else if (passwordValue.length < 8) {
    setError(password, 'Password must be at least 8 charachers');
  } else {
    setSuccess(password);
  }
  if(passwor2dValue ==='') {
    setError(password2, 'please confirm your password ');
  } else if (password2Value.length < 8) {
    setError(password2, 'Password do not match');
  } else {
    setSuccess(password2);
  }
};




