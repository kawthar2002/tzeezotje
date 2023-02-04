const sliderContent = document.querySelectorAll('.slider-content');
const sliderInner = document.querySelector('.slider-container__line');
const buttonRight = document.querySelector('.slider-buttons__right');
const buttonLeft = document.querySelector('.slider-buttons__left');

let count = 0;
let width;
const init = () => {
  width = document.querySelector('.slider-container').offsetWidth;
  sliderInner.style.width = width * sliderContent.length + 'px';
  sliderContent.forEach((item) => {
    item.style.width = width + 'px';
    item.style.height = 'auto';
  });
};
window.addEventListener('resize', init);
init();

const rollSlider = () => {
  sliderInner.style.transform = 'translate(-' + count * width + 'px)';
};

buttonRight.addEventListener('click', () => {
  count++;
  if (count >= sliderContent.length) {
    count = 0;
  }
  rollSlider();
});
buttonLeft.addEventListener('click', () => {
  count--;
  if (count < 0) {
    count = sliderContent.length - 1;
  }
  rollSlider();
});

const reserve = document.querySelector('.header-buttons__reserve');
const closeButton = document.querySelector('.close');
const modal = document.querySelector('.modal');
reserve.addEventListener('click', () => {
  modal.style.transform = 'translateY(0)';
});
closeButton.addEventListener('click', () => {
  modal.style.transform = 'translateY(-100%)';
});

const mobileCloseButton = document.querySelector('.mobile-close');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuButton = document.querySelector('button.mobile-menu__btn');

console.log(mobileMenuButton)
mobileMenuButton.addEventListener('click', () => {
  console.log('hey');
  mobileMenu.style.transform = 'translateX(0)';
});
mobileCloseButton.addEventListener('click', () => {
  mobileMenu.style.transform = 'translateX(-200%)';
});

const formElement = document.querySelector('form');
const handleSubmit = (event) => {
  event.preventDefault();
  const body = new FormData(event.target);
  const URL = event.target.action;
  const method = event.target.method;

  fetch(URL, { method, body })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Error!");
      }
      console.log("Success!");
    })
    .catch((error) => {
      console.error(error.message);
    });
};

formElement.addEventListener("submit", handleSubmit);
