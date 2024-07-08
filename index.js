// // Creating the add button

let addEl = document.createElement("button");
addEl.textContent = "Add item";

// Getting the input field and the text value
let textEl = document.querySelector("#text-el");

function createElements() {
  // Getting the main-container to append the button
  let mainContainer = document.querySelector("#main-container");
  mainContainer.appendChild(addEl);

  // Creating buttons "Mark as purchased" and "Clear list"
  let markPurcahesed = document.createElement("button");
  let clearList = document.createElement("button");

  // Adding text values for the buttons
  markPurcahesed.textContent = "Mark Purchased";
  clearList.textContent = "Clear List";

  // Appending the buttons
  let itemsEl = document.querySelector("#items-el");
  itemsEl.appendChild(markPurcahesed);
  itemsEl.appendChild(clearList);
}

createElements();

// Holding the list
let arrayList = [];

//  Adding an event listener for the add btn
addEl.addEventListener("click", () => {
  createElement(textEl.value);
  textEl.value = "";
});

// Function to create the list
function createElement(value) {
  let li = document.createElement("li");
  if (value === "") {
    alert("Enter a valid item");
  } else {
    li.textContent = value;
    let ul = document.querySelector("#list");
    ul.appendChild(li);

    // Adding items to the array

    arrayList.push(value);
    console.log(arrayList);

    // Appending the li
    purchasedItems(li);
    deleteItems(li);
  }
}

// Function for change color for the purchased items
function purchasedItems(value) {
  markPurcahesed.addEventListener("click", () => {
    value.style.textDecoration = "line-through";
    value.style.color = "green";
  });
}

// Functions that delete all the list items
function deleteItems(value) {
  clearList.addEventListener("click", () => {
    value.remove();
    let index = arrayList.indexOf(value.textContent);
    if (index !== -1) {
      arrayList.splice(index, 1);
      console.log(arrayList);
    }
  });
}
