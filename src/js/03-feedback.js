import throttle from 'lodash.throttle';

const FEEDBACK_FORM_KEY = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('.feedback-form input');
const textareaEl = document.querySelector('.feedback-form textarea');
const formStateData = {};

fulfillForm();

formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onFormSubmit);

function onFormInput(e) {
  formStateData[e.target.name] = e.target.value;

  const formData = JSON.stringify(formStateData);
  localStorage.setItem(FEEDBACK_FORM_KEY, formData);
}

function onFormSubmit(e) {
  e.preventDefault();
  e.target.reset();
  localStorage.removeItem(FEEDBACK_FORM_KEY);
  console.log(formStateData);
}

function fulfillForm() {
  const savedFormData = localStorage.getItem(FEEDBACK_FORM_KEY);
  const formDataObj = JSON.parse(savedFormData);

  if (savedFormData) {
    formStateData.email = formDataObj.email;
    formStateData.message = formDataObj.message;
    inputEl.value = formStateData.email;
    textareaEl.value = formStateData.message;
  }
}
