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

window.addEventListener("load", () => {
  let scrollLinks = document.querySelectorAll(".scroll");
  scrollLinks.forEach((scroll) => {
    scroll.onclick = (e) => {
      e.preventDefault();
      var id = e.target.getAttribute("href").replace("#", "");
      var target = document.getElementById(id).getBoundingClientRect().top;
      animateScroll(target - 100);
      classToggleMenu.forEach((item) => {
        $(item).classList.remove("active");
      });
    };
  });
});

function animateScroll(targetHeight) {
  targetHeight =
    document.body.scrollHeight - window.innerHeight > targetHeight + scrollY
      ? targetHeight
      : document.body.scrollHeight - window.innerHeight;
  var initialPosition = window.scrollY;
  var SCROLL_DURATION = 30;
  var step_x = Math.PI / SCROLL_DURATION;
  var step_count = 0;
  requestAnimationFrame(step);
  function step() {
    if (step_count < SCROLL_DURATION) {
      requestAnimationFrame(step);
      step_count++;
      window.scrollTo(
        0,
        initialPosition +
          targetHeight * 0.25 * Math.pow(1 - Math.cos(step_x * ++step_count), 2)
      );
    }
  }
}
