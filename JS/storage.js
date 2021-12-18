const userName = document.querySelector('#name');
const userEmail = document.querySelector('#email');
const userMessage = document.querySelector('#mail-content');

function setItemToLocalStorage() {
  const formData = {
    name: userName.value,
    email: userEmail.value,
    message: userMessage.value,
  };
  localStorage.setItem('FormsData', JSON.stringify(formData));
}

const getFormInputs = document.querySelectorAll('input, textarea');
for (let input = 0; input < getFormInputs.length; input += 1) {
  getFormInputs[input].addEventListener('changes', () => {
    setItemToLocalStorage();
  });
}

const storedFormData = JSON.parse(localStorage.getItem('FormData'));
if (storedFormData !== null) {
  userName.value = storedFormData.name;
  userEmail.value = storedFormData.email;
  userMessage.value = storedFormData.message;
}
