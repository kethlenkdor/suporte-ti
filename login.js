const loginForm = document.querySelector('#login-form');
const loginError = document.querySelector('#login-error');
const usernameInput = document.querySelector('#login-username');
const validCredentials = { username: 'admin', password: 'admin123' };

if (localStorage.getItem('nexo-auth') === 'true') {
  window.location.href = 'home.html';
}

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = String(new FormData(loginForm).get('username') || '').trim();
  const password = String(new FormData(loginForm).get('password') || '');

  if (username.toLowerCase() === validCredentials.username && password === validCredentials.password) {
    localStorage.setItem('nexo-auth', 'true');
    window.location.href = 'home.html';
    return;
  }

  loginError.textContent = 'Credenciais inválidas. Use admin / admin123.';
  loginForm.reset();
  usernameInput.focus();
});
