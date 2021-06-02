
const slides = document.getElementsByClassName("carousel-item");
let slidePostion = 0;
const totalSlides = slides.length;

document.getElementById("carousel-btn-prev").addEventListener("click", moveToPrevSlide);
document.getElementById("carousel-btn-next").addEventListener("click", moveToNextlSlide);

function moveToNextlSlide() {
    hideSlide()
    if(slidePostion === totalSlides -1){
        slidePostion = 0;
    }else {
        slidePostion++;
    }

    slides[slidePostion].classList.add("carousel-item-visible")
}; 

function moveToPrevSlide() {
    hideSlide()

    if(slidePostion === 0){
        slidePostion = totalSlides -1;
    }else {
        slidePostion--;
    }

    slides[slidePostion].classList.add("carousel-item-visible")
};

function hideSlide() {
    for(const slide of slides){
        slides[slidePostion].classList.remove("carousel-item-visible")
        slides[slidePostion].classList.add("carousel-item-hidden")
    }
}
