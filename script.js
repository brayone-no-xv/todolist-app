const input = document.getElementById("userInput"); 
const item = document.getElementsByTagName("li"); 
const ul = document.querySelector("ul"); 

const enter = document.getElementById("enter");
enter.onclick = function() {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(input.Value));
  ul.appendChild(li);
  input.value = " ";
};

li.addEventListener("click", function() {
  li.classList.toggle("done");
});

const deletes = document.getElementById("deleteItem");
deletes.onclick = () => {
  li.classList.toggle("delete");
  ul.removeChild(li);
};