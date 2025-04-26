// Переключение темы
const toggleButton = document.getElementById('theme-toggle');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Установка текущего года в футере
const yearSpan = document.getElementById('year');
yearSpan.textContent = new Date().getFullYear();
