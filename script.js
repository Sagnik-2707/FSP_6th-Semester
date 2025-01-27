const submitButton = document.getElementById('submitButton');
const nameInput = document.getElementById('nameInput');
const fetchedDataElement = document.getElementById('fetchedData');

// Load and display stored names on page load
window.addEventListener('load', () => {
  loadAndDisplayNames();
});

submitButton.addEventListener('click', () => {
  const userName = nameInput.value;

  if (userName.trim() === '') {
    alert('Please enter a name.');
  } else {
    // Store name in local storage
    let storedNames = localStorage.getItem('userNames');

    if (storedNames) {
      storedNames = JSON.parse(storedNames);
    } else {
      storedNames = [];
    }

    storedNames.push(userName);
    localStorage.setItem('userNames', JSON.stringify(storedNames));
    alert('Name stored in local storage!');

    // Display all stored names
    loadAndDisplayNames(); 
  }
});

function loadAndDisplayNames() {
  let storedNames = localStorage.getItem('userNames');

  if (storedNames) {
    storedNames = JSON.parse(storedNames);
    fetchedDataElement.textContent = `Fetched Data: ${storedNames.join(', ')}`;
  } else {
    fetchedDataElement.textContent = 'Fetched Data: '; 
  }
}
