const input = document.getElementById("userInput"); 
const ul = document.querySelector("ul"); 

try {
  const obj = {
    deleteTask : document.getElementsByTagName("li"),
  };
} finally {
  const task = document.getElementsByTagName("li")
  const deletes = document.getElementById("deleteItem");
    deletes.onclick = () => {
    ul.removeChild(task[0]);
  };
};

const strip = {
  test() {
    document.getElementById("li").innerHTML;
    document.getElementsByTagName("li").innerText = "1";
  }
}

const enter = document.getElementById("enter");
enter.onclick = () => {
  const li = document.createElement("li");
  ul.appendChild(li);
  li.appendChild(document.createTextNode(input.value));
  input.value = strip.test() + "";
};