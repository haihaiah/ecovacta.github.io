// alert('hi saya khalid')
// alert('Selamat datang di website portfolioku')
// alert('klik OK untuk lanjut')

const header = document.querySelector('header');

window.addEventListener('scroll', function () {
  header.classList.toggle('sticky', window.scrollY > 120);
});

let menu = document.querySelector('#menu-icon');
let navList = document.querySelector('.navList');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navList.classList.toggle('active');
};