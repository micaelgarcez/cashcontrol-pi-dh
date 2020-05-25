const $ = document.querySelector.bind(document);

function toggleActive(arrayItems) {
  arrayItems.forEach(item => {
    $(item).classList.toggle('active');
  });
}

$('.btn-circle.add').onclick = () => { toggleActive([
  '.sob-buttons', 
  '.container-buttons'
]) };

const classToggleMenu = [
  '.container-navigation',
  '.sob-menu'
];
$('#hamburger').onclick = () => { toggleActive(classToggleMenu) };
$('.sob-menu').onclick = () => { toggleActive(classToggleMenu) };