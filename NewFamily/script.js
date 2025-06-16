// הרשמה
function register() {
  const username = document.getElementById('register-username').value;
  const password = document.getElementById('register-password').value;
  const message = document.getElementById('register-message');

  if (username && password) {
    localStorage.setItem(username, password);
    message.textContent = "נרשמת בהצלחה! תועבר לדף ההתחברות...";
    message.style.color = "green";
    setTimeout(() => {
      window.location.href = "login.html";
    }, 1500);
  } else {
    message.textContent = "נא למלא את כל השדות.";
    message.style.color = "red";
  }
}

// התחברות
function login() {
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;
  const message = document.getElementById('login-message');

  const storedPassword = localStorage.getItem(username);

  if (storedPassword === password) {
    message.textContent = "התחברת בהצלחה! מועבר לדף הבית...";
    message.style.color = "green";
    setTimeout(() => {
      window.location.href = "home.html";
    }, 1500);
  } else {
    message.textContent = "שם משתמש או סיסמה שגויים.";
    message.style.color = "red";
  }
}
