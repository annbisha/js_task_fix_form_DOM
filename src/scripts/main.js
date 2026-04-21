'use strict';

'use strict';

const inputs = document.querySelectorAll('.field input');

inputs.forEach((input) => {
  const inputName = input.name;

  const labelText = inputName[0].toUpperCase() + inputName.slice(1);

  input.placeholder = labelText;

  const label = document.createElement('label');
  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = labelText;

  input.parentElement.appendChild(label);
});
