const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = form.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function askForName() {
  form.classList.add(SHOWING_CN);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function loadname() {
  const currentUser = localStorage.getItem();
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {}

init();
