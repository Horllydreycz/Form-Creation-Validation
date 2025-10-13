document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");
  const inputUsername = document.getElementById("username");
  const inputEmail = document.getElementById("email");
  const inputPassword = document.getElementById("password");
  const username = inputUsername.value.trim();
  const email = inputEmail.value.trim();
  const password = inputPassword.value.trim();
  let isValid = true;
  const messages = [];
  function Register() {
    if (username.length < 3) {
      isValid = false;
      messages.push("input is less than three characters");
    }
    if (!email.includes("@") || !email.includes(".")) {
      isValid = false;
      messages.push("Email must include both @ and .");
    }
    if (!password.length >= 8) {
      isValid = false;
      messages.push("Password is less than 8 characters");
    }
  }
  feedbackDiv.style.display = "block";
  if (isValid) {
    Register();
    feedbackDiv.textContent = "Registration successful!";
    feedbackDiv.style.color = "#28a745";
  } else {
    Register();
    feedbackDiv.innerHTML = messages.join("<br>");
    feedbackDiv.style.color = "#dc3545";
  }
  form.addEventListener("submit", function (event) {
    event.preventDefault();
  });
});
