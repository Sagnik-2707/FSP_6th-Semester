const submitButton = document.getElementById('submitButton');
const nameInput = document.getElementById('nameInput');

submitButton.addEventListener('click', () => {
  const userName = nameInput.value;

  // Perform actions with the user's name
  if (userName.trim() === '') {
    alert('Please enter a name.');
  } else {
    // Example: Display a welcome message
    alert(`Hello, ${userName}!`);

  }
});