const input = document.getElementById("userInput");         
        
const enter = document.getElementById("enter");
  enter.onclick = () => {
  const li = document.createElement("li");
  ul.appendChild(li);
  li.appendChild(document.createTextNode(input.value));
  input.value = "";
};

const myObject = {
  item : document.getElementsByTagName("li"), 
  delete() {
  const ul = document.querySelector("ul"); 
  ul.removeChild(this.item[0]);
  },
};

document.getElementById("delete").onclick = () => {
  myObject.delete();
};