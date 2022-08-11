const FEEDBACK_FORM_KEY = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');
// const emailEl = document.querySelector('.feedback-form input');
// const messageEl = document.querySelector('.feedback-form textarea');
const formStateData = {};

formEl.addEventListener('input', saveValue);
formEl.addEventListener('submit', saveString);

function saveValue(e) {
  if (e.target.nodeName === 'INPUT') {
    formStateData.email = e.target.value;
  }
  if (e.target.nodeName === 'TEXTAREA') {
    formStateData.feedback = e.target.value;
  }

  let formData = JSON.stringify(formStateData);
  localStorage.setItem(FEEDBACK_FORM_KEY, formData);
  console.log(formData);
}

function saveString(e) {
  e.preventDefault();
}

console.log(formStateData);
