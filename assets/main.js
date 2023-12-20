$(function() {
  $('.counter').countUp({
    delay: 10,
    time: 1500
    });

  $('.blue , .black').click(()=>{
    location.href = "./work.html"
  })
})



let op = document.querySelectorAll(".op")

window.addEventListener("scroll",()=>{
    for(let i=0;i<op.length;i++){
        if(op[i].getBoundingClientRect().top <= 500){ 
            op[i].classList.replace("op","bottomani")
        }
    }
})

//carousel
const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 1500,
  pause: false,
  touch: false
})


 