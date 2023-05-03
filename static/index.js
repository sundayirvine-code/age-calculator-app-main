// Get input fields
const dayInput = document.getElementById('day');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');

// Get the labels
const dayLabel = document.querySelector('.dayLabel');
const monthLabel = document.querySelector('.monthLabel');
const yearLabel = document.querySelector('.yearLabel');

// Get error labels
const dayErrorLabel = document.querySelector('.dayLabelError');
const monthErrorLabel = document.querySelector('.monthLabelError');
const yearErrorLabel = document.querySelector('.yearLabelError');

// Get output fields
const yearsOutput = document.querySelector('.yearsInput');
const monthsOutput = document.querySelector('.monthsInput');
const daysOutput = document.querySelector('.daysInput');

//Get the submit button
const btn = document.querySelector('.btn');


btn.addEventListener('click', (event) => {
    event.preventDefault();// prevent form submission
 
    // Get input values
    const day = dayInput.value;
    const month = monthInput.value;
    const year = yearInput.value

   

    // Function that updates the output fields
    calculateAge(year, month, day);

    // Remove the animation class after the animation finishes
  yearsOutput.addEventListener('animationend', () => {
    yearsOutput.classList.remove('age-animation');
  });
  monthsOutput.addEventListener('animationend', () => {
    monthsOutput.classList.remove('age-animation');
  });
  daysOutput.addEventListener('animationend', () => {
    daysOutput.classList.remove('age-animation');
  });

    
  });

  const emptycheck = 1;

  // Fuction that handle empty input fields
  function isEmptyError(day, month, year) {

    // Check if all fields are empty
    if (day === '' && month === '' && year === '') {
        // Get all input labels
        const inputLabels = document.querySelectorAll('.label');
        inputLabels.forEach((label) => {
            label.style.color = '#f36e6f';
          });
        dayInput.style.borderColor = '#e46d6c';
        monthInput.style.borderColor = '#e46d6c';
        yearInput.style.borderColor = '#e46d6c';
        dayErrorLabel.innerHTML = 'This field is required';
        monthErrorLabel.innerHTML = 'This field is required';
        yearErrorLabel.innerHTML = 'This field is required';
        emptycheck = 0;
        return emptycheck;
    }

    // Check if day field is empty
    if (day === '') {
        dayLabel.style.color = '#f36e6f';
        dayInput.style.borderColor = '#e46d6c';
        dayErrorLabel.innerHTML = 'This field is required';
        emptycheck = 0;
        
    } else {
        dayInput.style.borderColor = '#b4b4b4';
        dayErrorLabel.innerHTML = '';
        dayLabel.style.color = '#adadad';
    }

    // Check if month field is empty
    if (month === '') {
        monthLabel.style.color = '#f36e6f';
        monthInput.style.borderColor = '#e46d6c';
        monthErrorLabel.innerHTML = 'This field is required';
        emptycheck = 0;
        
    } else {
        monthInput.style.borderColor = '#b4b4b4';
        monthErrorLabel.innerHTML = '';
        monthLabel.style.color = '#adadad';
    }

    // Check if year field is empty
    if (year === '') {
        yearLabel.style.color = '#f36e6f';
        yearInput.style.borderColor = '#e46d6c';
        yearErrorLabel.innerHTML = 'This field is required';
        emptycheck = 0;
        
    } else {
        yearInput.style.borderColor = '#b4b4b4';
        yearErrorLabel.innerHTML = '';
        yearLabel.style.color = '#adadad';
    }
    return emptycheck;
  }

  const validinputcheck = 1;
  function validateInputs(day, month, year) {

    // Check if any field is empty
    if (isEmptyError(day, month, year) == 0) {
      return;
    }

    const currentYear = new Date().getFullYear();

    // Check if all fields are invalid
    if ((day < 1 || day > 31) && (month < 1 || month > 12)  && (year > currentYear)) {
        // Get all input labels
        const inputLabels = document.querySelectorAll('.label');
        inputLabels.forEach((label) => {
            label.style.color = '#f36e6f';
          });
        dayInput.style.borderColor = '#e46d6c';
        monthInput.style.borderColor = '#e46d6c';
        yearInput.style.borderColor = '#e46d6c';
        dayErrorLabel.innerHTML = 'Must be a valid day';
        monthErrorLabel.innerHTML = 'Must be a valid month';
        yearErrorLabel.innerHTML = 'Must be in the past';
        validinputcheck = 0;
        return validinputcheck;
    }
  
    // Validate day
    if (day < 1 || day > 31) {
      dayInput.style.borderColor = '#e46d6c';
      dayErrorLabel.innerHTML = 'Must be a valid day';
      dayLabel.style.color = '#f36e6f';
      validinputcheck = 0;
    } else {
      dayInput.style.borderColor = '#b4b4b4';
      dayErrorLabel.innerHTML = '';
      dayLabel.style.color = '#adadad';
    }
    
    // Validate month
    if (month < 1 || month > 12) {
      monthInput.style.borderColor = '#e46d6c';
      monthErrorLabel.innerHTML = 'Must be a valid month';
      monthLabel.style.color = '#f36e6f';
      validinputcheck = 0;
    } else {
      monthInput.style.borderColor = '#b4b4b4';
      monthErrorLabel.innerHTML = '';
      monthLabel.style.color = '#adadad';
    }
    
    // Validate year
    if (year > currentYear) {
      yearInput.style.borderColor = '#e46d6c';
      yearErrorLabel.innerHTML = 'Must be in the past';
      yearLabel.style.color = '#f36e6f';
      validinputcheck = 0;
    } else {
      yearInput.style.borderColor = '#b4b4b4';
      yearErrorLabel.innerHTML = '';
      yearLabel.style.color = '#adadad';
    }

    return validinputcheck;
}


const validdatecheck = 1;
function isValidDate(day, month, year) {

    if (validateInputs(day, month, year) == 0) {
      return;
    }
    const date = new Date(year, month - 1, day);

    // Get all input labels
    const inputLabels = document.querySelectorAll('.label');
    
    if (
      date.getDate() == day &&
      date.getMonth() == month - 1 &&
      date.getFullYear() == year
    ){
        // Remove Errors
        inputLabels.forEach((label) => {
            label.style.color = '#adadad';
          });
        dayErrorLabel.innerHTML = '';
        dayInput.style.borderColor = '#b4b4b4';
        monthInput.style.borderColor = '#b4b4b4';
        yearInput.style.borderColor = '#b4b4b4';
        return validdatecheck;
    }
    else{
        // invalid date
        inputLabels.forEach((label) => {
            label.style.color = '#f36e6f';
          });
        
        dayInput.style.borderColor = '#e46d6c';
        monthInput.style.borderColor = '#e46d6c';
        yearInput.style.borderColor = '#e46d6c';
        dayErrorLabel.innerHTML = 'Must be a valid date';
        validdatecheck = 0;
        return validdatecheck;
    }
  }

  function calculateAge(year, month, day) {
    if (isValidDate(day, month, year) == 0) {
      return;
    }

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
  
    yearsOutput.innerHTML = ageYears;
    monthsOutput.innerHTML = ageMonths;
    daysOutput.innerHTML = ageDays;

    // Add the animation class to the age output elements
    yearsOutput.classList.add('age-animation');
    monthsOutput.classList.add('age-animation');
    daysOutput.classList.add('age-animation');

  }
  
  