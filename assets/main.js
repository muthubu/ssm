$(function() {
  $('.counter').countUp({
    delay: 10,
    time: 1500
    });

  $('.blue , .black').click(()=>{
    location.href = "./work.html"
  })
})

//carousel
const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 1500,
  pause: false,
  touch: false
})


 