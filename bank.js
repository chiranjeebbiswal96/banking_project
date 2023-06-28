function toggleForm() {
  var loginForm = document.getElementById("login-form");
  var registerForm = document.getElementById("register-form");
  var formType = document.getElementsByName("form-type")[0];
  if (loginForm.style.display === "none") {
    loginForm.style.display = "block";
    registerForm.style.display = "none";
    formType.value = "login";
  } else {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
    formType.value = "register";
  }
}

function validateForm(formType) {
  var emailField = formType === "login" ? "email" : "new-email";
  var passwordField = formType === "login" ? "password" : "new-password";
  var email = document.getElementById(emailField).value;
  var password = document.getElementById(passwordField).value;
  
  // Validate email
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }
  
  // Validate password
  var passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
  if (!passwordPattern.test(password)) {
    alert("Password must be at least 8 characters long and contain at least one number and one special character (!@#$%^&*)");
    return false;
  }
  
  return true;
}
S  