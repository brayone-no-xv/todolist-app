const input = document.getElementById("userInput"); 
const ul = document.querySelector("ul"); 

try {
  // const repeat = [1,2,3];

  // for (const property of object) {
  //   console.log(`${property}: ${repeat[property]}`);
  // }

} finally {
  const task = document.getElementsByTagName("li")
  const deletes = document.getElementById("deleteItem");
    deletes.onclick = () => {
    ul.removeChild(task[0]);
  };
};

const enter = document.getElementById("enter");
enter.ondblclick = () => {
  const li = document.createElement("li");
  ul.appendChild(li);
  li.appendChild(document.createTextNode(input.value));
  input.value = "";
  console.alert('tes');
};