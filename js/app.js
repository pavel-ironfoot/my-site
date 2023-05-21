const sliderMain = new Swiper('.slider_main',{
    freeMode: true, // где остановимся листая там оно и остановится
    centeredSlides: true,
    mousewheel: true,
    parallax: true,
    breakpoints: {
        0: {
            slidesPerView:2.5,
            spaceBetween: 20,
        },
        680: {
            slidesPerView:3.5,
            spaceBetween: 60,
        }
    }
});

const sliderSecond= new Swiper('.slider_second',{
    freeMode: true, // где остановимся листая там оно и остановится
    centeredSlides: true,
    mousewheel: true,
    parallax: true,
    breakpoints: {
        0: {
            slidesPerView:2.5,
            spaceBetween: 20,
        },
        680: {
            slidesPerView:3.5,
            spaceBetween: 60,
        }
    }
});

sliderMain.controller.control = sliderSecond;

document.querySelectorAll('.slider__item').forEach(item=> {
    item.addEventListener('click',event => {
        item.classList.toggle('opened')
    })
});

let text = document.querySelector('.text');
sliderMain.on('slideChange', e=>{
    sliderMain.activeIndex > 0 ? text.classList.add('hidden') : text.classList.remove('hidden')
})