const input = document.getElementById("userInput"); 
const item = document.getElementsByTagName("li"); 
const ul = document.querySelector("ul"); 

const enter = document.getElementById("enter");
enter.onclick = () => {
  const li = document.createElement("li");
  ul.appendChild(li);
  
  li.appendChild(document.createTextNode(input.value));
  input.value = "";
};

// item.addEventListener("click", function() {
//   li.classList.toggle("done");
// });

const deletes = document.getElementById("deleteItem");
deletes.onclick = () => {
  item.classList.toggle("delete");
  ul.removeChild(item[0]);
};