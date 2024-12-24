LaunchDarkly Feedback Form

## Description
This project is a user feedback form for LaunchDarkly's employee portal. Users can provide their name, email, satisfaction with recent updates, rate three features, and leave additional comments. When the form is submitted, the total score of the three features is calculated and displayed in an alert dialog.

## Files
- `feedback_form.html`: The HTML file containing the form structure.
- `styles.css`: The CSS file containing styles for the form.
- `feedback.js`: The JavaScript file handling form validation, calculation, and alert dialog.
- `README.md`: Project documentation.

## Features
- **Form Validation**: Checks for empty name field and valid email format.
- **User Rating**: Includes inputs for rating three features (values between 1-5).
- **Score Calculation**: Totals the ratings for the three features and displays the result in an alert dialog.

## Instructions
1. **Clone the Repository**:
   ```bash
   git clone <repository_url>
Open the HTML File: Open feedback_form.html in your preferred web browser.

Fill Out the Form: Provide the required details including name, email, satisfaction, and ratings for features.

Submit the Form: Click the Submit Feedback button. The total score will be displayed in an alert dialog.

Debugging
Console Logs: The JavaScript code contains console.log statements to debug user input values and calculations. Access the browser's developer console (F12) to view these logs.
Challenges
Form Validation: Ensuring the email contains '@' symbol and the name field is not empty.
Dynamic Totals: Calculating the total score from user ratings and displaying it in a user-friendly alert.
This project showcases basic JavaScript concepts such as variables, operators, functions, and event handling to create an interactive and functional user feedback form.


### Summary
This solution includes:
- A feedback form where users provide their name, email, satisfaction, and rate three features.
- Form validation to ensure name and email are correctly filled in.
- Calculation of the total score from user-provided ratings.
- An alert dialog displaying the total score upon form submission. 
This provides an interactive user experience and ensures that the input data is validated and processed correctly.