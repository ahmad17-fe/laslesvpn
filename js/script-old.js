/**
 * Slider
 */

const dot = document.querySelector(".rev__cus__dot");
const testiItem = document.querySelectorAll(".rev__cus__item");
const prevBtn = document.querySelector(".rev__cus__actb__prev");
const nextBtn = document.querySelector(".rev__cus__actb__next");
let dotItem;

let state = {
    getIdTesti: [],
    countTesti: 0,
};

addIdTestiItem();
addDotItem();

function addDotItem() {
    for (i = 0; i < testiItem.length; i++) {
        dot.innerHTML += `<div class="rev__cus__dot__item"></div>`;
    }
    dotItem = document.querySelectorAll(".rev__cus__dot__item");
}

function addIdTestiItem() {
    for (i = 0; i < testiItem.length; i++) {
        testiItem[i].id = `${i}-Testi`;
        state.getIdTesti.push(`${i}-Testi`);
    }
}

function activeTestiItem(num) {
    let oldNum = num - 1;

    console.log("old: ", oldNum);
    console.log("new: ", num);

    if (num) {
        dotItem[num].classList.add("active");
        testiItem[num].classList.add("active");
    }

    if (oldNum) {
        dotItem[oldNum].classList.remove("active");
        testiItem[oldNum].classList.remove("active");
    }
}

nextBtn.addEventListener("click", () => {
    if (state.countTesti >= state.getIdTesti.length) {
        state.countTesti = 0;
    } else if (state.countTesti == 0) {
        state.countTesti = 1;
    }

    activeTestiItem(state.countTesti);
    let getElTesti = document.getElementById(state.getIdTesti[state.countTesti]);
    state.countTesti += 1;

    getElTesti.scrollIntoView({
        behavior: "smooth",
    });
});