const input = document.getElementById("userInput"); 
const ul = document.querySelector("ul"); 
//const task = document.getElementsByTagName("li"); 

// const obj = {
//   deleteTask : function() {
//   return document.getElementsByTagName("li");
//   }  
// };

const obj = {
  deleteTask : document.getElementsByTagName("li")
};

const enter = document.getElementById("enter");
enter.onclick = () => {
  const li = document.createElement("li");
  ul.appendChild(li);
  li.appendChild(document.createTextNode(input.value));
  input.value = "";
};

// const tesId = {
//   getElementById : (enter) => document.getElementById(enter), 
// }

// const myObject = {
//   enter: () => {
//     const li = document.createElement("li");
//     ul.appendChild(li);
//     li.appendChild(document.createTextNode(input.value));
//     input.value = "";  
//   }
// };
  
  const deletes = document.getElementById("deleteItem");
  deletes.onclick = () => {
    ul.removeChild(obj[0]);
    obj.shift();
  };
  
  // obj.deleteTask();