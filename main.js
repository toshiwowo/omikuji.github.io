'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    const n = Math.random();
    if (n < 0.02) {
      btn.textContent = '大吉';
    } else if (n < 0.4){
      btn.textContent = '中吉';
    } else if (n < 0.7) {
      btn.textContent = '吉';
    } else if (n < 0.98) {
      btn.textContent = '凶';
    } else {
      btn.textContent = '大凶';
    }
  });
}
