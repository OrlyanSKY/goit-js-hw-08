import throttle from 'lodash.throttle';

const formInput = document.querySelector('.feedback-form');

formInput.addEventListener('input', onFormData);
formInput.addEventListener('submit', onFormSubmit);

const formData = {};

function onFormData(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));

  const currentValue = localStorage.getItem('feedback-form-state');
  const parseValue = JSON.parse(currentValue);
  console.log(parseValue.email);
}

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}
