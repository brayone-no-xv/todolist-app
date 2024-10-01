// function addTask() {
//     button.addEventListener('click', () => {
//         const ul     = document.querySelector('.listItems');
//         const li     = document.createElement('li');
//         const liTeks = document.createTextNode('Item baru');

const input = document.getElementById("userInput"); // digunakan untuk mencari elemen dalam HTML berdasarkan 'id' tertentu.
const item = document.getElementsByTagName("li"); // menambahkan item, jika ada beberapa elemen '<li></li>'
const ul = document.querySelector("ul"); // mencari elemen yang cocok berdasarkan selector CSS, jika ada elemen seperti '<ul></ul>'
const li = document.createElement("li");
const liTeks = document.createTextNode("tes");

const enter = document.getElementById("enter");
enter.onclick = () => {
  ul.appendChild(li);
  li.appendChild(document.createTextNode(input.nodeValue));
  input.nodeValue = "tes ";
};

function listItem() {
  li.classList.toggle("done");
  li.addEventListener("click", listItem);
}

const deletes = document.getElementById("deleteItem");
deletes.onclick = () => {
  li.classList.toggle("delete");
  ul.removeChild(li);
};
