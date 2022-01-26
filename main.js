/* eslint-disable no-unused-vars */
/* eslint-disable func-style */
/* eslint-disable require-jsdoc */

let prevIndicator = null;

function carouselContainer () {
  elem = document.createElement('div');

  elem.setAttribute('id', 'carousel');
  elem.classList.add('carousel');
  
  document.querySelector('body').appendChild(elem);

  container = document.querySelector('#carousel');
};

function carouselSlide(n) {
 slidesContainer = document.createElement('ul');
 slidesContainer.classList.add('slides');

 for (i = 0; i < n; i++){
   let slideItem = document.createElement('li');
   let slideLink = document.createElement('a');
 
   slideItem.setAttribute('class', i === 0 ? `slides__item active` : `slides__item`);
   slideLink.setAttribute('href', '#');
   slideItem.appendChild(slideLink);
   slidesContainer.appendChild(slideItem)
  };

  container.appendChild(slidesContainer);
};

function carouselIndicators(n) {
indicatorsContainer = document.createElement('div');
indicatorsContainer.classList.add('indicators');

for(i = 0; i < n; i++){
  let indicatorsItem = document.createElement('span');
  indicatorsItem.setAttribute('class', i === 0 ? `indicators__item active` : `indicators__item`);
  indicatorsItem.setAttribute('data-slide-to', i)

  indicatorsContainer.appendChild(indicatorsItem);
};

  container.appendChild(indicatorsContainer);
};

function carouselControls(){
  controlsContainer = document.createElement('div');
  controlsContainer.classList.add('controls');

  for(i = 0; i < 3; i++){
    let controlItem = document.createElement('div');
    let controlIcon = document.createElement('i');

    switch(i) {
      case 0:
        controlItem.classList.add('controls__item', 'controls__prev');
        controlIcon.classList.add('fas', 'fa-chevron-left');
        break;
      case 1:
        controlItem.classList.add('controls__item', 'controls__next');
        controlIcon.classList.add('fas', 'fa-chevron-right');
        break;
      case 2:
        controlItem.classList.add('controls__item', 'controls__pause');
        controlIcon.classList.add('fas', 'fa-play');
        break;
    };
    controlItem.appendChild(controlIcon);
    controlsContainer.appendChild(controlItem);
  };
  
    container.appendChild(controlsContainer);
};

function carouselStyle () {
  styleContainer = document.createElement('style');
  document.head.innerHTML +=`
  <style>
  .carousel{
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
  .controls,
  .slides {
    position: relative;
    margin-bottom: 30px;
  }
  .indicators {
    display: flex;
  }
  .indicators__item {
    display: block;
    width: 30px;
    height: 20px;
    background-color: lightblue;
    border: 1px solid black;
    margin-right: 7px;
    border-radius: 5px;
  }`
};

function indicatorsHandler(e) {
let target = e.target;

if (target.classList.contains('indicators__item')) {
  target.style.backgroundColor = 'red';

  if (prevIndicator !== null) prevIndicator.removeAttribute('style');

   prevIndicator = target;
  }
}

function setListener() {
  let indicatorsContainer = document.querySelector('div.indicators');

  indicatorsContainer.addEventListener('click', indicatorsHandler);
}

function createCarousel(slidesCount = 5) {
  // carouselContainer();
  container = document.querySelector('#carousel');
  carouselSlide(slidesCount);
  carouselIndicators(slidesCount);
  carouselControls();
  carouselStyle();
  setListener();
}

createCarousel();