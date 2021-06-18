// Скрипт slick (слайдер)
$(".slider-block").slick({
    dots: true,
    autoplay: false,
    infinite: true,
    arrow: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    prevArrow: '<a class="your-class-btn-back">Back</a>',
    nextArrow: '<a class="your-class-btn-forward">Forward</a>',
    responsive: [{
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                centerMode: false,

            },
        },
        {
            breakpoint: 375,
            settings: {
                slidesToShow: 1,
                centerMode: false,
                slidesToScroll: 1,
                arrows: false,
            },
        },
    ],
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