const feedbackForm = document.querySelector('.feedback-form');
const formData = {
  email: '',
  message: '',
};

restoreFormFields();

feedbackForm.addEventListener('input', event => {
  formData.email = feedbackForm.elements.email.value.trim();
  formData.message = feedbackForm.elements.message.value.trim();

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

feedbackForm.addEventListener('submit', handleSubmit);

function restoreFormFields() {
  const parsedFormState = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );

  if (parsedFormState) {
    feedbackForm.elements.email.value = parsedFormState.email;
    feedbackForm.elements.message.value = parsedFormState.message;

    formData.email = parsedFormState.email;
    formData.message = parsedFormState.message;
  }
}

function resetFormData() {
  const formDataKeys = Object.keys(formData);

  for (const key of formDataKeys) {
    formData[key] = '';
  }
}

function handleSubmit(event) {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');

    return;
  }

  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  resetFormData();
  feedbackForm.reset();
}