const image_box = document.getElementById("image_box");
const btnUp = document.getElementById("up");
const btnDown = document.getElementById("down");
const btnRight = document.getElementById("right");
const btnLeft = document.getElementById("left");
const images = document.querySelectorAll("#image_box div");
var i = 0;
///************** HORIZONTAL TRANSITION***************///
function horizontalTransiton() {
  image_box.style.transform = `translateX(${-i * 1000}px)`;
}
horizontalTransiton();
btnRight.addEventListener("click", () => {
  if (i >= images.length - 1) i = -1;
  i++;
  image_box.style.flexDirection = "row";
  horizontalTransiton();
});
btnLeft.addEventListener("click", () => {
  if (i <= 0) i = images.length;
  i--;
  image_box.style.flexDirection = "row";
  horizontalTransiton();
});
///************** VERTICAL TRANSITION***************///
function verticalTransiton() {
    image_box.style.transform = `translateY(${-i * 600}px)`;
  }
  verticalTransiton();
  btnUp.addEventListener("click", () => {
    image_box.style.flexDirection = "column";
    if (i >= images.length - 1) i = -1;
    i++;
        verticalTransiton();
  });
  btnDown.addEventListener("click", () => {
    image_box.style.flexDirection = "column";
    if (i <= 0) i = images.length;
    i--;
     verticalTransiton();
  });