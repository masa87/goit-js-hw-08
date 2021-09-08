let throttle = require('lodash.throttle');
const qs = selector => document.querySelector(selector);

const email = qs('input[name="email"]');
const message = qs('textarea[name="message"]');
const btn = qs('button[type="submit"]');

const checkStorage = () => {
  if (localStorage.getItem('feedback-form-state') !== '') {
    email.value = localStorage.getItem('email');
    message.value = localStorage.getItem('message');
  }
};
checkStorage();

const submitForm = e => {
  e.preventDefault();
  const obj = {
    email: email.value,
    message: message.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(obj));
  console.log(obj);

  localStorage.clear();
  email.value = '';
  message.value = '';
};

email.addEventListener(
  'input',
  throttle(e => {
    e.value = localStorage.setItem('email', email.value);
  }, 500),
);
message.addEventListener(
  'input',
  throttle(e => {
    e.value = localStorage.setItem('message', message.value);
  }, 500),
);
btn.addEventListener('click', submitForm);
