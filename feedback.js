// Declare variables to store user inputs
var userFullName;  // String to store user's name
let userMail;      // String to store user's email
const feedbackSatisfaction = false; // Boolean value for user satisfaction

// Function to validate form data and display total score in alert dialog
function validateAndCalculate(e) {
    e.preventDefault(); // Prevent the form from submitting the default way

    userFullName = document.getElementById('name').value; // Get user's name
    userMail = document.getElementById('email').value; // Get user's email

    // Check if the name input field is empty
    if (!userFullName) {
        console.error('Error: Name field is empty');
        return false;
    }

    // Check if the email is in the correct format (simple check for "@" symbol)
    if (!userMail.includes('@')) {
        console.error('Error: Invalid email format');
        return false;
    }

    // Get the value of the satisfaction radio button
    const satisfactionRadios = document.getElementsByName('satisfaction');
    let isUserSatisfied = false;
    for (const radio of satisfactionRadios) {
        if (radio.checked) {
            isUserSatisfied = radio.value === 'yes';
            break;
        }
    }

    // Debugging: Print the values of userFullName, userMail, and isUserSatisfied
    console.log('Name:', userFullName);
    console.log('Email:', userMail);
    console.log('Satisfaction:', isUserSatisfied);

    // Get ratings for each feature
    const featureARating = parseInt(document.getElementById('feature_a').value);
    const featureBRating = parseInt(document.getElementById('feature_b').value);
    const featureCRating = parseInt(document.getElementById('feature_c').value);

    // Calculate the total score
    const totalScore = featureARating + featureBRating + featureCRating;
    console.log('Total Score:', totalScore);

    // Display the total score in an alert dialog box
    alert(`Total Score of Features A, B, and C: ${totalScore}`);

    return true; // Form validation and calculation passed
}

// Attach validateAndCalculate function to the form's submit event
document.getElementById('feedbackForm').addEventListener('submit', validateAndCalculate);