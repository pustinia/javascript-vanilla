/*

const title = document.getElementById("title");
console.log(title); // called DOM
// Document Object Module.
console.dir(title);

title.innerHTML = 'Hi From JS';
title.style.color = 'red';
document.title = 'I want you';

// querySelector
const otherTitle = document.querySelector("#title");
console.log(otherTitle);

console.log("===========");

// event.
function handleResize(event){
    console.log("I have been resized");
    console.log(event);
}

// event adding javascript
// ()
window.addEventListener("resize", handleResize);

// handleClick event
function handleClick(){
    console.log("title clicked.");
    title.style.color = "blue";
}
title.addEventListener("click", handleClick);

// if, else
if(10 === 5){
    console.log("blablabla");
}else{
    console.log("this is true");
}

// compare string and number
if("10" === 10){
    console.log("blablabla");
}else{
    console.log("this is true");
}

const age = prompt("How old are you");
console.log(age);
*/

/* we want to set color by css
const newTitle = document.querySelector("#newTitle");
const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "rgb(127, 140, 141)";

function handleNewClick() {

    const currentColor = newTitle.style.color;

    if(currentColor == BASE_COLOR){
        newTitle.style.color = OTHER_COLOR;
    }else{
        newTitle.style.color = BASE_COLOR;
    }
}

function init(){
    newTitle.style.color = BASE_COLOR;
    newTitle.addEventListener("click", handleNewClick);
}
init();


function handleOffline() {
    console.log("bye bye!!");
}
function handleOnline() {
    console.log("It's on line.");
}
window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);
*/
/*
const title = document.querySelector('#title');
const CLASS_CLICKED = "clicked";

function handleClick() {
    const currentClassName = title.className;
    if(currentClassName !== CLASS_CLICKED){
        title.className = CLASS_CLICKED;
    }
}

function init() {
    title.addEventListener("click",handleClick);
}
init();
*/

const title = document.querySelector('#title');
const CLASS_CLICKED = "clicked";
const CLASS_BTN = "btn";

function handleClick() {
    /*
    const hasClass = title.classList.contains(CLASS_CLICKED);
    if(hasClass){
        title.classList.remove(CLASS_CLICKED);
    }else{
        title.classList.add(CLASS_CLICKED);
    }*/
    // easy to use
    title.classList.toggle(CLASS_CLICKED);
}

function init() {
    title.addEventListener("click",handleClick);
}
init();