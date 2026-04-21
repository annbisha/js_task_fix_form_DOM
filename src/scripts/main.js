'use strict';

const form = document.querySelector('form');
const inputs = form.querySelectorAll('input');

inputs.forEach((input) => {
  const inputName = input.name;

  const labelText = inputName[0].toUpperCase() + inputName.slice(1);

  input.placeholder = labelText;

  const label = document.createElement('label');
  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = labelText;

  input.parentElement.insertBefore(label, input);
});
