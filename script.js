const input = document.getElementById("userInput");
const ul = document.querySelector("ul");
const task = document.getElementsByTagName("li");

const enter = document.getElementById("enter");
enter.ondblclick = () => {
  const li = document.createElement("li");
  ul.appendChild(li);
  li.appendChild(document.createTextNode(input.value));
  input.value = "";
  console.alert("tes");
};

const deletes = document.getElementById("deleteItem");
deletes.onclick = () => {
  ul.removeChild(task[0]);
};
