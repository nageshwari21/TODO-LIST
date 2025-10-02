const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// ✅ Add new task
function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.textContent = inputBox.value;

    // create cross (×) to delete
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    listContainer.appendChild(li);
    saveData();
  }
  inputBox.value = "";
}

// ✅ Toggle task checked / delete on click
listContainer.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
}, false);

// ✅ Save to localStorage
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

// ✅ Load data from localStorage
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data") || "";
}

showTask();
