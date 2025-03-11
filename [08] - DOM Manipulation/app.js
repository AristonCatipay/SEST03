// Document Object Model (DOM)

// .getElementById(element-id)
// Return: Element or null
let elementWithID = document.getElementById("first-div");
console.log(elementWithID);
elementWithID.textContent = "Div 1";

// getElementsByClassName(classname)
// Return: HTMLCollection
let elementsWithClass = document.getElementsByClassName("sample-div");
console.log(elementsWithClass);
elementsWithClass[1].textContent = "Div 2";

// getElementsByTagName(tagname)
// Return: HTMLCollection
let listItems = document.getElementsByTagName("li");
console.log(listItems);
listItems[2].style.color = "red";

// .querySelector()
// Return: first element or null
// Pass: .classname, #element-id, tagname
let orderedListItem = document.querySelector(".ordered-list");
console.log(orderedListItem);
orderedListItem.style.backgroundColor = "orange";

// .querySelectorAll()
// Return: NodeList
// Pass: .classname, #element-id, tagname
let headings = document.querySelectorAll("h2");
console.log(headings);

headings.forEach((heading) => {
  heading.style.backgroundColor = "tomato";
  heading.style.color = "white";
});

// Parent and Siblings
let firstElementChild = document.querySelector("#parent").firstElementChild;
console.log(firstElementChild);
firstElementChild.textContent = "First Element Child is Modified";

let lastElementChild = document.querySelector("#parent").lastElementChild;
console.log(lastElementChild);
lastElementChild.textContent = "Last Element Child is Modified";

let child3 = document.querySelector("#child3");
let previousElementSibling = child3.previousElementSibling;
console.log(previousElementSibling);

let nextElementSibling = child3.nextElementSibling;
console.log(nextElementSibling);

// Updating Elements Attributes
let dayNightIcon = document.querySelector("#day-night-icon");
dayNightIcon.setAttribute(
  "src",
  "https://cdn-icons-png.flaticon.com/512/3688/3688129.png"
);

// Appending New Elements
let parentElement = document.getElementById("parent-element");
let createdElement = document.createElement("div");
createdElement.textContent = "Child Element";
parentElement.appendChild(createdElement);

// Removing an element
let elementToBeRemoved = document.querySelector("#element-to-be-removed");
elementToBeRemoved.remove();

// Event Listeners
let darkModeBtn = document.querySelector("#dark-mode-btn");
darkModeBtn.addEventListener("click", () => {
  let pageContainer = document.querySelector("#page-container");
  pageContainer.style.backgroundColor = "black";
  pageContainer.style.color = "white";
  let pageModeText = document.querySelector("#page-mode-text");
  pageModeText.textContent = "Dark Mode";
});
