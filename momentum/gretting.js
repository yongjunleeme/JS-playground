input = form.querySelector("input"),
greeting = document.querySelector(".js-greetings");

const logout = document.querySelector(".logoutBtn");
const toDoInputT = document.querySelector(".js-toDoInput");

const USER_LS = "currentUser";
const SHOWING_CN = "showing"
const SHOWING_BTN_CN = "showingBtn";

function saveName(text){
    localStorage.setItem(USER_LS,text);
}

function showingToDoAndLogout(){
    toDoInputT.classList.add(SHOWING_CN);
    logout.classList.add(SHOWING_BTN_CN);
}

function handleSubmit(e){
    const currentName = input.value;
    e.preventDefault();
    paintGreeting(currentName);
    saveName(currentName);
    showingToDoAndLogout();
}

function handleLogout(){
    localStorage.removeItem(USER_LS);
    localStorage.removeItem('toDos');
    window.location.reload();
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Pleased to meet you, ${text}!`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    logout.addEventListener("click",handleLogout);
    if(currentUser==null){
        //유저가 없을때
        askForName();
    }else{
        //유저가 있을때
        paintGreeting(currentUser);
        showingToDoAndLogout();
    }

}

function init(){
    loadName();
}

init();