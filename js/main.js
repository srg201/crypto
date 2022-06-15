const burger = document.querySelector(".burger");
const header = document.querySelector(".header--adaptive");
const cross = document.querySelector(".header-cross");
const Mheader = document.querySelector('.header');
const hero = document.querySelector('.hero');
const headerHeight = Mheader.offsetHeight;
const heroHeight = hero.offsetHeight;
console.log(heroHeight);

burger.addEventListener("click", () => {
  burger.classList.toggle("burger--active");
  header.classList.toggle("header--adaptive--active");
});

cross.addEventListener('click', () => {
    burger.classList.remove("burger--active");
    header.classList.remove("header--adaptive--active");
})

const full = new fullpage("#fullpage", {
  licenseKey: "YOUR_KEY_HERE",
  slidesNavigation: true,
});

window.addEventListener('scroll', () => {
  let scrollDistance = window.offsetTop;
  console.log(scrollDistance);
  if(scrollDistance >= heroHeight) {
    Mheader.classList.add('header-fixed');
    hero.style.marginTop = headerHeight;
  } else {
    Mheader.classList.remove("header-fixed");
    hero.style.marginTop = null;
  }
})