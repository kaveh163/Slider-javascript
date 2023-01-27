let leftArrow = document.querySelector(".fa-angle-left");
let rightArrow = document.querySelector(".fa-angle-right");
let slides = document.querySelectorAll(".slides div");
let dots = document.querySelectorAll(".notify span");
let body = document.querySelector("body");
let count = 1;
let dotCount = 1;
window.addEventListener("load", handler);

function handler(event) {
    console.log('hi');
   
 
    const sliderInterval = setInterval(sliderTransition, 1000);
    function sliderTransition() {
      slides.forEach((slide) => {
        slide.classList.remove("active");
      });
      if (document.querySelector(`.slide${count}`).nextElementSibling) {
        count++;
        document.querySelector(`.slide${count}`).classList.add("active");
      } else {
        count = 1;
        document.querySelector(`.slide${count}`).classList.add("active");
      }
      dots.forEach((dot) => {
        dot.children[0].classList.remove("dot__active");
      });
      if (document.querySelector(`.dot${dotCount}`).nextElementSibling) {
        dotCount++;
        document
          .querySelector(`.dot${dotCount}`)
          .children[0].classList.add("dot__active");
      } else {
        dotCount = 1;
        document
          .querySelector(`.dot${dotCount}`)
          .children[0].classList.add("dot__active");
      }
    }
    window.addEventListener('click', function() {
        clearInterval(sliderInterval);
    })
}
rightArrow.onclick = function() {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    if(document.querySelector(`.slide${count}`).nextElementSibling){
        count++;
        document.querySelector(`.slide${count}`).classList.add('active');
    } else {
        count = 1;
        document.querySelector(`.slide${count}`).classList.add('active');
    }
    dots.forEach((dot) => {
        dot.children[0].classList.remove('dot__active');
    })
    if(document.querySelector(`.dot${dotCount}`).nextElementSibling) {
        dotCount++;
        document.querySelector(`.dot${dotCount}`).children[0].classList.add('dot__active');
    } else {
        dotCount = 1;
        document.querySelector(`.dot${dotCount}`).children[0].classList.add('dot__active');
    }
}
leftArrow.onclick = function () {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    if(document.querySelector(`.slide${count}`).previousElementSibling) {
        count--;
        document.querySelector(`.slide${count}`).classList.add('active');
    } else {
        count = slides.length;
        document.querySelector(`.slide${count}`).classList.add('active');
    }
    dots.forEach((dot) => {
        dot.children[0].classList.remove('dot__active');
    });
    if(document.querySelector(`.dot${dotCount}`).previousElementSibling) {
        dotCount--;
        document.querySelector(`.dot${dotCount}`).children[0].classList.add('dot__active');
    } else {
        dotCount = dots.length;
        document.querySelector(`.dot${dotCount}`).children[0].classList.add('dot__active');
    }
}
