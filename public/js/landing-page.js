function elExists(item) {
  let element = $(`${item}`);
  return element != null ? true : false;
}

function toggleActive(arrayItems) {
  arrayItems.forEach((item) => {
    $(item).classList.toggle("active");
  });
}

const classToggleMenu = [
  ".container-navigation",
  ".container-hamburger",
  "body",
];

if (elExists("#hamburger") == true) {
  $("#hamburger").onclick = () => {
    toggleActive(classToggleMenu);
  };
}
