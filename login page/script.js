// Array of user objects with username and password
const users = [
    { username: "jane", password: "jane123" },
    { username: "sahar", password: "mypass123" },
    { username: "reem", password: "reem321" }
  ];
  
  // Reference to form elements
  const loginForm = document.querySelector(".login-form");
  const usernameInput = loginForm.querySelector("input[type='text']");
  const passwordInput = loginForm.querySelector("input[type='password']");
  const togglePasswordIcon = loginForm.querySelector(".input-container i");
  
  // Function to validate the username and password
  function validateLogin(username, password) {
    return users.some(user => user.username === username && user.password === password);
  }
  
  // Handle form submission for login validation
  loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
  
    // Validate the login credentials
    if (validateLogin(username, password)) {
      alert("Login successful!");
    } else {
      alert("Invalid username or password.");
    }
  });
  
  // Toggle password visibility
  togglePasswordIcon.addEventListener("click", function() {
    const currentType = passwordInput.getAttribute("type");
  
    // Toggle the input type between 'password' and 'text'
    passwordInput.setAttribute("type", currentType === "password" ? "text" : "password");
  
    // Toggle the eye icon class between 'fa-eye' and 'fa-eye-slash'
    this.classList.toggle("fa-eye-slash");
    this.classList.toggle("fa-eye");
  });
  