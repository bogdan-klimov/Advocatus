const visibleWindow = document.getElementById("visible");
const slider = document.getElementById("our-clients-slider");
const sliderEl = document.getElementsByClassName("our-clients-el");
const sliderButton = document.getElementsByClassName("our-clients-list-item");

const move = visibleWindow.offsetWidth;

sliderButton[0].classList.add('active');

for (let i = 0; i < sliderEl.length; i++) {
    sliderButton[i].addEventListener("click", () => {
        slider.style.left = (-move * i) + "px";
        for (let i = 0; i < sliderEl.length; i++) {
            sliderButton[i].className = sliderButton[i].className.replace("active", "");
        };       
        sliderButton[i].classList.add("active");
    });
};
////////////////////////////////////////////////////////////////
const questionItem = document.getElementsByClassName("privilege-questions-item");
const questionDescription = document.getElementsByClassName("privilege-description");
const questionItemText = document.getElementsByClassName("privilege-questions-item-text");
const questionItemIcons = document.getElementsByClassName("icons");

questionDescription[0].classList.add("visible-item");
questionItemText[0].classList.add("color-item");
questionItemIcons[0].classList.replace("icon-plus", "icon-minus");

for (let i = 0; i < questionItem.length; i++) {
    questionItem[i].addEventListener("click", () => {
        for (let j = 0; j < questionItem.length; j++) {
            questionItemText[j].className = questionItemText[j].className.replace("color-item", "");
            questionDescription[j].className = questionDescription[j].className.replace("visible-item", "");
            questionItemIcons[j].className = questionItemIcons[j].className.replace("icon-minus", "icon-plus");
        };
        questionDescription[i].classList.add("visible-item");
        questionItemText[i].classList.add("color-item");
        questionItemIcons[i].classList.replace("icon-plus", "icon-minus");
    });
};