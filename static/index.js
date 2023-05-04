// REFACTORED JS

const inputs = [
  { field: document.getElementById('day'), label: document.querySelector('.dayLabel'), errorLabel: document.querySelector('.dayLabelError') },
  { field: document.getElementById('month'), label: document.querySelector('.monthLabel'), errorLabel: document.querySelector('.monthLabelError') },
  { field: document.getElementById('year'), label: document.querySelector('.yearLabel'), errorLabel: document.querySelector('.yearLabelError') },
];

const outputFields = [
  document.querySelector('.yearsInput'),
  document.querySelector('.monthsInput'),
  document.querySelector('.daysInput'),
];

const btn = document.querySelector('.btn');

btn.addEventListener('click', (event) => {
  event.preventDefault();

  const values = {
    day: inputs[0].field.value,
    month: inputs[1].field.value,
    year: inputs[2].field.value,
  };

  handleInputErrors(values);
});

function handleInputErrors(values) {
  let isValid = true;
  const currentYear = new Date().getFullYear();

  inputs.forEach((input) => {
    const { field, label, errorLabel } = input;
    const value = values[field.id];

    if (!value) {
      label.style.color = '#f36e6f';
      field.style.borderColor = '#e46d6c';
      errorLabel.innerHTML = 'This field is required';
      isValid = false;
    } else if (field.id === 'day' && (value < 1 || value > 31)) {
      field.style.borderColor = '#e46d6c';
      errorLabel.innerHTML = 'Must be a valid day';
      label.style.color = '#f36e6f';
      isValid = false;
    } else if (field.id === 'month' && (value < 1 || value > 12)) {
      field.style.borderColor = '#e46d6c';
      errorLabel.innerHTML = 'Must be a valid month';
      label.style.color = '#f36e6f';
      isValid = false;
    } else if (field.id === 'year' && value > currentYear) {
      field.style.borderColor = '#e46d6c';
      errorLabel.innerHTML = 'Must be in the past';
      label.style.color = '#f36e6f';
      isValid = false;
    } else {
      field.style.borderColor = '#b4b4b4';
      errorLabel.innerHTML = '';
      label.style.color = '#adadad';
    }
  });

  if (isValid) {
    calculateAge(values.year, values.month, values.day);
    outputFields.forEach((field) => {
      field.addEventListener('animationend', () => {
        field.classList.remove('age-animation');
      });
    });
  }
}

function calculateAge(year, month, day) {
  const today = new Date();
  const birthDate = new Date(year, month - 1, day); // month is zero-indexed in Date constructor, so subtract 1 from input month

  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

  if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
    ageYears--;
    ageMonths += 12;
  }

  if (ageDays < 0) {
    const daysInLastMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    ageMonths--;
    ageDays += daysInLastMonth;
  }

  const age = document.querySelector('.years');
  if (ageYears == 1) {
    age.innerHTML = 'year';
  }
  else{
    age.innerHTML = 'years';
  }

  // Update the Fields
  outputFields[0].innerHTML = ageYears;
  outputFields[1].innerHTML = ageMonths;
  outputFields[2].innerHTML = ageDays;

  // Add the animation class to the age output elements
  outputFields[0].classList.add('age-animation');
  outputFields[1].classList.add('age-animation');
  outputFields[2].classList.add('age-animation');

}