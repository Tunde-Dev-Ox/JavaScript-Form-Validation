const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//function error
function displayError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// function showSuccess()
function showSuccess(input) {
  formControl = input.parentElement;
  formControl.className = 'form-control success';
}

//validating email
function isValidEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (username.value === '') {
    displayError(username, 'Username cannot be blank');
  } else {
    showSuccess(username);
  }

  if (email.value === '') {
    displayError(email, 'Email cannot be blank');
  } else if (!isValidEmail(email.value)) {
    displayError(email, 'email is not valid');
  } else {
    showSuccess(email);
  }

  if (password.value === '') {
    displayError(password, 'Password cannot be blank');
  } else {
    showSuccess(password);
  }

  if (password2.value === '') {
    displayError(password2, 'Re-enter your password');
  } else {
    showSuccess(password2);
  }
});
