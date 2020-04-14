const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList"),
  TODOS_LS = "toDos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); // turn the object into a string since local storage only takes in string type.
}

function deleteToDo(event) {
  // The whole purpose of below part is to realize what toDos among all the toDos to remove.
  const li = event.target.parentNode; // returns the node object.
  toDoList.removeChild(li); // toDoList is the parent node and the li is the node (which is the child) to be removed.
  const cleanedToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanedToDos;
  saveToDos();
}

function paintToDo(text) {
  // Create the html element and push it into the correct place.
  const li = document.createElement("li"); // construct new elements in html.
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerHTML = "␡";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;
  li.appendChild(delBtn); // place those newly constructed elements into the correct place.
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li);

  // create new toDoObj for the new toDo input and push that into the toDoArray.
  const toDoObj = {
    text: text,
    id: toDos.length + 1,
  };
  toDos.push(toDoObj);
  saveToDos(); // save the new toDoArray into the local storage.
}

function handleSubmit(event) {
  event.preventDefault(); // stay in the current page.
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS); // brings data from local storage.
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos); // data is stored as a string format, parse them back into json object.
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text); // for each of the element, create html elements and push them into todo array.
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit); // after loading stuff, listen for any submission event.
}
init();
