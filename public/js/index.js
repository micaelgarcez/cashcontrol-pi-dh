const $ = document.querySelector.bind(document);

function elExists(item){
  let element = $(`${item}`);
  return (element != null)? true : false;
}

function toggleActive(arrayItems) {
  arrayItems.forEach(item => {
    $(item).classList.toggle('active');
  });
}

const classToggleButtons = [
  '.sob-buttons', 
  '.container-buttons'
];
if(elExists('.btn-circle.add') == true){
  $('.btn-circle.add').onclick = () => { toggleActive(classToggleButtons) };
  $('.sob-buttons').onclick = () => { toggleActive(classToggleButtons) };
}

const classToggleMenu = [
  '.container-navigation',
  '.sob-menu'
];
if(elExists('#hamburger') == true){
  $('#hamburger').onclick = () => { toggleActive(classToggleMenu) };
  $('.sob-menu').onclick = () => { toggleActive(classToggleMenu) };
}