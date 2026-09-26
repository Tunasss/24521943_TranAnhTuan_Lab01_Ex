const toggleBtn = document.getElementById('theme-toggle');
const STORAGE_KEY = 'theme';

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  toggleBtn.setAttribute('aria-pressed', theme === 'dark');
  toggleBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
}

const savedTheme = localStorage.getItem(STORAGE_KEY) || 'light';
applyTheme(savedTheme);

toggleBtn.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  localStorage.setItem(STORAGE_KEY, next);
  applyTheme(next);
});

const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (form.checkValidity()) {
    status.textContent = 'Message sent successfully!';
    form.reset();
  } else {
    status.textContent = 'Please fill in all fields correctly.';
  }
});