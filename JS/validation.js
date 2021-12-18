const form = document.querySelector('.form-class');
const emailRegex = /^([a-z@.0-9]{0,})+$/;
const EMAIL_INVALID = 'Please enter email with lowercase letters';

const toastMessage = (message, type) => {
  const errorMessage = document.querySelector('#message');
  errorMessage.innerHTML = message;

  errorMessage.style.visibility = 'visible';
  setTimeout(() => {
    errorMessage.style.visibility = 'hidden';
  }, 3000);

  return type;
};

function validateEmail(input, invalidMsg) {
  const email = input.value.trim();

  if (email !== email.toLowerCase() && !emailRegex.test(email)) {
    input.classList.toggle('errorMessage');
    const formIcon = input.parentElement;
    formIcon.classList.add('error');
    return toastMessage(invalidMsg);
  }
  input.classList.toggle('successMessage');
  const formIcon = input.parentElement;
  formIcon.classList.add('success');
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
