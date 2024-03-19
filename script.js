let roles = [" Web Developer  ", " Freelancer  ", " UI/UX Designer  "];
let color = ["red", "green", "blue"];
let index = 0;
let currentIndex = 0;
let value = document.querySelector(".value");
let text = "";
setInterval(() => {
  let currentValue = roles[index];
  let currentLength = currentValue.length;
  text = text + currentValue[currentIndex];
  value.innerHTML = text;
  currentIndex++;
  if (currentLength == currentIndex) {
    currentIndex = 0;
    index++;
    text = "";
    if (roles.length == index) {
      index = 0;
    }
  }
}, 200);

let toogle_bar = document.querySelector(".toogle_bar");

toogle_bar.addEventListener("click", () => {
  toogle_bar.classList.toggle("active");
  document.querySelector(".page").classList.toggle("active");
});
