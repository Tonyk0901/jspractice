# 040320 SUMMARY

Practice Vanilla JS by creating To do list.

## Table of contents

- [Basic syntax](#basic-syntax)
- [Technologies](#technologies)
- [Setup](#setup)

## Basic syntax

- Know the difference between <i>let, const, var</i><br>`let a = 221, const b = 221;`<br>`let` gives you the privilege to declare variables that are limited in scope <u>to the block</u>, statement of expression unlike `var`.
  `var` is rather a keyword which defines a variable <u>globally regardless of block scope.</u>
- `console.log(a)` is the same as <u>print</u> function.
- Camel case, naming convention.<br>`const daysOfWeek`
- These are two ways to organize a data. Array can include object and vice versa.<br>`const daysOfWeek = ["mon","tue"]`<br>`const tonyInfo = {name:"Tony", age:25, gender:"Male",}`
- asdasd

# 040520 SUMMARY

## 3.3 / 3.4

- inspecting momentum web app. Inspect, application, local storage. You can check what is stored in the local storage from there.
- To add item in the local history, use `localStorage.setItem(<key>,<value>)`. To get the item in the local history, use `localStorage.getItem(<key>)`.
- `form.classList` creates an array that contains every classes that the selected block has.
- In CSS, display: none and display: block is later gonna be used as a switch.
- It's a good programming practice to set the name for the repeated block of code, and call the name instead, don't rewrite everytime you use it. ex: `const USER_LS = "currentUser", SHOWING_CN = "showing";` And all the functions made in the greetings.js file.
- you can add/remove new class to the element by using classList.add(<name>) / classList.remove(<name>)
- function handleSubmit(event) {
  event.preventDefault(); // Prevent the page to redirect.
  }
  Prevent the page to redirect so that the input value can remain in the prompt.
- Using localStorage.getItem / localStorage.setItem with appropriate logic, you can make the website to prompt the user to submit their name and store them inside the localStorage.
- So, the take away from this lecture is really about the local storage.

## 3.5

- `toDoInput.value("");` You can revert the prompt back to blank box.
- `const ul = document.createElement("ul");` so far, we have been bringing in the element by querySelector from the html, but we can also create one into the html by createElement.
- `delBtn.innerHTML = "␡";` You can even insert the emoji!! But dont forget to include `<meta charset="utf-8" />` in the html head.
- `li.appendChild(delBtn); li.appendChild(span); toDoList.appendChild(li);`
  After creating the element by createElement, you need to specify under where to put in those new elements.

- function paintGreeting(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerHTML = "␡";
  const span = document.createElement("span");
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  toDoList.appendChild(li);
  }
  Final Summary

## 3.6

- const toDoObj = {
  text : text,
  id : toDos.length + 1
  }
  toDos.push(toDoObj);
  Make the obj and push this into the todo array.
- `li.id = newId;` sets the id for each element in the list.
- localStorage, however, only stores the "string". Whatever it takes in, it converts into a string. Thus, if we try to insert an object, local storage will turn it into some weird stuff. Thus, if you want to store the object, you gotta use some pre conversion method.
  `localStorage.setItem(TODOS_LS, JSON.stringify(toDos));` does the trick we wanted.

- const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
  console.log(loadedToDos);
  const parsedToDos = JSON.parse(loadedToDos);
  }
  }
  The problem is that now the loaded Todos are string. So if you want the object, then you gotta turn it from string to object again using the command `const parsedToDos = JSON.parse(loadedToDos);`

- parsedToDos.forEach(function (toDo) {
  paintToDo(toDo.text);
  });
  forEach opperates whatever function inside the parenthesis on every elements inside the array.
  Also, you can even create a function inside the parenthesis. in the example code, toDo is going to be the each element in the array. in our case, toDo is going to be the toDoObj which contains two keys(text and id).

## 3.7 To do list part 2.

- In this part, we implemeneted a delete button for the toDoList.

- delBtn.addEventListener("click", deleteToDo);
  you add event listener to "each element"

- console.dir gives you the list of the properties of the java script object. The difference between this and console.log is that console.log returns the object in its string representation.
- const li = event.target.parentNode;
  above code gives you the node object.

- toDoList.removeChild(li);
  node object has? has the method remove child that removes the targeted child node (li) from its parentNode. (toDoList).

- const cleanedToDos = toDos.filter(function (toDo) {
  return toDo.id !== parseInt(li.id);
  });
  filter works similar to the forEach. Filter operates the given function to each element of the array and gives you only the elements that the function returns True. Thus the given function should return boolean.

## 3.8 Background Image

- In this section, we implements functions to bring up random background images.

- Math.random();
  returns a random floating number between 0(inclusive) and 1(exclusive).
  Math.floor(3.9);
  returns a number that discards its floating parts. Thus above code returns 3.
  Combining above two, we can generate a random integer of a selected range by,
  Math.floor(Math.random()\*3);
  This returns either 0, 1, or 2.

- creating image objects example.
  var myImage = new Image(100, 200);
  myImage.src = 'picture.jpg';  
  document.body.appendChild(myImage);
  100 is the width and 200 is the height.

- .bgImage {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  }
  css z-index property specifies the stack order of an element. For example, -1 places an element in the very bottom like a background.
  https://www.w3schools.com/cssref/pr_pos_z-index.asp

- @keyframes mymove {
  from {top: 0px;}
  to {top: 200px;}
  }
  @keyframes is used to specify the animation code. The sample code specifies an animation that moves an element from top 0px to 200 px.
  https://www.w3schools.com/cssref/css3_pr_animation-keyframes.asp

- animation: fadeIn 0.5s linear;
  linear keyword means that the speed is the same throughout the entire animation.
  https://www.w3schools.com/cssref/css3_pr_animation-timing-function.asp

## 3.9 Getting geo location.

- navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
  above code asks the user if location info can be retrieved. .getCurrentPosition takes two argument function, first one for the sucess case and the second one for the failure case when the user clicks no.

- const coordsObj = {
  latitude,
  longitude,
  };
  This is the case when the key name is going to be the same as the passed variable name. Equivalent to,
  const coordsObj = {
  latitude : latitude,
  longitude : longitude,
  };

## 3.10 Getting weather based on geo locaiton.

- fetch('http://example.com/movies.json')
  .then((response) => {
  return response.json();
  })
  .then((data) => {
  console.log(data);
  });
  Basic format to send request to API and receive response. Use fetch and then. Then assures the code does not proceed until the response is received.

- Some notation about the arrow function (ES6)
  (param1, param2, …, paramN) => { statements }
  (param1, param2, …, paramN) => expression
  // equivalent to: => { return expression; }

## Difference between let, const, and var.

https://dev.to/sarah_chima/var-let-and-const--whats-the-difference-69e

var can be both globally and locally scoped. However, both let and const are block scoped.
Also, var can be updated or re-declared, while neither let and const can be re-declared and only let can be updated.

Thus,
