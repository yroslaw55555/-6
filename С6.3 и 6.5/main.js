const btn = document.querySelector('.j-btn-test');
const icon1 = document.querySelector('.bi-arrow');
const icon2 = document.querySelector('.bi-arrowFull');
const wt = window.screen.width;
const ht = window.screen.height; 


btn.addEventListener('click', () => {
  //btn.classList.toggle('btn--magic');
  window.alert(`Размеры экрана ${wt}X${ht}`);
  icon1.classList.toggle('unShow');
  icon2.classList.toggle('bi-arrowFull');
});