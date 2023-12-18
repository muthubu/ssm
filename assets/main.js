let blue = document.querySelectorAll(".blue")
let black = document.querySelectorAll(".black")

function wCard(){
  location.href = "./work.html"
}

for(let i=0;i<blue.length;i++){
  blue[i].addEventListener("click",wCard)
  black[i].addEventListener("click",wCard)
}

//carousel
const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 1500,
  pause: false,
  touch: false
})

//work card
