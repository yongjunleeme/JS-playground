const form = document.querySelector(".focus-form"),
    input = form.querySelector("input"),
    comment = document.querySelector(".focus-comment");

const COM_LS = "cuurentComment",
    SHOWING_COM = "showing";

function saveComment(val) {
    localStorage.setItem(COM_LS, val)
}

function handleSubmmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintComment(currentValue);
    saveComment(currentValue);
}

function askForComment() {
    form.classList.add(SHOWING_COM);
    form.addEventListener("submit", handleSubmmit);
}

function paintComment(text) {
    form.classList.remove(SHOWING_COM);
    comment.classList.add(SHOWING_COM);
    comment.innerText = `You have enough power to do ${text} today.`
}

function init() {
    const curretComment = localStorage.getItem(COM_LS);
    if (curretComment === null) { 
        askForComment();
    } else {
        paintComment(curretComment);
    }        
}

init();