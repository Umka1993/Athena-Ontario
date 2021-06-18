// Скрипт swiper-slider
new Swiper(".testimonials__slider", {
    //стрелки
    navigation: {
        nextEl: "swiper-button-next",
        prevEl: "swiper-button-prev",
    },
    // Дотсы
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    //изменение  курсора
    grabCursor: true,

    //пеертаскивание с меньшим усилием
    tochRatio: 1,

    //скролл с помощью колеса  мыши
    // mousewheel: {

    //чувствительность колеса мыши
    // sensitivity: 1,
    // },

    //автовысота (на случай текста разного объема)
    autoHeight: true,

    //колличество слайдов при показе
    slidesPerView: 2.5,

    //если слайдов меньше чем нужно, например только 1, то слайдер отключится и этот слайд будет оказыватсья просто ввиде контента
    watchOverflow: true,

    //отступ между слайдами
    spaceBetween: 177.5,

    //кол-во пролистываемых слайдов
    slidesPerGroup: 1,

    //активный слайд по центру
    centeredSlides: true,

    //стартовый слайд
    // initialSlide: 1,

    //бесконечная прокрутка
    loop: true,

    //свободный режим (нужен для плавного скрола и для плавного перемещения слайдов мышью)
    freeMode: true,

    speed: 800,
    //автопрокрутка  слайдов
    // autoplay: {
    //пауза между прокруткой
    // delay: 1000,

    //закончить на последнем слайде
    // stopOnLastSlide: true,

    //отключить после ручного переключения
    // disableOnInteraction: true,
    // }

    //сделать слайдер вертикальным
    // direction: 'vertical',

    breakpoints: {
        320: {
            //колличество слайдов при показе
            slidesPerView: 1,
        },
        480: {
            //колличество слайдов при показе
            slidesPerView: 1,
        },
        767: {
            //колличество слайдов при показе
            slidesPerView: 1,
        },

        768: {
            //колличество слайдов при показе
            slidesPerView: 1,
            spaceBetween: 100,
        },
        992: {
            //колличество слайдов при показе
            slidesPerView: 2,
            spaceBetween: 100,
        },
    },
});

// скрипт для модалки
var modal = document.getElementById("my_modal");
var btn = document.getElementsByClassName("Get");
var close = document.getElementsByClassName("close_modal_window")[0];
var body = document.querySelector("body");

for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function() {
        openModalWindow();
    });
}

close.addEventListener("click", function() {
    closeModalWindow();
});

function openModalWindow() {
    modal.classList.add("open__modal");
    body.classList.add("wrapper");
}

function closeModalWindow() {
    modal.classList.remove("open__modal");
    body.classList.remove("wrapper");
}

//скрипт для  модалки quote
var quote = document.getElementById("my_quote");
var submit = document.getElementsByClassName("Submit");
var closeQuote = document.getElementsByClassName("close_quote_window")[0];
var body = document.querySelector("body");

for (var i = 0; i < submit.length; i++) {
    submit[i].addEventListener("click", function() {
        openQuoteWindow();
    });
}

closeQuote.addEventListener("click", function() {
    closeQuoteWindow();
});

function openQuoteWindow() {
    quote.classList.add("quote__open");
    modal.classList.remove("open__modal");
    body.classList.add("wrapper");
}

function closeQuoteWindow() {
    quote.classList.remove("quote__open");
    modal.classList.remove("open__modal");
    body.classList.remove("wrapper");
}

// Плавный скролл
// document.querySelectorAll('a[href^="#"').forEach((link) => {
//     link.addEventListener("click", function(e) {
//         e.preventDefault();

//         let href = this.getAttribute("href").substring(1);
//         const scrollTarget = document.getElementById(href);
//         const topOffset = 0;
//         const elementPosition = scrollTarget.getBoundingClientRect().top;
//         const offsetPosition = elementPosition - topOffset;

//         window.scrollBy({
//             top: offsetPosition,
//             behavior: "smooth",
//         });
//     });
// });