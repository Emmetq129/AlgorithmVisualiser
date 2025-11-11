const categoryButtons = document.querySelectorAll('.category-btn');
categoryButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    content.style.display = content.style.display === 'flex' ? 'none' : 'flex';
  });
});

const algorithmButtons = document.querySelectorAll('.algorithm-btn');
const mainContent = document.querySelector('.main-content');

algorithmButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    algorithmButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    mainContent.textContent = `${btn.textContent} selected`;
  });
});
