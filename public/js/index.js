const $ = document.querySelector.bind(document);

function toggleActive(arrayItems) {
  arrayItems.forEach(item => {
    $(item).classList.toggle('active');
  });
}

const classToggleButtons = [
  '.sob-buttons', 
  '.container-buttons'
];
$('.btn-circle.add').onclick = () => { toggleActive(classToggleButtons) };
$('.sob-buttons').onclick = () => { toggleActive(classToggleButtons) };

const classToggleMenu = [
  '.container-navigation',
  '.sob-menu'
];
$('#hamburger').onclick = () => { toggleActive(classToggleMenu) };
$('.sob-menu').onclick = () => { toggleActive(classToggleMenu) };