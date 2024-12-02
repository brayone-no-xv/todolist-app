const input = document.getElementById("userInput"); 

const listObject = {
  getElementsByTagName: () => document.getElementsByTagName("li"),
  querySelector: () => document.querySelector("ul"),
};

// const task = document.getElementsByTagName("li"); 
// const ul = document.querySelector("ul"); 

// const enter = document.getElementById("enter");
// enter.onclick = () => {
//   const li = document.createElement("li");
//   ul.appendChild(li);
//   li.appendChild(document.createTextNode(input.value));/
//   input.value = "";
// };

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
    ul.removeChild(listObject[0]);
  };
  
  myObject.enter();