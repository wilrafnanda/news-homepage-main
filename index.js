const menuBtn = document.getElementById('menu-btn');
const closeMenuBtn = document.getElementById('close-btn');
const overlayEl = document.getElementById('cover-box');
const sidBarEl = document.getElementById('side-bar');

menuBtn.addEventListener('click', () => {
    sidBarEl.classList.add('active');
    overlayEl.classList.add('active');
 

    // alert('Menu button clicked!');

});

closeMenuBtn.addEventListener('click', () => {
  sidBarEl.classList.remove('active');
  overlayEl.classList.remove('active');
 

}  ) 