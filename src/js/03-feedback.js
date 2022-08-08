import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');

form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onFormSubmit);

const formData = {};
const STORAGE_KEY = 'feedback-form-state';

getFormData();

function onFormData(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(formData);
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function getFormData() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedData) {
    for (const key in savedData) {
      if (savedData.hasOwnProperty(key)) {
        input.value = savedData.email || ``;
        textarea.value = savedData.message || ``;
        formData[key] = savedData[key];
      }
    }
  }
}
