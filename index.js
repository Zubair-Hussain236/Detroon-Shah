document.getElementById('changeButton').addEventListener('click', function() {
    // Change background color and display message
    document.body.style.backgroundColor = '#ffeb3b'; // Change background color
    document.getElementById('message').textContent = "The background color has changed!";
    document.getElementById('changeButton').disabled = true; // Disable the change button after it's clicked
});

document.getElementById('resetButton').addEventListener('click', function() {
    // Reset background color and message
    document.body.style.backgroundColor = '#f0f0f0'; // Reset to the original background color
    document.getElementById('message').textContent = "Click the button to change the page's background color and display a message.";
    document.getElementById('changeButton').disabled = false; // Enable the change button again
});
