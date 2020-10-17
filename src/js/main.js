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

const addClass = (item, classItem) => {
    item.classList.add(classItem);
}

const replaceClass = (item, classItem, newClassItem) => {
    item.className = item.className.replace(classItem, newClassItem);
}

addClass(questionDescription[0], "visible-item");
addClass(questionItemText[0], "color-item");
replaceClass(questionItemIcons[0], "icon-plus", "icon-minus")

for (let i = 0; i < questionItem.length; i++) {
    questionItem[i].addEventListener("click", () => {
        for (let j = 0; j < questionItem.length; j++) {
            replaceClass(questionItemText[j], "color-item", "");
            replaceClass(questionDescription[j], "visible-item", "");
            replaceClass(questionItemIcons[j], "icon-minus", "icon-plus");
        };
        addClass(questionDescription[i], "visible-item");
        addClass(questionItemText[i], "color-item")
        replaceClass(questionItemIcons[i], "icon-plus", "icon-minus") 
    });
};
