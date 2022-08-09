import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');

form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onFormSubmit);

const STORAGE_KEY = 'feedback-form-state';
const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
let formData = savedData || {};

getFormData();

function onFormData(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();

  if (!input.value || !textarea.value) {
    return;
  }
  console.log(formData);
  formData = {};
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function getFormData() {
  if (savedData) {
    for (const key in savedData) {
      if (savedData.hasOwnProperty(key)) {
        input.value = savedData.email || ``;
        textarea.value = savedData.message || ``;
      }
    }
  }
}
