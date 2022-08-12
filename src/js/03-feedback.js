import throttle from 'lodash.throttle';

const FEEDBACK_FORM_KEY = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('.feedback-form input');
const textareaEl = document.querySelector('.feedback-form textarea');
const formStateData = {};

populateTextarea();

formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onFormSubmit);

function onFormInput(e) {
  if (e.target.nodeName === 'INPUT') {
    formStateData.email = e.target.value;
  }
  if (e.target.nodeName === 'TEXTAREA') {
    formStateData.feedback = e.target.value;
    console.log(textareaEl.value);
  }

  const formData = JSON.stringify(formStateData);
  localStorage.setItem(FEEDBACK_FORM_KEY, formData);
}

function onFormSubmit(e) {
  e.preventDefault();
  e.target.reset();
  localStorage.removeItem(FEEDBACK_FORM_KEY);
  console.log(formStateData);
}

function populateTextarea() {
  const savedFormData = localStorage.getItem(FEEDBACK_FORM_KEY);
  const formDataObj = JSON.parse(savedFormData);

  if (savedFormData) {
    formStateData.email = formDataObj.email;
    formStateData.feedback = formDataObj.feedback;
    inputEl.value = formStateData.email;
    textareaEl.value = formStateData.feedback;
  }
}
