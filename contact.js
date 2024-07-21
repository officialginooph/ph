// Validate the form and handle submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Check if terms checkbox is checked
    var termsAccepted = document.getElementById('terms').checked;
    if (!termsAccepted) {
      showAlert('Please accept the terms and conditions', 'error');
    } else {
      // Form submission can proceed (dummy action here)
      var formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
      };
  
      // Example: Display form data (in a real scenario, you would handle this differently)
      console.log('Form data:', formData);
      showAlert('Form submitted successfully!', 'success');
      
      // Optionally reset the form after submission
      document.getElementById('contactForm').reset();
    }
  });
  
  // Function to show alert message
  function showAlert(message, type) {
    var alertBox = document.getElementById('alertBox');
    alertBox.textContent = message;
    alertBox.className = 'alert ' + type;
    
    // Clear alert after 3 seconds
    setTimeout(function() {
      alertBox.textContent = '';
      alertBox.className = 'alert';
    }, 3000);
  }
  