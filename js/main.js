'use strict';

{
  const menuItems = document.querySelectorAll('.menu li a');
  const content = document.querySelectorAll('.content');

  menuItems.forEach(clickedItem => {
    clickedItem.addEventListener('click', e => {
      e.preventDefault();
      menuItems.forEach(item => {
        item.classList.remove('active');
      })
      clickedItem.classList.add('active');

      content.forEach(content => {
        content.classList.remove('active');
      })
      document.getElementById(clickedItem.dataset.id).classList.add('active');
    })
  })
}