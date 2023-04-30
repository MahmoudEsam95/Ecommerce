const form = document.getElementById("RegForm");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent form submission
  const username = form.username.value;
  const password = form.password.value;
  const email = form.email.value;
  // add code to save username and password to local storage

  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
  localStorage.setItem("email", email);

  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");
  const savedEmail = localStorage.getItem("email");
});
