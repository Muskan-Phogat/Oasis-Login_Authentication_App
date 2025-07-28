function register() {
  const username = document.getElementById("regUsername").value;
  const password = document.getElementById("regPassword").value;

  if (!username || !password) {
    showMessage("Please fill all fields");
    return;
  }

  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
  showMessage("Registration successful. Please login.", "green");
}

function login() {
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  const storedUser = localStorage.getItem("username");
  const storedPass = localStorage.getItem("password");

  if (username === storedUser && password === storedPass) {
    window.location.href = "secure.html";
  } else {
    showMessage("Invalid credentials");
  }
}

function showMessage(msg, color = "red") {
  const messageEl = document.getElementById("message");
  messageEl.style.color = color;
  messageEl.textContent = msg;
}
