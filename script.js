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
function checkEmail(input) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    displayError(input, 'Email is not valid');
  }
}

//validating inputs
function ceckRequired(inputarr) {
  inputarr.forEach(function (input) {
    if (input.value.trim() === '') {
      displayError(input, `${getField(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

//check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    displayError(input, `${getField(input)} must be at least ${min} characters`)
  } else if (input.value.length > max) {
    displayError(input, `${getField(input)} must not be more than ${max} characters`);
  } else {
    showSuccess(input);
  }
}

//validate password match
const checkPassword = function (a, b) {
  if (a.value !== b.value) {
    displayError(b, `Passwords do not match`); 
  } else {
    showSuccess(a, b);
  }
}

//validate username data type
// const checkUsernameType = function (y) {
//   if (typeof y.value !== 'string') {
//     displayError(y, 'Field only accept letters')
//   } else {
//     showSuccess(y);
//   }
// }

// function checkIfNotString(input) {
//   if (typeof input.value !== 'string') {
//     console.log('Input is not a string');
//   } else {
//     console.log('Input is a string');
//   }
// }

function getField(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  ceckRequired([username, email, password, password2]);
  checkLength(username, 2, 15);
  checkLength(password, 8, 20);
  checkPassword(password, password2);
  checkEmail(email);
  // checkUsernameType(username);
  // checkIfNotString(username);
});
