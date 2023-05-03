# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
- [Author](#author)


**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview
The age calculator app is a web application that allows users to calculate their age based on the date entered. The app accepts input for the day, month, and year of birth and then calculates the user's age in years, months, and days. The app provides instant feedback on whether the entered date is valid or not, and it also uses a responsive design to provide optimal user experience across different screen sizes.  
The app also uses CSS to provide a visually pleasing and user-friendly interface. The input fields have been styled to provide instant feedback on the validity of the entered data, and the font size and layout have been optimized for different screen sizes.  
Overall, the age calculator app is a useful tool for anyone who wants to quickly and easily calculate their age. The app is intuitive and easy to use, and it provides accurate and reliable results.  

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

![](./screenshot.jpg)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process
- I started by brainstorming the basic functionality I wanted the app to have - calculating a person's age based on their birthdate. I then wrote out a plan for how I would go about implementing this functionality.  
- I created a basic HTML file with a form containing input fields for the user's birthdate, and a button to submit the form.  
- I then wrote the JavaScript code to validate the user's input and calculate their age based on the birthdate entered. I used a combination of built-in JavaScript functions (like Date() and getFullYear()) and custom functions to handle the calculations.  
- I added some basic CSS to style the form and input fields.  
- I tested the app locally in my browser and made any necessary adjustments to the code.  
- Once I was happy with the functionality and styling, I deployed the app using Vercel. I created an account,  linked it to my GitHub repository, and configured the settings to automatically deploy the app whenever changes were pushed to the repository.  
- I then tested the deployed app to ensure that it was functioning correctly and looked as expected.  
- Overall, the process involved planning out the basic functionality, coding the app using JavaScript and      HTML, styling it with CSS, testing it locally, and deploying it using Vercel.  

### Built with
- CSS Grid
- Mobile-first workflow
- HTML: for creating the structure of the web page
- CSS: for styling the web page
- JavaScript: for handling the user inputs and calculating the age
- Git: for version control and collaboration
- GitHub: for hosting the repository
- Vercel: for hosting the live app
- Visual Studio Code: for code editing and development
- Chrome DevTools: for debugging and testing the app

## Author

- Website - [Irvine Sunday Portfolio](https://www.your-site.com)
- Frontend Mentor - [sundayirvine-code](https://www.frontendmentor.io/profile/sundayirvine-code)
