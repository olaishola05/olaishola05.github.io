const form = document.querySelector('.form-class');
const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// const EMAIL_REQUIRED = 'Please enter your email';
const EMAIL_INVALID = 'Please enter email with lowercase letters';

const toastMessage = (input, message, type) => {
  const msg = input.parentNode.querySelector('div');
  msg.innerHTML = message;
  input.className = type ? 'successMessage' : 'errorMessage';
  msg.className = 'open';
  setTimeout(() => {
    msg.className = msg.className.replace('open', '');
  }, 1000);

  console.log(msg);

  return type;
};

const showError = (input, message) => toastMessage(input, message, false);

function validateEmail(input, invalidMsg) {
  const email = input.value.trim();

  if (email !== email.toLowerCase() && !emailRegex.test(email)) {
    return showError(input, invalidMsg);
  }
  return true;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const emailValid = validateEmail(form.elements.email, EMAIL_INVALID);

  if (emailValid) {
    form.submit();
    form.reset();
  }
});
