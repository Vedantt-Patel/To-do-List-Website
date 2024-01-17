const boxinput = document.getElementById("task");
const list = document.getElementById("list-container");

function addtolist() {
  if (boxinput.value === "") {
    alert("Yout must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = boxinput.value;
    list.append(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  boxinput.value = "";
}

list.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
  },
  false
);
