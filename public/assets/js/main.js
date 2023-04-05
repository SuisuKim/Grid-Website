const toggleBtn = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

toggleBtn.addEventListener('click', (event) => {
  event.preventDefault();
  // prevent to open an atucal link

  menu.classList.toggle('active');
  // misspelling....
})
